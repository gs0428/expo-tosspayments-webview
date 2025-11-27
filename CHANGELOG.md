# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
