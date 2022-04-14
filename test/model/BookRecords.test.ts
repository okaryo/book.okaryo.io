import { Author } from "../../src/model/Author"
import { Book } from "../../src/model/Book"
import { BookRecord } from "../../src/model/BookRecord"
import { BookRecords } from "../../src/model/BookRecords"

describe('#init', () => {
  test('should return empty book records', () => {
    const actual = BookRecords.init()
    const expected = new BookRecords([])

    expect(actual).toStrictEqual(expected)
  })
})

describe('#totalCount', () => {
  test('should return total count of records', () => {
    const actual = new BookRecords([
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
    ]).totalPage
    const expected = 20

    expect(actual).toBe(expected)
  })
})

describe('#totalCountByYear', () => {
  test('should return total count of records by year', () => {
    const actual = new BookRecords([
      new BookRecord(
        new Date(2020, 3, 20),
        'review',
        new Book(10, 'title', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date(2021, 3, 20),
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
    ]).totalCountByYear(new Date('2022-03-30'))
    const expected = 1

    expect(actual).toBe(expected)
  })
})

describe('#totalPageByYear', () => {
  test('should return total pages of records by year', () => {
    const actual = new BookRecords([
      new BookRecord(
        new Date(2020, 3, 20),
        'review',
        new Book(13, 'title', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date(2021, 3, 20),
        'review',
        new Book(6, 'title', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date(2022, 3, 20),
        'review',
        new Book(30, 'title', 'url', new Author('name')),
        'Paper',
        false
      ),
    ]).totalPageByYear(new Date('2022-03-30'))
    const expected = 30

    expect(actual).toBe(expected)
  })
})

describe('#totalCountByMonth', () => {
  test('should return total count of records by month', () => {
    const actual = new BookRecords([
      new BookRecord(
        new Date(2022, 1, 20),
        'review',
        new Book(13, 'title', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date(2022, 2, 20),
        'review',
        new Book(6, 'title', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date(2022, 3, 20),
        'review',
        new Book(30, 'title', 'url', new Author('name')),
        'Paper',
        false
      ),
    ]).totalCountByMonth(new Date('2022-03-30'))
    const expected = 1

    expect(actual).toBe(expected)
  })
})

describe('#totalPageByMonth', () => {
  test('should return total pages of records by month', () => {
    const actual = new BookRecords([
      new BookRecord(
        new Date('2022-01-20'),
        'review',
        new Book(13, 'title', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date('2022-02-20'),
        'review',
        new Book(6, 'title', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date('2022-03-20'),
        'review',
        new Book(31, 'title', 'url', new Author('name')),
        'Paper',
        false
      ),
    ]).totalPageByMonth(new Date('2022-03-30'))
    const expected = 31

    expect(actual).toBe(expected)
  })
})

describe('#filterByPaperFormat', () => {
  test('should return only paper format records', () => {
    const actual = new BookRecords([
      new BookRecord(
        new Date('2022-01-20'),
        'review',
        new Book(13, 'title', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date('2022-02-20'),
        'review',
        new Book(6, 'title', 'url', new Author('name')),
        'Audible',
        false
      ),
      new BookRecord(
        new Date('2022-03-20'),
        'review',
        new Book(31, 'title', 'url', new Author('name')),
        'Ebook',
        false
      ),
      new BookRecord(
        new Date('2022-03-20'),
        'review',
        new Book(31, 'title', 'url', new Author('name')),
        'Kindle',
        false
      ),
    ]).filterByPaperFormat()
    const expected = new BookRecords([
      new BookRecord(
        new Date('2022-01-20'),
        'review',
        new Book(13, 'title', 'url', new Author('name')),
        'Paper',
        false
      ),
    ])

    expect(actual).toStrictEqual(expected)
  })
})

describe('#filterByAudibleFormat', () => {
  test('should return only audible format records', () => {
    const actual = new BookRecords([
      new BookRecord(
        new Date('2022-01-20'),
        'review',
        new Book(13, 'title', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date('2022-02-20'),
        'review',
        new Book(6, 'title', 'url', new Author('name')),
        'Audible',
        false
      ),
      new BookRecord(
        new Date('2022-03-20'),
        'review',
        new Book(31, 'title', 'url', new Author('name')),
        'Ebook',
        false
      ),
      new BookRecord(
        new Date('2022-03-20'),
        'review',
        new Book(31, 'title', 'url', new Author('name')),
        'Kindle',
        false
      ),
    ]).filterByAudibleFormat()
    const expected = new BookRecords([
      new BookRecord(
        new Date('2022-02-20'),
        'review',
        new Book(6, 'title', 'url', new Author('name')),
        'Audible',
        false
      ),
    ])

    expect(actual).toStrictEqual(expected)
  })
})


describe('#filterByKindleFormat', () => {
  test('should return only kindle format records', () => {
    const actual = new BookRecords([
      new BookRecord(
        new Date('2022-01-20'),
        'review',
        new Book(13, 'title', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date('2022-02-20'),
        'review',
        new Book(6, 'title', 'url', new Author('name')),
        'Audible',
        false
      ),
      new BookRecord(
        new Date('2022-03-20'),
        'review',
        new Book(31, 'title', 'url', new Author('name')),
        'Ebook',
        false
      ),
      new BookRecord(
        new Date('2022-03-20'),
        'review',
        new Book(31, 'title', 'url', new Author('name')),
        'Kindle',
        false
      ),
    ]).filterByKindleFormat()
    const expected = new BookRecords([
      new BookRecord(
        new Date('2022-03-20'),
        'review',
        new Book(31, 'title', 'url', new Author('name')),
        'Kindle',
        false
      ),
    ])

    expect(actual).toStrictEqual(expected)
  })
})

describe('#filterByEbookFormat', () => {
  test('should return only ebook format records', () => {
    const actual = new BookRecords([
      new BookRecord(
        new Date('2022-01-20'),
        'review',
        new Book(13, 'title', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date('2022-02-20'),
        'review',
        new Book(6, 'title', 'url', new Author('name')),
        'Audible',
        false
      ),
      new BookRecord(
        new Date('2022-03-20'),
        'review',
        new Book(31, 'title', 'url', new Author('name')),
        'Ebook',
        false
      ),
      new BookRecord(
        new Date('2022-03-20'),
        'review',
        new Book(31, 'title', 'url', new Author('name')),
        'Kindle',
        false
      ),
    ]).filterByEbookFormat()
    const expected = new BookRecords([
      new BookRecord(
        new Date('2022-03-20'),
        'review',
        new Book(31, 'title', 'url', new Author('name')),
        'Ebook',
        false
      ),
    ])

    expect(actual).toStrictEqual(expected)
  })
})

describe('#filterByRereading', () => {
  test('should return only rereading records', () => {
    const actual = new BookRecords([
      new BookRecord(
        new Date('2022-01-20'),
        'review',
        new Book(13, 'title', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date('2022-02-20'),
        'review',
        new Book(6, 'title', 'url', new Author('name')),
        'Audible',
        true
      ),
      new BookRecord(
        new Date('2022-03-20'),
        'review',
        new Book(31, 'title', 'url', new Author('name')),
        'Ebook',
        true
      ),
      new BookRecord(
        new Date('2022-03-20'),
        'review',
        new Book(31, 'title', 'url', new Author('name')),
        'Kindle',
        false
      ),
    ]).filterByRereading()
    const expected = new BookRecords([
      new BookRecord(
        new Date('2022-02-20'),
        'review',
        new Book(6, 'title', 'url', new Author('name')),
        'Audible',
        true
      ),
      new BookRecord(
        new Date('2022-03-20'),
        'review',
        new Book(31, 'title', 'url', new Author('name')),
        'Ebook',
        true
      ),
    ])

    expect(actual).toStrictEqual(expected)
  })
})

describe('#searchByTitle', () => {
  describe('when value is empty', () => {
    test('should return same records', () => {
      const actual = new BookRecords([
        new BookRecord(
          new Date('2022-01-20'),
          'review',
          new Book(13, 'title', 'url', new Author('name')),
          'Paper',
          false
        ),
        new BookRecord(
          new Date('2022-02-20'),
          'review',
          new Book(6, 'title', 'url', new Author('name')),
          'Audible',
          true
        ),
      ]).searchByTitle('')
      const expected = new BookRecords([
        new BookRecord(
          new Date('2022-01-20'),
          'review',
          new Book(13, 'title', 'url', new Author('name')),
          'Paper',
          false
        ),
        new BookRecord(
          new Date('2022-02-20'),
          'review',
          new Book(6, 'title', 'url', new Author('name')),
          'Audible',
          true
        ),
      ])

      expect(actual).toStrictEqual(expected)
    })
  })

  describe('when value is not empty', () => {
    test('should return records that has title including value', () => {
      const actual = new BookRecords([
        new BookRecord(
          new Date('2022-01-20'),
          'review',
          new Book(13, 'hogehoge', 'url', new Author('name')),
          'Paper',
          false
        ),
        new BookRecord(
          new Date('2022-02-20'),
          'review',
          new Book(6, 'fugafuga', 'url', new Author('name')),
          'Audible',
          true
        ),
      ]).searchByTitle('hoge')
      const expected = new BookRecords([
        new BookRecord(
          new Date('2022-01-20'),
          'review',
          new Book(13, 'hogehoge', 'url', new Author('name')),
          'Paper',
          false
        ),
      ])

      expect(actual).toStrictEqual(expected)
    })
  })
})
