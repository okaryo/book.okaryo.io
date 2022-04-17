import { IconButton, InputBase, List, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { Box } from '@mui/system'
import { useState } from 'react'
import { BookRecords } from '../../model/BookRecords'
import { store } from '../../store'
import BookListItem from './BookListItem'

type FilterType = 'All' | 'Paper' | 'Audible' | 'Kindle' | 'Ebook' | 'Rereading'

const BookList = () => {
  const allBookRecords = store
  const [searchTitle, setSearchTitle] = useState('')
  const [filterType, setFilterType] = useState<FilterType>('All')

  const searchedTitleRecords = allBookRecords.searchByTitle(searchTitle)
  let bookRecords: BookRecords
  switch (filterType) {
    case 'All':
      bookRecords = searchedTitleRecords
      break
    case 'Paper':
      bookRecords = allBookRecords.paperFormatRecords
      break
    case 'Audible':
      bookRecords = allBookRecords.audibleFormatRecords
      break
    case 'Kindle':
      bookRecords = allBookRecords.kindleFormatRecords
      break
    case 'Ebook':
      bookRecords = allBookRecords.ebookFormatRecords
      break
    case 'Rereading':
      bookRecords = allBookRecords.rereadingRecords
      break
  }

  return (
    <Box>
      <Stack
        component='form'
        direction='row'
        sx={{dispaly: 'flex', alignItems: 'center', border: 1, borderRadius: '4px', borderColor: '#0000001f'}}
      >
        <IconButton>
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{flex: 1}}
          placeholder='Search...'
          value={searchTitle}
          onChange={(event) => setSearchTitle(event.target.value)}
        />
        <IconButton onClick={() => setSearchTitle('')}>
          <CloseIcon />
        </IconButton>
      </Stack>

      <Box sx={{height: 16}}></Box>

      <ToggleButtonGroup
        exclusive
        fullWidth
        color='primary'
        value={filterType}
        onChange={(_, value: FilterType) => setFilterType(value)}
        style={{ textTransform: 'none' }}
      >
        <ToggleButton value="All">すべて</ToggleButton>
        <ToggleButton value="Paper">紙書籍</ToggleButton>
        <ToggleButton value="Audible" style={{ textTransform: 'none' }}>Audible</ToggleButton>
        <ToggleButton value="Kindle" style={{ textTransform: 'none' }}>Kindle</ToggleButton>
        <ToggleButton value="Ebook">電子書籍</ToggleButton>
        <ToggleButton value="Rereading">再読</ToggleButton>
      </ToggleButtonGroup>

      <List>
        {
          bookRecords.values.map((record, index) => {
            return <BookListItem key={index} record={record} />
          })
        }
      </List>
    </Box>
  )
}

export default BookList
