import { Pagable } from './Pagable'

export class Pagination<T> {
  constructor(
    private values: Pagable<T>,
    readonly perPage: number = 20,
    readonly current: number = 1,
    readonly prev: number = 0,
    readonly next: number = 2,
  ) {}

  get currentPageValues(): T[] {
    const start = (this.current - 1) * this.perPage
    const end = start + this.perPage
    return this.values.slice(start, end).values
  }

  get length(): number {
    return Math.ceil(this.values.length / this.perPage)
  }

  toPage(page: number): Pagination<T> {
    return new Pagination(this.values, this.perPage, page, page - 1, page + 1)
  }
}
