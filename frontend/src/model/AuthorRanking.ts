import { Author } from './Author'

export class AuthorRanking {
  constructor(
    readonly author: Author,
    public count: number,
  ) {}
}
