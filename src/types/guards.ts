/**
 * 공통 타입 가드 함수들
 */

/**
 * 타입 가드: Record<string, unknown>인지 확인
 * @param value - 확인할 값
 * @returns Record<string, unknown> 타입 여부
 */
export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
