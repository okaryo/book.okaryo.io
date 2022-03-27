import { Link, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const BookList = () => {
  const bookRecords = useSelector((state: RootState) => state.domain.bookRecords)

  return (
    <List>
      {
        bookRecords.values.map((record, index) => {
          const dateText = record.formatDate
          return (
            <ListItem key={index} style={{borderBottom: '1px solid #D2D2D2'}} disablePadding >
              <ListItemButton style={{ width: '100%' }} sx={{pr: 0, pl: 0}}>
                <ListItemText
                  style={{ width: '100%', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
                  primary={
                    <Link
                      href={record.book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                    >
                      {record.book.title}
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
  )
}

export default BookList
