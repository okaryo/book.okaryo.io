import { Box, Link, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import { RereadingRankingList } from '../../model/RereadingRankingList'
import { store } from '../../store'

const PageRanking = () => {
  const allBookRecords = store
  const ranking = allBookRecords.sortDescByPage

  return (
    <Box>
      <Typography variant='h6' component='h6'>ページ数TOP3</Typography>
      <List>
        {
          ranking.values.slice(0, 3).map((ranking) => {
            return (
              <ListItem
                key={ranking.book.title}
                style={{borderBottom: '1px solid #D2D2D2'}}
                disablePadding
              >
                <Link
                  href={ranking.book.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  underline='none'
                  sx={{ width: '100%' }}
                >
                  <ListItemButton style={{ width: '100%' }} sx={{pr: 0, pl: 0}}>
                    <Stack style={{ width: '100%' }} direction='row' alignItems='center' justifyContent='space-between'>
                      <ListItemText
                        sx={{flex: 1, mr: 1}}
                        primary={
                          <Typography
                            variant='subtitle1'
                            component='p'
                            style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
                          >
                            {ranking.book.title}
                          </Typography>
                        }
                        secondary={
                          <Typography variant='body2' component='p' color='text.secondary'>著者: {ranking.book.author.name}</Typography>
                        }
                      />
                      <Typography variant='body2' color='text.secondary'>{`${ranking.book.page}ページ`}</Typography>
                    </Stack>
                  </ListItemButton>
                </Link>
              </ListItem>
            )
          })
        }
      </List>
    </Box>
  )
}

export default PageRanking
