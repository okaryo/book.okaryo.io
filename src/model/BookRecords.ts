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

  filterByPaperFormat(): BookRecords {
    const records = this.values.filter(record => record.format === 'Paper')
    return new BookRecords(records)
  }

  filterByAudibleFormat(): BookRecords {
    const records = this.values.filter(record => record.format === 'Audible')
    return new BookRecords(records)
  }

  filterByKindleFormat(): BookRecords {
    const records = this.values.filter(record => record.format === 'Kindle')
    return new BookRecords(records)
  }

  filterByEbookFormat(): BookRecords {
    const records = this.values.filter(record => record.format === 'Ebook')
    return new BookRecords(records)
  }

  filterByRereading(): BookRecords {
    const records = this.values.filter(record => record.isRereading)
    return new BookRecords(records)
  }
}
