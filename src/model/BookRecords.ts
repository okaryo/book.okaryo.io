import { BookRecord } from './BookRecord'

export class BookRecords {
  constructor(
    readonly values: BookRecord[]
  ) {}

  get totalCount(): number {
    return this.values.length
  }

  get totalPage(): number {
    return this.values.reduce((sum, record) => {
      return sum + record.page
    }, 0)
  }
}
