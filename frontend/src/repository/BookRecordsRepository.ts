import { BookRecords } from '../model/BookRecords'
import BookRecordsJson from '../../../data/book-list.json'
import { BookRecord } from '../model/BookRecord'
import { Book } from '../model/Book'
import { Author } from '../model/Author'

type RecordType = {
  date: string | null,
  review: string,
  book: {
    page: number,
    title: string,
    url: string,
    author: {
      name: string,
    }
  },
  format: 'Paper' | 'Audible' | 'Kindle' | 'Ebook',
  isRereading: boolean,
}

export class BookRecordsRepository {
  static getBookRecords = (): BookRecords => {
    const json = BookRecordsJson
    const records = json.records.map((record: RecordType) => {
      return new BookRecord(
        record.date === null ? null : new Date(record.date),
        record.review === '' ? 'No Review' : record.review,
        new Book(
          record.book.page,
          record.book.title,
          record.book.url,
          new Author(record.book.author.name)
        ),
        record.format,
        record.isRereading
      )
    })
    return new BookRecords(records)
  }
}
