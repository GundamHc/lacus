export function difference<T>(array: T[], values: T[]): T[] {
  const valuesMap = new Map((values ?? []).map(value => [value, true]));
  return (array ?? []).filter(value => !valuesMap.has(value));
}

export function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array ?? []));
}
