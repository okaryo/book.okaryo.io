import { BookRecord } from './BookRecord'
import { Pagable } from './Pagable'

export class BookRecords implements Pagable<BookRecord> {
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

  get paperFormatRecords(): BookRecords {
    const records = this.values.filter(record => record.format === 'Paper')
    return new BookRecords(records)
  }

  get audibleFormatRecords(): BookRecords {
    const records = this.values.filter(record => record.format === 'Audible')
    return new BookRecords(records)
  }

  get kindleFormatRecords(): BookRecords {
    const records = this.values.filter(record => record.format === 'Kindle')
    return new BookRecords(records)
  }

  get ebookFormatRecords(): BookRecords {
    const records = this.values.filter(record => record.format === 'Ebook')
    return new BookRecords(records)
  }

  get rereadingRecords(): BookRecords {
    const records = this.values.filter(record => record.isRereading)
    return new BookRecords(records)
  }

  get validDateRecords(): BookRecords {
    const records = this.values.filter(record => record.date !== null)
    return new BookRecords(records)
  }

  get noDateRecords(): BookRecords {
    const records = this.values.filter(record => record.date === null)
    return new BookRecords(records)
  }

  get sortAscByDate(): BookRecords {
    const records = this.validDateRecords.values.sort((a, b) => {
      return a.date.getTime() - b.date.getTime()
    })
    return new BookRecords(records)
  }

  get sortDescByDate(): BookRecords {
    const records = this.validDateRecords.values.sort((a, b) => {
      return b.date.getTime() - a.date.getTime()
    })
    return new BookRecords(records)
  }

  get sortDescByPage(): BookRecords {
    const records = this.values.filter(record => !record.isRereading).sort((a, b) => {
      return b.book.page - a.book.page
    })
    return new BookRecords(records)
  }

  get length(): number { return this.values.length }

  slice(start: number, end: number): BookRecords {
    return new BookRecords(this.values.slice(start, end))
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

  searchByTitle(value: string): BookRecords {
    if (value === '') return this

    const records = this.values.filter((record) => record.book.title.includes(value))
    return new BookRecords(records)
  }
}
