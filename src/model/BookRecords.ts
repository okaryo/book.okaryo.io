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

  totalCountByYear(date: Date): number {
    const year = date.getFullYear()
    return this.values.reduce((sum, record) => {
      if (record.date !== null && record.date.getFullYear() === year) {
        return sum + 1
      }
      return sum
    }, 0)
  }

  totalPageByYear(date: Date): number {
    const year = date.getFullYear()
    return this.values.reduce((sum, record) => {
      if (record.date !== null && record.date.getFullYear() === year) {
        return sum + record.page
      }
      return sum
    }, 0)
  }

  totalCountByMonth(date: Date): number {
    const year = date.getFullYear()
    const month = date.getMonth()

    return this.values.reduce((sum, record) => {
      if (record.date !== null && record.date.getFullYear() === year && record.date.getMonth() === month) {
        return sum + 1
      }
      return sum
    }, 0)
  }

  totalPageByMonth(date: Date): number {
    const year = date.getFullYear()
    const month = date.getMonth()

    return this.values.reduce((sum, record) => {
      if (record.date !== null && record.date.getFullYear() === year && record.date.getMonth() === month) {
        return sum + record.page
      }
      return sum
    }, 0)
  }
}
