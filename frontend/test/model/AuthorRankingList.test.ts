import { Author } from "../../src/model/Author";
import { AuthorRanking } from "../../src/model/AuthorRanking";
import { AuthorRankingList } from "../../src/model/AuthorRankingList";
import { Book } from "../../src/model/Book";
import { BookRecord } from "../../src/model/BookRecord";
import { BookRecords } from "../../src/model/BookRecords";

describe('#sortDesc', () => {
  test('should sort desc by count', () => {
    const actual = new AuthorRankingList([
      new AuthorRanking(new Author('a'), 1),
      new AuthorRanking(new Author('b'), 2),
      new AuthorRanking(new Author('c'), 3),
    ]).sortDesc
    const expected = new AuthorRankingList([
      new AuthorRanking(new Author('c'), 3),
      new AuthorRanking(new Author('b'), 2),
      new AuthorRanking(new Author('a'), 1),
    ])

    expect(actual).toEqual(expected)
  })
})

describe('#initialize', () => {
  test('should initialize ranking', () => {
    const actual = AuthorRankingList.initialize(
      new BookRecords([
        new BookRecord(
          new Date(2022, 3, 20),
          'review',
          new Book(10, 'title1', 'url', new Author('name1')),
          'Paper',
          false
        ),
        new BookRecord(
          new Date(2022, 3, 21),
          'review',
          new Book(10, 'title2', 'url', new Author('name2')),
          'Paper',
          false
        ),
        new BookRecord(
          new Date(2022, 3, 22),
          'review',
          new Book(10, 'title1', 'url', new Author('')),
          'Paper',
          false
        ),
        new BookRecord(
          new Date(2022, 3, 23),
          'review',
          new Book(10, 'title1', 'url', new Author('name1')),
          'Paper',
          false
        ),
      ])
    )
    const expected = new AuthorRankingList([
      new AuthorRanking(new Author('name1'), 2),
      new AuthorRanking(new Author('name2'), 1),
    ])

    expect(actual).toEqual(expected)
  })
})
