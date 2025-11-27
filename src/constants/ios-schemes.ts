/**
 * 토스페이먼츠 WebView 연동에 필요한 iOS URL Scheme 목록
 * 결제 과정에서 이동할 수 있는 모든 카드사/은행/간편결제 앱 스킴들
 *
 * 출처: 토스페이먼츠 v2 공식 문서 - 웹뷰(WebView) 연동하기
 * @see https://docs.tosspayments.com/guides/v2/webview
 *
 * 참고:
 * - 앱스킴 리스트 테이블: `supertoss://` (실제 URL 형태)
 * - Info.plist의 LSApplicationQueriesSchemes: `supertoss` (스킴 이름만)
 * - URL 체크 시에는 '://' 접미사가 포함된 형태(`supertoss://`)로 비교합니다.
 */
export const TOSS_PAYMENTS_IOS_SCHEMES = [
  "supertoss", // 토스페이
  "kb-acp", // 국민카드
  "liivbank", // 국민카드
  "newliiv", // 국민카드
  "kbbank", // 국민카드
  "nhappcardansimclick", // 농협카드
  "nhallonepayansimclick", // 농협카드
  "nonghyupcardansimclick", // 농협카드
  "lottesmartpay", // 롯데카드
  "lotteappcard", // 롯데카드
  "mpocket.online.ansimclick", // 삼성카드
  "ansimclickscard", // 삼성카드
  "tswansimclick", // 삼성카드
  "ansimclickipcollect", // 삼성카드
  "vguardstart", // 삼성카드
  "samsungpay", // 삼성카드
  "scardcertiapp", // 삼성카드
  "shinhan-sr-ansimclick", // 신한카드
  "smshinhanansimclick", // 신한카드
  "com.wooricard.wcard", // 우리카드
  "newsmartpib", // 우리카드
  "citispay", // 씨티카드
  "citicardappkr", // 씨티카드
  "citimobileapp", // 씨티카드
  "cloudpay", // 하나카드
  "hanawalletmembers", // 하나카드
  "hdcardappcardansimclick", // 현대카드
  "smhyundaiansimclick", // 현대카드
  "shinsegaeeasypayment", // 간편결제
  "payco", // 간편결제
  "lpayapp", // 간편결제
  "ispmobile", // ISP(BC/국민)
  "tauthlink", // 본인인증
  "ktauthexternalcall", // 본인인증
  "upluscorporation", // 본인인증
  "kftc-bankpay", // 뱅크페이
  "kakaotalk", // 카카오톡
  "wooripay", // 우리페이
  "lmslpay", // 간편결제
  "naversearchthirdlogin", // 네이버
  "hanaskcardmobileportal", // 하나카드
  "kb-bankpay", // KB 뱅크페이
  "kakaobank", // 카카오뱅크
  "monimopay", // 삼성카드
  "monimopayauth", // 삼성카드
];
