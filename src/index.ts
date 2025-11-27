import { type ConfigPlugin } from "@expo/config-plugins";

import { withAndroidQueries } from "./plugins/with-android-queries";
import { withIosQueries } from "./plugins/with-ios-queries";

/**
 * 토스페이먼츠 WebView 연동을 위한 Expo Config Plugin
 *
 * @param config - Expo config
 * @returns 수정된 Expo config
 *
 * @example
 * ```ts
 * // app.json 또는 app.config.js
 * {
 *   plugins: ["expo-toss-payments-webview"]
 * }
 * ```
 */
const withTossPaymentsWebView: ConfigPlugin = (config) => {
  // Android queries 추가
  config = withAndroidQueries(config);

  // iOS queries 추가
  config = withIosQueries(config);

  return config;
};

export default withTossPaymentsWebView;

// 유틸리티 함수들도 export
export { handleAppScheme, isAppScheme, shouldLoadURL } from "./utils/app-scheme-handler";

export type { LinkingModule } from "./utils/app-scheme-handler";
