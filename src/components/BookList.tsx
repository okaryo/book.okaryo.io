import { Button, ButtonGroup, Chip, Link, List, ListItem, ListItemButton, ListItemText, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
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
            var formatLabel: string
            switch (record.format) {
              case 'Paper':
                formatLabel = '紙書籍'
                break
              case 'Audible':
                formatLabel = 'Audible'
                break
              case 'Kindle':
                formatLabel = 'Kindle'
                break
              case 'Ebook':
                formatLabel = '電子書籍'
                break
            }

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
                    secondary={
                      <Stack direction='row' spacing={1} alignItems='center'>
                        <Typography variant='subtitle2' component='p'>{dateText}</Typography>
                        <Chip label={formatLabel} size='small' color='primary' variant='outlined' />
                        {record.isRereading &&  <Chip label='再読' size='small' color='success' variant='outlined' />}
                      </Stack>
                    }
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
