import { BookRecord } from './BookRecord'

export class BookRecords {
  constructor(
    readonly values: BookRecord[]
  ) {}

  static init(): BookRecords {
    return new BookRecords([])
  }

  get totalCount(): number {
    return this.values.length
  }

  get totalPage(): number {
    return this.values.reduce((sum, record) => {
      return sum + record.page
    }, 0)
  }

  totalCountByYear(year: number): number {
    return this.values.reduce((sum, record) => {
      if (record.date !== null && record.date.getFullYear() === year) {
        return sum + 1
      }
      return sum
    }, 0)
  }

  totalPageByYear(year: number): number {
    return this.values.reduce((sum, record) => {
      if (record.date !== null && record.date.getFullYear() === year) {
        return sum + record.page
      }
      return sum
    }, 0)
  }

  totalCountByMonth(year: number, month: number): number {
    return this.values.reduce((sum, record) => {
      if (record.date !== null && record.date.getFullYear() === year && record.date.getMonth() + 1 === month) {
        return sum + 1
      }
      return sum
    }, 0)
  }

  totalPageByMonth(year: number, month: number): number {
    return this.values.reduce((sum, record) => {
      if (record.date !== null && record.date.getFullYear() === year && record.date.getMonth() + 1 === month) {
        return sum + record.page
      }
      return sum
    }, 0)
  }
}
