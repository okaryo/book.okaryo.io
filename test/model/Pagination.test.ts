import { Author } from "../../src/model/Author"
import { Book } from "../../src/model/Book"
import { BookRecord } from "../../src/model/BookRecord"
import { BookRecords } from "../../src/model/BookRecords"
import { Pagination } from "../../src/model/Pagination"

describe('#currentPageValues', () => {
  test('should return current values', () => {
    const actual = new Pagination(
      new BookRecords([
        new BookRecord(
          new Date(2022, 3, 20),
          'review',
          new Book(10, 'title', 'url', new Author('name')),
          'Paper',
          false
        ),
        new BookRecord(
          new Date(2022, 3, 20),
          'review',
          new Book(10, 'title', 'url', new Author('name')),
          'Paper',
          false
        ),
      ]),
      1,
      2,
    ).currentPageValues
    const expected = [
      new BookRecord(
        new Date(2022, 3, 20),
        'review',
        new Book(10, 'title', 'url', new Author('name')),
        'Paper',
        false
      ),
    ]

    expect(actual).toEqual(expected)
  })
})

describe('#length', () => {
  test('should return 2 when perPage is 1, and values length is 2', () => {
    const actual = new Pagination(
      new BookRecords([
        new BookRecord(
          new Date(2022, 3, 20),
          'review',
          new Book(10, 'title', 'url', new Author('name')),
          'Paper',
          false
        ),
        new BookRecord(
          new Date(2022, 3, 20),
          'review',
          new Book(10, 'title', 'url', new Author('name')),
          'Paper',
          false
        ),
      ]),
      1,
      2,
    ).length
    const expected = 2

    expect(actual).toEqual(expected)
  })
})

describe('#toPage', () => {
  test('should return new pagination', () => {
    const actual = new Pagination(
      new BookRecords([
        new BookRecord(
          new Date(2022, 3, 20),
          'review',
          new Book(10, 'title', 'url', new Author('name')),
          'Paper',
          false
        ),
        new BookRecord(
          new Date(2022, 3, 20),
          'review',
          new Book(10, 'title', 'url', new Author('name')),
          'Paper',
          false
        ),
      ]),
      1,
    ).toPage(2)
    const expected = new Pagination(
      new BookRecords([
        new BookRecord(
          new Date(2022, 3, 20),
          'review',
          new Book(10, 'title', 'url', new Author('name')),
          'Paper',
          false
        ),
        new BookRecord(
          new Date(2022, 3, 20),
          'review',
          new Book(10, 'title', 'url', new Author('name')),
          'Paper',
          false
        ),
      ]),
      1,
      2,
      1,
      3,
    )

    expect(actual).toEqual(expected)
  })
})

describe('#updateSource', () => {
  test('should return new pagination', () => {
    const actual = new Pagination(
      new BookRecords([
        new BookRecord(
          new Date(2022, 3, 20),
          'review',
          new Book(10, 'title', 'url', new Author('name')),
          'Paper',
          false
        ),
        new BookRecord(
          new Date(2022, 3, 20),
          'review',
          new Book(10, 'title', 'url', new Author('name')),
          'Paper',
          false
        ),
      ]),
      10,
      1,
      0,
      2,
    ).updateSource(
      new BookRecords([
        new BookRecord(
          new Date(2022, 3, 21),
          'review',
          new Book(10, 'title', 'url', new Author('name')),
          'Paper',
          false
        ),
        new BookRecord(
          new Date(2022, 3, 20),
          'review',
          new Book(10, 'title', 'url', new Author('name')),
          'Paper',
          false
        ),
      ])
    )
    const expected = new Pagination(
      new BookRecords([
        new BookRecord(
          new Date(2022, 3, 21),
          'review',
          new Book(10, 'title', 'url', new Author('name')),
          'Paper',
          false
        ),
        new BookRecord(
          new Date(2022, 3, 20),
          'review',
          new Book(10, 'title', 'url', new Author('name')),
          'Paper',
          false
        ),
      ]),
      10,
      1,
      0,
      2,
    )

    expect(actual).toEqual(expected)
  })
})
