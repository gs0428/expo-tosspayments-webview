import { type ConfigPlugin, withInfoPlist } from "@expo/config-plugins";

import { TOSS_PAYMENTS_IOS_SCHEMES } from "../constants/ios-schemes";

/**
 * iOS Info.plist에 LSApplicationQueriesSchemes 추가
 * iOS 9+ 에서 URL Scheme 가시성을 위해 필요
 */
export const withIosQueries: ConfigPlugin = (config) => {
  return withInfoPlist(config, (config) => {
    const infoPlist = config.modResults;

    // Scheme 목록 가져오기
    const schemes = TOSS_PAYMENTS_IOS_SCHEMES;

    // LSApplicationQueriesSchemes 배열 생성 또는 가져오기
    const existingSchemesValue = infoPlist.LSApplicationQueriesSchemes;
    const existingSchemes: string[] = Array.isArray(existingSchemesValue)
      ? existingSchemesValue.filter((scheme): scheme is string => typeof scheme === "string")
      : [];

    // 새로운 Scheme 추가 (중복 제거)
    const allSchemes = Array.from(new Set([...existingSchemes, ...schemes]));

    infoPlist.LSApplicationQueriesSchemes = allSchemes.sort();

    return config;
  });
};
