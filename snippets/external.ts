/* eslint-disable no-console */

// #region snippet
// Dans ./snippets/external.ts
export function emptyArray<T>(length: number) {
  return Array.from<T>({ length })
}
// #endregion snippet

export function sayHello() {
  console.log('Bonjour depuis snippets/external.ts')
}
