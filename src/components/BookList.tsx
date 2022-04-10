import { Button, ButtonGroup, Link, List, ListItem, ListItemButton, ListItemText, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { BookRecords } from '../model/BookRecords'
import { RootState } from '../store'

type FilterType = 'All' | 'Paper' | 'Audible' | 'Kindle' | 'Ebook' | 'Rereading'

const BookList = () => {
  const allBookRecords = useSelector((state: RootState) => state.domain.bookRecords)
  const [filterType, setFilterType] = useState<FilterType>('All')

  var bookRecords: BookRecords
  switch (filterType) {
    case 'All':
      bookRecords = allBookRecords
      break
    case 'Paper':
      bookRecords = allBookRecords.filterByPaperFormat()
      break
    case 'Audible':
      bookRecords = allBookRecords.filterByAudibleFormat()
      break
    case 'Kindle':
      bookRecords = allBookRecords.filterByKindleFormat()
      break
    case 'Ebook':
      bookRecords = allBookRecords.filterByEbookFormat()
      break
    case 'Rereading':
      bookRecords = allBookRecords.filterByRereading()
      break
  }


  return (
    <Box>
      <ToggleButtonGroup
        exclusive
        fullWidth
        color='primary'
        value={filterType}
        onChange={(_, value) => setFilterType(value)}
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
            const dateText = record.formatDate
            return (
              <ListItem key={index} style={{borderBottom: '1px solid #D2D2D2'}} disablePadding >
                <ListItemButton style={{ width: '100%' }} sx={{pr: 0, pl: 0}}>
                  <ListItemText
                    primary={
                      <Link
                        href={record.book.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        underline='none'
                      >
                        <Typography
                          variant='subtitle1'
                          component='p'
                          style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
                        >
                          {record.book.title}
                        </Typography>
                      </Link>
                    }
                    secondary={dateText}
                  />
                </ListItemButton>
              </ListItem>
            )
          })
        }
      </List>
    </Box>
  )
}

export default BookList
