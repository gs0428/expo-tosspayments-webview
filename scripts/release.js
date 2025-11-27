#!/usr/bin/env node

/**
 * 배포 자동화 스크립트
 *
 * 사용법:
 *   pnpm release patch   # 1.0.0 -> 1.0.1
 *   pnpm release minor   # 1.0.0 -> 1.1.0
 *   pnpm release major   # 1.0.0 -> 2.0.0
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const VERSION_TYPES = ["patch", "minor", "major"];
const versionType = process.argv[2];

// 버전 타입 검증
if (!VERSION_TYPES.includes(versionType)) {
  console.error(
    `❌ 잘못된 버전 타입입니다. 다음 중 하나를 선택하세요: ${VERSION_TYPES.join(", ")}`
  );
  process.exit(1);
}

console.log(`🚀 배포 프로세스를 시작합니다... (${versionType})`);

// 1. Git 작업 디렉토리가 깨끗한지 확인
try {
  const gitStatus = execSync("git status --porcelain", { encoding: "utf-8" });
  if (gitStatus.trim()) {
    console.error("❌ 커밋되지 않은 변경사항이 있습니다. 먼저 커밋해주세요.");
    console.error("\n변경사항:");
    console.error(gitStatus);
    process.exit(1);
  }
} catch (error) {
  console.error("❌ Git 상태 확인 실패:", error.message);
  process.exit(1);
}

// 2. 현재 브랜치 확인
let currentBranch;
try {
  currentBranch = execSync("git branch --show-current", { encoding: "utf-8" }).trim();
  console.log(`📍 현재 브랜치: ${currentBranch}`);
} catch (error) {
  console.error("❌ 브랜치 확인 실패:", error.message);
  process.exit(1);
}

// 3. 원격 저장소 최신 상태 확인
try {
  console.log("🔄 원격 저장소 최신 상태 확인 중...");
  execSync("git fetch", { stdio: "inherit" });

  const localCommit = execSync("git rev-parse HEAD", { encoding: "utf-8" }).trim();
  const remoteCommit = execSync(`git rev-parse origin/${currentBranch}`, {
    encoding: "utf-8",
  }).trim();

  if (localCommit !== remoteCommit) {
    console.error("❌ 로컬 브랜치가 원격 브랜치와 동기화되지 않았습니다.");
    console.error("   먼저 git pull 또는 git push를 해주세요.");
    process.exit(1);
  }
} catch (error) {
  console.warn("⚠️  원격 저장소 확인 실패 (계속 진행합니다):", error.message);
}

// 4. 빌드 실행
try {
  console.log("🔨 빌드 중...");
  execSync("pnpm build", { stdio: "inherit" });
  console.log("✅ 빌드 완료");
} catch (error) {
  console.error("❌ 빌드 실패:", error.message);
  process.exit(1);
}

// 5. Lint 확인
try {
  console.log("🔍 Lint 확인 중...");
  execSync("pnpm lint", { stdio: "inherit" });
  console.log("✅ Lint 통과");
} catch (error) {
  console.error("❌ Lint 실패:", error.message);
  process.exit(1);
}

// 6. 버전 업데이트 (커밋과 태그 자동 생성)
try {
  console.log(`📦 버전 업데이트 중 (${versionType})...`);
  execSync(`npm version ${versionType} -m "chore: bump version to %s"`, {
    stdio: "inherit",
  });
  console.log("✅ 버전 업데이트 완료");
} catch (error) {
  console.error("❌ 버전 업데이트 실패:", error.message);
  process.exit(1);
}

// 7. Git push (태그 포함)
try {
  console.log("📤 Git push 중 (태그 포함)...");
  execSync("git push --follow-tags", { stdio: "inherit" });
  console.log("✅ Git push 완료");
} catch (error) {
  console.error("❌ Git push 실패:", error.message);
  console.error("   수동으로 실행해주세요: git push --follow-tags");
  process.exit(1);
}

// 8. npm publish
try {
  console.log("📦 npm publish 중...");
  execSync("npm publish", { stdio: "inherit" });
  console.log("✅ npm publish 완료");
} catch (error) {
  console.error("❌ npm publish 실패:", error.message);
  process.exit(1);
}

// 9. 완료 메시지
const packageJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "package.json"), "utf-8")
);

console.log("\n🎉 배포가 완료되었습니다!");
console.log(`📌 버전: ${packageJson.version}`);
console.log(`📦 패키지: ${packageJson.name}`);
console.log("\n다음 단계:");
console.log("- GitHub Releases에 릴리즈 노트 작성");
console.log("- 사용자들에게 업데이트 알림");
