import { Author } from "../../src/model/Author"
import { Book } from "../../src/model/Book"
import { BookRecord } from "../../src/model/BookRecord"
import { BookRecords } from "../../src/model/BookRecords"

describe('#totalCount', () => {
  test('should return total count of records', () => {
    const actual = new BookRecords([
      new BookRecord(
        new Date(2022, 3, 20),
        'review',
        new Book(10, 'title', 'url', new Author('name'))
      ),
      new BookRecord(
        new Date(2022, 3, 20),
        'review',
        new Book(10, 'title', 'url', new Author('name'))
      ),
    ]).totalCount
    const expected = 2

    expect(actual).toBe(expected)
  })
})

describe('#totalPage', () => {
  test('should return total pages of records', () => {
    const actual = new BookRecords([
      new BookRecord(
        new Date(2022, 3, 20),
        'review',
        new Book(10, 'title', 'url', new Author('name'))
      ),
      new BookRecord(
        new Date(2022, 3, 20),
        'review',
        new Book(10, 'title', 'url', new Author('name'))
      ),
    ]).totalPage
    const expected = 20

    expect(actual).toBe(expected)
  })
})