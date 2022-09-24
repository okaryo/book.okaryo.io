import { BookRecord } from '../../model/BookRecord'
import { BookRecords } from '../../model/BookRecords'
import { Pagination } from '../../model/Pagination'

export type FilterType = 'All' | 'Paper' | 'Audible' | 'Kindle' | 'Ebook' | 'Rereading'

type OptionsType = {
  searchTitle?: string,
  filterType?: FilterType
}

export class BookListState {
  constructor(
    private source: BookRecords,
    readonly pagination: Pagination<BookRecord>,
    readonly searchTitle: string = '',
    readonly filterType: FilterType = 'All',
  ) {}

  static init(source: BookRecords): BookListState {
    const pagination = new Pagination(source)
    return new BookListState(source, pagination, '', 'All')
  }

  updateSearchTitle(searchTitle: string): BookListState {
    if (this.searchTitle === '' && searchTitle === '') return this

    const filteredRecords = this.filteredRecords({searchTitle: searchTitle})
    const newPagination = new Pagination(filteredRecords, this.pagination.perPage)
    return new BookListState(this.source, newPagination, searchTitle, this.filterType)
  }

  updateFilterType(filterType: FilterType): BookListState {
    const filteredRecords = this.filteredRecords({filterType: filterType})
    const newPagination = new Pagination(filteredRecords, this.pagination.perPage)
    return new BookListState(this.source, newPagination, this.searchTitle, filterType)
  }

  updatePagination(page: number): BookListState {
    return new BookListState(this.source, this.pagination.toPage(page), this.searchTitle, this.filterType)
  }

  private filteredRecords({searchTitle = this.searchTitle, filterType = this.filterType}: OptionsType): BookRecords {
    const searchedTitleRecords = this.source.searchByTitle(searchTitle)
    const filteredBookRecords = (filterType: FilterType): BookRecords => {
      switch (filterType) {
        case 'All':
          return searchedTitleRecords
        case 'Paper':
          return searchedTitleRecords.paperFormatRecords
        case 'Audible':
          return searchedTitleRecords.audibleFormatRecords
        case 'Kindle':
          return searchedTitleRecords.kindleFormatRecords
        case 'Ebook':
          return searchedTitleRecords.ebookFormatRecords
        case 'Rereading':
          return searchedTitleRecords.rereadingRecords
      }
    }
    return filteredBookRecords(filterType)
  }
}
