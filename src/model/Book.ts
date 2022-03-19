import { Author } from "./Author";

export class Book {
  constructor(
    readonly page: number,
    readonly title: string,
    readonly url: string,
    readonly author: Author
  ) {}
}
