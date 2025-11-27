# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.3] - 2025-11-27

### Added

- `util.ts` 파일 생성 (런타임 유틸리티 함수 분리)
- `package.json` exports 필드에 `./util` 경로 추가

### Changed

- 플러그인 함수를 `index.ts`로 이동 (기존 `plugin.ts` 내용)
- 런타임 유틸리티 함수를 `util.ts`로 이동 (기존 `index.ts` 내용)
- `app.plugin.js`가 `build/index.js`를 참조하도록 변경
- README에서 런타임 유틸리티 import 경로를 `expo-tosspayments-webview/util`로 변경

### Removed

- `plugin.ts` 파일 제거 (기능은 `index.ts`로 이동)

## [1.0.2] - 2025-11-27

### Added

- 배포 자동화 스크립트 (`scripts/release.js`)

### Changed

- 플러그인 코드를 `plugin.ts`로 분리
- `index.ts`는 런타임 유틸리티만 export하도록 변경
- `app.plugin.js`가 `build/plugin.js`를 참조하도록 변경
- `package.json` exports 필드 정리 (`./package.json` 및 `./runtime` 경로 제거)

### Removed

- `runtime.ts` 파일 제거 (기능은 `index.ts`로 이동)

## [1.0.1] - 2025-11-27

### Changed

- `shouldLoadURL` 함수를 동기 함수로 변경 (`Promise<boolean>` → `boolean`)
- `shouldLoadURL`의 `linking` 파라미터를 필수로 변경

### Removed

- `handleAppScheme` 함수 제거 (더 이상 사용되지 않음, `shouldLoadURL`에서 직접 `linking.openURL` 호출)

## [1.0.0] - 2025-11-27

### Added

- Android 11+ 패키지 가시성 쿼리 자동 설정 기능 (`withAndroidQueries`)
- iOS 9+ URL Scheme 쿼리 자동 설정 기능 (`withIosQueries`)
- 토스페이먼츠 v2 공식 문서 기준 모든 결제 앱 패키지/스킴 기본 포함
  - Android 패키지 35개 (토스, 카카오톡, 네이버페이, 삼성페이, 국민카드, 신한카드 등)
  - iOS 스킴 45개 (토스페이, 국민카드, 농협카드, 삼성카드, 신한카드 등)
- WebView 유틸리티 함수 제공
  - `isAppScheme`: URL이 앱 스킴인지 확인
  - `shouldLoadURL`: WebView의 `onShouldStartLoadWithRequest` 콜백용 헬퍼 함수
- TypeScript 완전 지원 (타입 정의 포함)
- 문서화 (README.md, API 문서, 사용 예제)
