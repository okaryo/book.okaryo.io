import { Book } from './Book'

export class BookRecord {
  constructor(
    readonly date: Date | null,
    readonly review: string,
    readonly book: Book,
    readonly format: 'Paper' | 'Audible' | 'Kindle' | 'Ebook',
    readonly isRereading: boolean,
  ) {}

  get page(): number {
    return this.book.page
  }

  get formatDate(): string {
    if (this.date === null) return 'No Date'
    return `${this.date.getFullYear()}年${this.date.getMonth() + 1}月${this.date.getDate()}日`
  }
}
