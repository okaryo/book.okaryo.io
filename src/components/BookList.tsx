import { Container, Link, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { BookRecordsRepository } from "../repository/BookRecordsRepository"

const BookList = () => {
  return (
    <Container sx={{p: 2}}>
      <List>
        {
          BookRecordsRepository.getBookRecords().values.map(record => {
            const dateText = `${record.date.getFullYear()}年${record.date.getMonth()+1}月${record.date.getDate()}日`
            return (
              <ListItem style={{borderBottom: '1px solid #D2D2D2'}} disablePadding >
                <ListItemButton style={{ width: '100%' }} sx={{pr: 0, pl: 0}}>
                  <ListItemText
                    style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
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

    </Container>
  )
}

export default BookList
