import { TOSS_PAYMENTS_ANDROID_PACKAGES } from "../constants/android-packages";
import { TOSS_PAYMENTS_IOS_SCHEMES } from "../constants/ios-schemes";

/**
 * React Native Linking 모듈 타입 (런타임에서만 사용)
 */
export interface LinkingModule {
  canOpenURL(url: string): Promise<boolean>;
  openURL(url: string): Promise<void>;
}

/**
 * URL이 토스페이먼츠 결제 관련 앱 스킴인지 확인하는 함수
 * @param url - 확인할 URL
 * @returns 결제 관련 앱 스킴인지 여부
 */
export function isPaymentAppScheme(url: string): boolean {
  // 기본 검증: http, https가 아닌 스킴은 앱 스킴으로 간주
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    // iOS 스킴 확인
    // Info.plist에는 스킴 이름만 있지만, 실제 URL은 '://' 접미사 포함
    if (
      TOSS_PAYMENTS_IOS_SCHEMES.some((scheme) => {
        // 스킴 이름 또는 '://' 접미사가 포함된 형태 모두 체크
        return url.startsWith(`${scheme}://`) || url.startsWith(scheme);
      })
    ) {
      return true;
    }

    // Android 패키지 확인 (intent:// 형태)
    const intentPattern = /^intent:\/\/.*#Intent;package=([^;]+)/;
    const match = url.match(intentPattern);
    if (match && TOSS_PAYMENTS_ANDROID_PACKAGES.includes(match[1])) {
      return true;
    }

    // 그 외 커스텀 스킴들도 앱 스킴으로 간주
    return url.includes("://");
  }

  return false;
}

/**
 * WebView의 shouldStartLoadWithRequest 콜백용 헬퍼 함수
 * 런타임에서 사용되며 react-native의 Linking 모듈이 필요합니다.
 *
 * @param url - 로드하려는 URL
 * @param linking - React Native의 Linking 모듈 (필수)
 * @returns WebView에서 로드를 계속할지 여부
 */
export function shouldLoadURL(url: string, linking: LinkingModule): boolean {
  // 결제 관련 앱 스킴이면 외부 앱으로 열고 WebView 로드 방지
  if (isPaymentAppScheme(url)) {
    // 비동기로 처리하되 기다리지 않음 (fire-and-forget)
    linking.openURL(url).catch((error) => {
      console.warn("[TossPaymentsWebView] Failed to open app scheme:", error);
    });
    return false; // WebView에서 로드하지 않음
  }

  return true; // 일반 URL은 WebView에서 계속 로드
}
