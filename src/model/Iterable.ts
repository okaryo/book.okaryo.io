export interface Iterable<T> {
  values: T[]
  slice(start: number, end: number): Iterable<T>
  length: number
}
