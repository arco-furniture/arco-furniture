import { Avatar, Button, ThemeProvider } from '@mui/material'
import { profileButtonTheme } from '../../../themes/profileButtonTheme'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import React, { memo, useRef } from 'react'
import { useAuth } from '../../../hooks/useStateSelectors'
import { useQuery } from 'react-query'
import { ProfileService } from '../../../services/profile.service'
import { toastr } from 'react-redux-toastr'
import { toastError } from '../../../api/withToastrErrorRedux'
import { useActions } from '../../../hooks/useActions'

const ProfileAvatar: React.FC<any> = () => {
  const { user } = useAuth()
  const avatarStyle = { bgcolor: '#4675CE', width: '33px', height: '33px' }
  const filePicker = useRef(null)
  const avatarData = new FormData()
  const { setUser } = useActions()

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
  const { refetch: refetchDelete } = useQuery(
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

  const onClickDeleteAvatar = async () => {
    await refetchDelete()
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
          <Button
            sx={{ minWidth: '30px', width: '35px' }}
            disabled={!user.avatar}
            onClick={() => onClickDeleteAvatar()}
          >
            <DeleteOutlineOutlinedIcon fontSize='small' />
          </Button>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default memo(ProfileAvatar)
