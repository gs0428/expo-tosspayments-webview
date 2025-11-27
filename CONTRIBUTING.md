# 기여하기

이 프로젝트에 기여해주셔서 감사해요! 🎉

## 개발 환경 설정

1. 레포지토리를 포크하고 클론해주세요.

```bash
git clone https://github.com/gs0428/expo-tosspayments-webview.git
cd expo-tosspayments-webview
```

2. 의존성을 설치해주세요.

```bash
pnpm install
```

3. 개발 모드에서 빌드해주세요.

```bash
pnpm build
```

## 개발 워크플로우

1. 새로운 브랜치를 생성해주세요.

```bash
git checkout -b feature/your-feature-name
```

2. 변경 사항을 만들어주세요.

3. 코드를 린트해주세요.

```bash
pnpm lint
```

4. 빌드를 확인해주세요.

```bash
pnpm build
```

5. 변경 사항을 커밋해주세요.

```bash
git add .
git commit -m "feat: your feature description"
```

6. 브랜치를 푸시하고 PR을 생성해주세요.

```bash
git push origin feature/your-feature-name
```

## 커밋 메시지 컨벤션

이 프로젝트는 [Conventional Commits](https://www.conventionalcommits.org/)를 따르고 있어요.

- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 포맷팅, 세미콜론 누락 등
- `refactor`: 코드 리팩토링
- `chore`: 빌드 프로세스 또는 보조 도구 변경

## 코드 스타일

- TypeScript를 사용해요.
- ESLint 규칙을 따르고 있어요.
- Prettier를 사용하여 코드를 포맷팅해요.
- 모든 타입을 명시적으로 정의해요. (any 사용 지양)

## PR 프로세스

1. PR을 제출하기 전에 다음을 확인해주세요.
   - 코드가 린트 규칙을 통과했는지
   - 빌드가 성공했는지
   - 변경 사항에 대한 테스트를 수행했는지

2. PR 설명에는 다음을 포함해주세요.
   - 변경 사항의 설명
   - 변경 이유
   - 관련된 이슈 번호 (있는 경우)
