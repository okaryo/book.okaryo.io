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

describe('#formatDate', () => {
  describe('when date is not null', () => {
    test('should return formated date', () => {
      const book = new Book(10, 'title', 'url', new Author('name'))
      const bookRecord = new BookRecord(new Date('2022-03-20'), 'review', book)

      const actual = bookRecord.formatDate
      const expected = '2022年3月20日'

      expect(actual).toBe(expected)
    })
  })

  describe('when date is null', () => {
    test('should return no date', () => {
      const book = new Book(10, 'title', 'url', new Author('name'))
      const bookRecord = new BookRecord(null, 'review', book)

      const actual = bookRecord.formatDate
      const expected = 'No Date'

      expect(actual).toBe(expected)
    })
  })
})
