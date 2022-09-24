import { BookRecords } from './BookRecords'
import { RereadingRanking } from './RereadingRanking'

export class RereadingRankingList {
  constructor(
    readonly values: RereadingRanking[],
  ) {}

  get sortDesc(): RereadingRankingList {
    return new RereadingRankingList(
      this.values.sort((a, b) => b.count - a.count),
    )
  }

  static initialize(values: BookRecords): RereadingRankingList {
    const rankingList = new RereadingRankingList([])
    values.values.forEach(bookRecord => {
      const ranking = rankingList.values.find(ranking => ranking.book.title === bookRecord.book.title)
      if (ranking !== undefined) {
        ranking.count += 1
      } else {
        rankingList.values.push(new RereadingRanking(bookRecord.book, 1))
      }
    })
    return rankingList.sortDesc
  }
}
