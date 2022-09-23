import { Card, CardContent, Chip, Link, ListItem, ListItemButton, Modal, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { BookRecord } from '../../model/BookRecord'

type BookListItemProps = {
  record: BookRecord
}

const BookListItem = (props: BookListItemProps) => {
  const { record } = props
  const [openModal, setOpenModal] = useState(false)
  const onClickItem = () => setOpenModal(true)
  const onCloseModal = () => setOpenModal(false)

  let formatLabel: string
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

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 320,
    maxWidth: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 1,
  }

  return (
    <ListItem style={{borderBottom: '1px solid #D2D2D2'}} disablePadding >
      <ListItemButton style={{ width: '100%' }} sx={{pr: 0, pl: 0}} onClick={onClickItem}>
        <Stack sx={{ pt: 0.75, pb: 0.75 }}>
          <Typography
            variant='subtitle1'
            component='p'
            color='primary'
            style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
          >
            {record.book.title}
          </Typography>
          <Stack direction='row' spacing={1} alignItems='center' component='div'>
            <Typography variant='subtitle2' component='p' sx={{ opacity: 0.6 }}>{record.formatDate}</Typography>
            <Chip label={formatLabel} size='small' color='primary' variant='outlined' />
          {record.isRereading && <Chip label='再読' size='small' color='success' variant='outlined' />}
          </Stack>
        </Stack>
      </ListItemButton>
      <Modal
        open={openModal}
        onClose={onCloseModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Card sx={modalStyle}>
          <CardContent>
            <Link
              href={record.book.url}
              target='_blank'
              rel='noopener noreferrer'
              underline='none'
            >
              <Typography gutterBottom variant='h5' component='h5'>{record.book.title}</Typography>
            </Link>
            <Typography variant='subtitle2' component='p'>作者: {record.book.author.name}</Typography>
            <Typography variant='subtitle2' component='p'>ページ: {record.book.page}</Typography>
            <Typography variant='subtitle2' component='p' mb={0.5}>読了日: {record.formatDate}</Typography>
            <Stack direction='row' spacing={1} alignItems='center' mb={2}>
              <Chip label={formatLabel} size='small' color='primary' variant='outlined' />
              {record.isRereading && <Chip label='再読' size='small' color='success' variant='outlined' />}
            </Stack>
            <Typography variant='body2' color='text.secondary'>{record.review === '' ? 'No Review' : record.review}</Typography>
          </CardContent>
        </Card>
      </Modal>
    </ListItem>
  )
}

export default BookListItem
