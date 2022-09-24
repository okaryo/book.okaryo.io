import { IconButton, InputBase, List, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { Box } from '@mui/system'
import { useState } from 'react'
import { store } from '../../store'
import BookListItem from './BookListItem'
import PaginationItem from './PaginationItem'
import { BookListState, FilterType } from '../../store/view/BookListState'

const BookList = () => {
  const allBookRecords = store
  const [state, setState] = useState(BookListState.init(allBookRecords))
  const handlePagination = (_: React.ChangeEvent, page: number) => {
    setState(state.updatePagination(page))
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
          value={state.searchTitle}
          onChange={(event) => setState(state.updateSearchTitle(event.target.value))}
        />
        <IconButton onClick={() => setState(state.updateSearchTitle(''))}>
          <CloseIcon />
        </IconButton>
      </Stack>

      <Box sx={{height: 16}}></Box>

      <ToggleButtonGroup
        exclusive
        fullWidth
        color='primary'
        value={state.filterType}
        onChange={(_, value: FilterType) => setState(state.updateFilterType(value))}
        style={{ textTransform: 'none' }}
      >
        <ToggleButton value='All'>すべて</ToggleButton>
        <ToggleButton value='Paper'>紙書籍</ToggleButton>
        <ToggleButton value='Audible' style={{ textTransform: 'none' }}>Audible</ToggleButton>
        <ToggleButton value='Kindle' style={{ textTransform: 'none' }}>Kindle</ToggleButton>
        <ToggleButton value='Ebook'>電子書籍</ToggleButton>
        <ToggleButton value='Rereading'>再読</ToggleButton>
      </ToggleButtonGroup>

      <List>
        {
          state.pagination.currentPageValues.map((record, index) => {
            return <BookListItem key={index} record={record} />
          })
        }
      </List>

      <PaginationItem page={state.pagination.current} count={state.pagination.length} onChange={handlePagination} />
    </Box>
  )
}

export default BookList
