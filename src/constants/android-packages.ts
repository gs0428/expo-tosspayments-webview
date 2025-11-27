/**
 * 토스페이먼츠 WebView 연동에 필요한 Android 패키지 목록
 * 결제 과정에서 이동할 수 있는 모든 카드사/은행/간편결제 앱 패키지들
 *
 * 출처: 토스페이먼츠 v2 공식 문서 - 웹뷰(WebView) 연동하기
 * @see https://docs.tosspayments.com/guides/v2/webview
 * AndroidManifest.xml의 queries 섹션에 추가되는 패키지명
 */
export const TOSS_PAYMENTS_ANDROID_PACKAGES = [
  "com.kakao.talk", // 카카오톡
  "com.nhn.android.search", // 네이버페이
  "com.samsung.android.spay", // 삼성페이
  "net.ib.android.smcard", // 모니모페이
  "com.mobiletoong.travelwallet", // 신한카드 트레블월렛
  "com.samsung.android.spaylite", // 삼성페이
  "com.ssg.serviceapp.android.egiftcertificate", // SSGPAY
  "com.nhnent.payapp", // PAYCO
  "com.lottemembers.android", // L.POINT
  "viva.republica.toss", // 토스
  "com.shinhan.smartcaremgr", // 신한 슈퍼SOL
  "com.shinhan.sbanking", // 신한 SOL뱅크
  "com.shcard.smartpay", // 신한페이판
  "com.shinhancard.smartshinhan", // 신한페이판-공동인증서
  "com.hyundaicard.appcard", // 현대카드
  "com.lumensoft.touchenappfree", // 현대카드-공동인증서
  "kr.co.samsungcard.mpocket", // 삼성카드
  "nh.smart.nhallonepay", // 올원페이
  "com.kbcard.cxh.appcard", // KB Pay
  "com.kbstar.liivbank", // Liiv(KB국민은행)
  "com.kbstar.reboot", // Liiv Reboot(KB국민은행)
  "com.kbstar.kbbank", // 스타뱅킹(KB국민은행)
  "kvp.jjy.MispAndroid320", // ISP/페이북
  "com.lcacApp", // 롯데카드
  "com.hanaskcard.paycla", // 하나카드
  "com.hanaskcard.rocomo.potal", // 하나카드
  "kr.co.hanamembers.hmscustomer", // 하나멤버스
  "kr.co.citibank.citimobile", // 씨티모바일
  "com.wooricard.wpay", // 우리페이
  "com.wooricard.smartapp", // 우리카드
  "com.wooribank.smart.npib", // 우리WON뱅킹
  "com.lguplus.paynow", // 페이나우
  "com.kftc.bankpay.android", // 뱅크페이
  "com.TouchEn.mVaccine.webs", // TouchEn mVaccine (신한)
  "kr.co.shiftworks.vguardweb", // V-Guard (삼성)
  "com.ahnlab.v3mobileplus", // V3 (NH, 현대)
  "com.kakaobank.channel", // 카카오뱅크
];
