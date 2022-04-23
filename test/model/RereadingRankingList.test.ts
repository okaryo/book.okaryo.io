import { Author } from '../../src/model/Author'
import { Book } from '../../src/model/Book'
import { BookRecord } from '../../src/model/BookRecord'
import { BookRecords } from '../../src/model/BookRecords'
import { RereadingRanking } from '../../src/model/RereadingRanking'
import { RereadingRankingList } from '../../src/model/RereadingRankingList'

describe('#sortDesc', () => {
  test('should sort desc by count', () => {
    const actual = new RereadingRankingList([
      new RereadingRanking(new Book(10, 'title', 'url', new Author('name')), 1),
      new RereadingRanking(new Book(10, 'title', 'url', new Author('name')), 2),
    ]).sortDesc
    const expected = new RereadingRankingList([
      new RereadingRanking(new Book(10, 'title', 'url', new Author('name')), 2),
      new RereadingRanking(new Book(10, 'title', 'url', new Author('name')), 1),
    ])

    expect(actual).toEqual(expected)
  })
})

describe('initialize', () => {
  test('should initialize by BookRecords', () => {
    const actual = RereadingRankingList.initialize(
      new BookRecords([
        new BookRecord(
          new Date(2022, 3, 20),
          'review',
          new Book(10, 'title1', 'url', new Author('name')),
          'Paper',
          false
        ),
        new BookRecord(
          new Date(2022, 3, 21),
          'review',
          new Book(10, 'title2', 'url', new Author('name')),
          'Paper',
          false
        ),
        new BookRecord(
          new Date(2022, 3, 22),
          'review',
          new Book(10, 'title1', 'url', new Author('name')),
          'Paper',
          false
        ),
      ])
    )
    const expected = new RereadingRankingList([
      new RereadingRanking(new Book(10, 'title1', 'url', new Author('name')), 2),
      new RereadingRanking(new Book(10, 'title2', 'url', new Author('name')), 1),
    ])

    expect(actual).toEqual(expected)
  })
})
