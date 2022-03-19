import { Book } from './Book'

export class BookRecord {
  constructor(
    readonly date: Date,
    readonly review: string,
    readonly book: Book
  ) {}
}
