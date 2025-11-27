import { type ConfigPlugin, withAndroidManifest } from "@expo/config-plugins";

import { TOSS_PAYMENTS_ANDROID_PACKAGES } from "../constants/android-packages";
import { isRecord } from "../types/guards";

/**
 * Android Manifest Query 타입 정의
 */
type PackageElement = {
  $: {
    "android:name": string;
  };
};

type PackageQuery = {
  package: PackageElement[];
};

type QueryElement = PackageQuery | unknown;

/**
 * 타입 가드: PackageQuery인지 확인
 */
function isPackageQuery(query: QueryElement): query is PackageQuery {
  return (
    typeof query === "object" &&
    query !== null &&
    "package" in query &&
    Array.isArray(query.package)
  );
}

/**
 * 타입 가드: PackageElement인지 확인
 */
function isPackageElement(pkg: unknown): pkg is PackageElement {
  if (typeof pkg !== "object" || pkg === null) {
    return false;
  }

  if (!("$" in pkg)) {
    return false;
  }

  const attributes = pkg.$;
  if (!isRecord(attributes)) {
    return false;
  }

  const androidName = attributes["android:name"];
  return typeof androidName === "string";
}

/**
 * Android Manifest에 queries 섹션 추가
 * Android 11+ 에서 패키지 가시성을 위해 필요
 */
export const withAndroidQueries: ConfigPlugin = (config) => {
  return withAndroidManifest(config, (config) => {
    const androidManifest = config.modResults;
    const { manifest } = androidManifest;

    if (!manifest) {
      return config;
    }

    // 패키지 목록 가져오기
    const packages = TOSS_PAYMENTS_ANDROID_PACKAGES;

    // queries 섹션이 이미 있는지 확인
    if (!manifest.queries) {
      manifest.queries = [];
    }

    // 기존 package 요소들을 확인하여 중복 제거
    const existingPackages = new Set<string>();

    if (Array.isArray(manifest.queries)) {
      for (const query of manifest.queries) {
        if (isPackageQuery(query)) {
          for (const pkg of query.package) {
            if (isPackageElement(pkg)) {
              const packageName = pkg.$["android:name"];
              existingPackages.add(packageName);
            }
          }
        }
      }
    }

    // 새로운 패키지들을 추가
    const packagesToAdd = packages.filter((pkg) => !existingPackages.has(pkg));

    if (packagesToAdd.length > 0) {
      // package 요소들을 생성
      const packageElements: PackageElement[] = packagesToAdd.map((pkg) => ({
        $: {
          "android:name": pkg,
        },
      }));

      // queries 배열에 package 요소들을 가진 객체 찾기 또는 생성
      if (!Array.isArray(manifest.queries)) {
        manifest.queries = [];
      }

      let packageQuery: PackageQuery | undefined = manifest.queries.find(isPackageQuery);

      if (!packageQuery) {
        packageQuery = { package: [] };
        manifest.queries.push(packageQuery);
      }

      // 패키지들을 추가
      packageQuery.package.push(...packageElements);
    }

    return config;
  });
};
