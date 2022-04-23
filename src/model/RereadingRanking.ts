import { Book } from './Book'

export class RereadingRanking {
  constructor(
    readonly book: Book,
    public count: number,
  ) {}
}
