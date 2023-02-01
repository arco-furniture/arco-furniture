import { Avatar, Button, ThemeProvider } from '@mui/material'
import { profileButtonTheme } from '../../../themes/profileButtonTheme'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import React, { memo, useRef, useState } from 'react'
import { useAuth } from '../../../hooks/useStateSelectors'
import { useQuery, useInfiniteQuery, QueryClient } from 'react-query'
import { ProfileService } from '../../../services/profile.service'
import { toastr } from 'react-redux-toastr'
import { toastError } from '../../../api/withToastrErrorRedux'
import { useActions } from '../../../hooks/useActions'
import AcceptPopover from 'components/acceptPopover/AcceptPopover'

const ProfileAvatar: React.FC<any> = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const { user } = useAuth()
  const avatarStyle = {
    bgcolor: '#4675CE',
    width: '33px',
    height: '33px',
    boxShadow:
      '0 3px 1px -2px rgba(0, 0, 0, 0.03), 0 2px 2px 0px rgba(0, 0, 0, 0.06), 0 1px 5px 0px rgba(0, 0, 0, 0.12)',
  }
  const filePicker = useRef(null)
  const avatarData = new FormData()
  const { setUser } = useActions()

  const handleAccept = () => {
    refetchDelete()
  }

  // загрузка аватара
  const { isLoading, refetch: refetchUpload } = useQuery(
    'change profile avatar',
    () =>
      ProfileService.uploadAvatar(avatarData)
        .then((info) => setUser(info))
        .then(() => toastr.success('Данные сохранены', 'Вы изменили аватар'))
        .catch((error) => toastError(error)),
    {
      enabled: false,
    },
  )

  // удаление аватара
  const { refetch: refetchDelete } = useInfiniteQuery(
    'delete profile avatar',
    () =>
      ProfileService.deleteAvatar()
        .then((info) => setUser(info))
        .then(() => toastr.success('Данные сохранены', 'Вы удалили аватар'))
        .catch((error) => toastError(error)),
    {
      enabled: false,
    },
  )

  const handleChangeUpload = async (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    await avatarData.set('file', file) // на бэке ожидает form-data "file"
    await refetchUpload()
  }

  const onClickDeleteAvatar = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(evt.currentTarget)
  }

  const handlePicker = () => {
    filePicker.current.click()
  }

  return (
    <div className='profileAbout__avatar'>
      <h3 className='subtitle'>Аватар</h3>
      <p className='profileAbout__textAvatar'>Вы можете загрузить свой аватар в форматах jpeg, jpg и png.</p>
      <input
        name='audio'
        accept='image/png, image/jpg, image/jpeg'
        type='file'
        onChange={handleChangeUpload}
        ref={filePicker}
        className='profile__audioPicker'
      />
      <div className='profileAbout__avatarEdit'>
        <Avatar sx={avatarStyle} variant='rounded' src={user.avatar} />
        <ThemeProvider theme={profileButtonTheme}>
          <Button onClick={handlePicker} startIcon={<CameraAltOutlinedIcon />}>
            {isLoading ? 'Загрузка...' : 'Загрузить'}
          </Button>
          <Button sx={{ minWidth: '30px', width: '35px' }} disabled={!user.avatar} onClick={onClickDeleteAvatar}>
            <DeleteOutlineOutlinedIcon fontSize='small' />
          </Button>
        </ThemeProvider>
        <AcceptPopover
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          handleAccept={handleAccept}
          question='Вы хотите удалить аватар?'
        />
      </div>
    </div>
  )
}

export default memo(ProfileAvatar)
