# expo-tosspayments-webview

토스페이먼츠 WebView 연동을 위한 Expo Config Plugin입니다. Android와 iOS에서 토스페이먼츠 결제 완료 후 앱으로 돌아오는 딥링크를 지원합니다.

## 📦 설치

```bash
npm install expo-tosspayments-webview
```

```bash
yarn add expo-tosspayments-webview
```

```bash
pnpm add expo-tosspayments-webview
```

## 🚀 사용법

### 기본 사용법

`app.json` 또는 `app.config.js`에 플러그인을 추가하세요:

```json
{
  "expo": {
    "plugins": ["expo-tosspayments-webview"]
  }
}
```

### WebView에서 딥링크 처리

React Native WebView에서 결제 완료 후 앱으로 돌아오기:

```tsx
import { Linking } from "react-native";
import WebView, { type WebViewNavigation } from "react-native-webview";
import { shouldLoadURL } from "expo-tosspayments-webview";

export default function PaymentWebView() {
  const onShouldStartLoadWithRequest = (request: WebViewNavigation) => {
    return shouldLoadURL(request.url, Linking);
  };

  return (
    <WebView
      source={{ uri: "https://webview-url.com" }}
      onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
      style={{ flex: 1 }}
    />
  );
}
```

> **💡 참고**: `Linking` 모듈은 필수 파라미터입니다. React Native의 `Linking` 모듈을 전달해야 합니다.

## 📖 API

### 유틸리티 함수

#### `isAppScheme(url: string): boolean`

URL이 앱 스킴인지 확인합니다.

#### `shouldLoadURL(url: string, linking: LinkingModule): boolean`

WebView의 `onShouldStartLoadWithRequest` 콜백에서 사용할 수 있는 헬퍼 함수입니다. 앱 스킴 URL을 감지하면 외부 앱을 열고 WebView에서 로드를 중단합니다. `linking` 파라미터는 필수입니다.

## ⚙️ 요구사항

- Expo SDK 49 이상
- `react-native-webview` 13.0.0 이상
- Android 11+ (패키지 가시성 쿼리)
- iOS 9+ (URL Scheme 쿼리)

## 🔍 문제 해결 (Troubleshooting)

### Android에서 앱이 열리지 않을 때

1. `app.json`에 플러그인이 올바르게 설정되어 있는지 확인
2. `npx expo prebuild --clean` 실행
3. Android Manifest 파일에 queries 섹션이 추가되었는지 확인

### iOS에서 앱이 열리지 않을 때

1. `app.json`에 플러그인이 올바르게 설정되어 있는지 확인
2. `npx expo prebuild --clean` 실행
3. Info.plist에 `LSApplicationQueriesSchemes` 배열이 추가되었는지 확인

### WebView에서 계속 로드될 때

`shouldLoadURL`에서 `false`를 반환해야 합니다. 함수가 제대로 연결되어 있는지 확인하세요.

## 📚 참고 자료

- [토스페이먼츠 문서](https://docs.tosspayments.com/)
- [토스페이먼츠 v2 - 웹뷰(WebView) 연동하기](https://docs.tosspayments.com/guides/v2/webview)
- [Expo Config Plugins](https://docs.expo.dev/config-plugins/introduction/)
- [React Native WebView](https://github.com/react-native-webview/react-native-webview)

## 📄 라이선스

MIT

## 🤝 기여

이슈와 PR을 환영합니다!
