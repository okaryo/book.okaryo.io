import { Author } from '../../src/model/Author'
import { Book } from '../../src/model/Book'
import { BookRecord } from '../../src/model/BookRecord'
import { BookRecords } from '../../src/model/BookRecords'

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

describe('#paperFormatRecords', () => {
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
    ]).paperFormatRecords
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

describe('#audibleFormatRecords', () => {
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
    ]).audibleFormatRecords
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


describe('#kindleFormatRecords', () => {
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
    ]).kindleFormatRecords
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

describe('#ebookFormatRecords', () => {
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
    ]).ebookFormatRecords
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

describe('#rereadingRecords', () => {
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
    ]).rereadingRecords
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

describe('#validDateRecords', () => {
  test('should return records whose date is not null', () => {
    const actual = new BookRecords([
      new BookRecord(
        new Date('2022-01-20'),
        'review',
        new Book(13, 'hogehoge', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        null,
        'review',
        new Book(13, 'hogehoge', 'url', new Author('name')),
        'Paper',
        false
      ),
    ]).validDateRecords
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

describe('#noDateRecords', () => {
  test('should return records whose date is null', () => {
    const actual = new BookRecords([
      new BookRecord(
        new Date('2022-01-20'),
        'review',
        new Book(13, 'hogehoge', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        null,
        'review',
        new Book(13, 'hogehoge', 'url', new Author('name')),
        'Paper',
        false
      ),
    ]).noDateRecords
    const expected = new BookRecords([
      new BookRecord(
        null,
        'review',
        new Book(13, 'hogehoge', 'url', new Author('name')),
        'Paper',
        false
      ),
    ])

    expect(actual).toStrictEqual(expected)
  })
})

describe('#sortAscByDate', () => {
  test('should return records sorted asc by date', () => {
    const actual = new BookRecords([
      new BookRecord(
        new Date('2022-03-01'),
        'review',
        new Book(13, 'title1', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        null,
        'review',
        new Book(13, 'title2', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date('2022-02-01'),
        'review',
        new Book(13, 'title3', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        null,
        'review',
        new Book(13, 'title4', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date('2022-01-01'),
        'review',
        new Book(13, 'title5', 'url', new Author('name')),
        'Paper',
        false
      ),
    ]).sortAscByDate
    const expected = new BookRecords([
      new BookRecord(
        new Date('2022-01-01'),
        'review',
        new Book(13, 'title5', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date('2022-02-01'),
        'review',
        new Book(13, 'title3', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date('2022-03-01'),
        'review',
        new Book(13, 'title1', 'url', new Author('name')),
        'Paper',
        false
      ),
    ])

    expect(actual).toStrictEqual(expected)
  })
})

describe('#sortDescByDate', () => {
  test('should return records sorted desc by date', () => {
    const actual = new BookRecords([
      new BookRecord(
        new Date('2022-03-01'),
        'review',
        new Book(13, 'title1', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        null,
        'review',
        new Book(13, 'title2', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date('2022-02-01'),
        'review',
        new Book(13, 'title3', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        null,
        'review',
        new Book(13, 'title4', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date('2022-01-01'),
        'review',
        new Book(13, 'title5', 'url', new Author('name')),
        'Paper',
        false
      ),
    ]).sortDescByDate
    const expected = new BookRecords([
      new BookRecord(
        new Date('2022-03-01'),
        'review',
        new Book(13, 'title1', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date('2022-02-01'),
        'review',
        new Book(13, 'title3', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date('2022-01-01'),
        'review',
        new Book(13, 'title5', 'url', new Author('name')),
        'Paper',
        false
      ),
    ])

    expect(actual).toStrictEqual(expected)
  })
})

describe('#length', () => {
  test('should return records length', () => {
    const actual = new BookRecords([
      new BookRecord(
        new Date('2022-03-01'),
        'review',
        new Book(13, 'title1', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        null,
        'review',
        new Book(13, 'title2', 'url', new Author('name')),
        'Paper',
        false
      ),
    ]).length
    const expected = 2

    expect(actual).toBe(expected)
  })
})

describe('#slice', () => {
  test('should return records between start and end', () => {
    const actual = new BookRecords([
      new BookRecord(
        new Date('2022-03-01'),
        'review',
        new Book(13, 'title1', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        null,
        'review',
        new Book(13, 'title2', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date('2022-02-01'),
        'review',
        new Book(13, 'title3', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        null,
        'review',
        new Book(13, 'title4', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        new Date('2022-01-01'),
        'review',
        new Book(13, 'title5', 'url', new Author('name')),
        'Paper',
        false
      ),
    ]).slice(2, 4)
    const expected = new BookRecords([
      new BookRecord(
        new Date('2022-02-01'),
        'review',
        new Book(13, 'title3', 'url', new Author('name')),
        'Paper',
        false
      ),
      new BookRecord(
        null,
        'review',
        new Book(13, 'title4', 'url', new Author('name')),
        'Paper',
        false
      ),
    ])

    expect(actual).toStrictEqual(expected)
  })
})
