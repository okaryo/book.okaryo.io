import { Box, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import { AuthorRankingList } from '../../model/AuthorRankingList'
import { store } from '../../store'

const AuthorRanking = () => {
  const allBookRecords = store
  const ranking = AuthorRankingList.initialze(allBookRecords)

  return (
    <Box>
      <Typography variant='h6' component='h6'>著者TOP3</Typography>
      <List>
        {
          ranking.values.slice(0, 3).map((ranking) => {
            return (
              <ListItem
                key={ranking.author.name}
                style={{borderBottom: '1px solid #D2D2D2'}}
                disablePadding
              >
                <ListItemButton style={{ width: '100%' }} sx={{pr: 0, pl: 0}}>
                  <Stack style={{ width: '100%' }} direction='row' alignItems='center' justifyContent='space-between'>
                    <ListItemText
                      primary={
                        <Typography
                          variant='subtitle1'
                          component='p'
                          color='primary.main'
                          style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
                        >
                          {ranking.author.name}
                        </Typography>
                      }
                    />
                    <Typography variant='body2' color='text.secondary'>{ranking.count}回読了</Typography>
                  </Stack>
                </ListItemButton>
              </ListItem>
            )
          })
        }
      </List>
    </Box>
  )
}

export default AuthorRanking
