import { Author } from "../../src/model/Author"
import { Book } from "../../src/model/Book"
import { BookRecord } from "../../src/model/BookRecord"

describe('#page', () => {
  test('should return book page', () => {
    const book = new Book(10, 'title', 'url', new Author('name'))
    const bookRecord = new BookRecord(new Date(), 'review', book)

    const actual = bookRecord.page
    const expected = 10
    expect(actual).toBe(expected)
  })
})