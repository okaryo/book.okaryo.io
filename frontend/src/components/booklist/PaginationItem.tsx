import { Pagination, Stack } from '@mui/material'

type PaginationItemType = {
  count: number,
  page: number,
  onChange: (envent: React.ChangeEvent, page: number) => void
}

const PaginationItem = (props: PaginationItemType) => {
  const { count, page, onChange } = props

  return (
    <Stack spacing={2} sx={{p: 1}}>
      <Pagination
        count={count}
        page={page}
        variant='outlined'
        color='primary'
        onChange={onChange}
        sx={{display: 'flex', justifyContent: 'center'}}
      />
    </Stack>
  )
}

export default PaginationItem
