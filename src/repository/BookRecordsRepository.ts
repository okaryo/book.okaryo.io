import { BookRecords } from '../model/BookRecords'
import BookRecordsJson from '../data/book-list.json'
import { BookRecord } from '../model/BookRecord'
import { Book } from '../model/Book'
import { Author } from '../model/Author'

export class BookRecordsRepository {
  static getBookRecords = (): BookRecords => {
    const json = BookRecordsJson
    const records = json.records.map(record => {
      return new BookRecord(
        new Date(record.date),
        record.review,
        new Book(
          record.book.page,
          record.book.title,
          record.book.url,
          new Author(record.book.author.name)
        )
      )
    })
    return new BookRecords(records)
  }
}