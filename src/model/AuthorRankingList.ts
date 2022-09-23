import { AuthorRanking } from './AuthorRanking'
import { BookRecords } from './BookRecords'

export class AuthorRankingList {
  constructor(
    readonly values: AuthorRanking[],
  ) {}

  get sortDesc(): AuthorRankingList {
    return new AuthorRankingList(
      this.values.sort((a, b) => b.count - a.count),
    )
  }

  static initialize(values: BookRecords): AuthorRankingList {
    const rankingList = new AuthorRankingList([])
    values.values.forEach(bookRecord => {
      if (bookRecord.book.author.name !== '') {
        const ranking = rankingList.values.find(ranking => bookRecord.book.author.name !== '' && ranking.author.name === bookRecord.book.author.name)
        if (ranking !== undefined) {
          ranking.count += 1
        } else {
          rankingList.values.push(new AuthorRanking(bookRecord.book.author, 1))
        }
      }
    })
    return rankingList.sortDesc
  }
}
