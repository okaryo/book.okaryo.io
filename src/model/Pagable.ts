export interface Pagable<T> {
  values: T[]
  slice(start: number, end: number): Pagable<T>
  length: number
}
