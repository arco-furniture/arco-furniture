import { Avatar, Button, ThemeProvider } from '@mui/material'
import { profileButtonTheme } from '../../../themes/profileButtonTheme'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import React, { useRef } from 'react'

const ProfileAvatar: React.FC<any> = ({ data }) => {
  const avatarStyle = { bgcolor: '#4675CE', width: '33px', height: '33px' }
  const filePicker = useRef(null)

  const handleChangeUpload = (e) => {
    const imageData = new FormData()
    e.preventDefault()

    const file = e.target.files[0]

    imageData.set('imageData', file)
    imageData.set('name', file.name)
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
        accept='image/*'
        type='file'
        onChange={handleChangeUpload}
        ref={filePicker}
        className='profile__audioPicker'
      />
      <div className='profileAbout__avatarEdit'>
        <Avatar sx={avatarStyle} variant='rounded' src={data.avatar} />
        <ThemeProvider theme={profileButtonTheme}>
          <Button onClick={handlePicker} startIcon={<CameraAltOutlinedIcon />}>
            Загрузить
          </Button>
          <Button sx={{ minWidth: '0' }} disabled={!data.avatar}>
            <DeleteOutlineOutlinedIcon fontSize='small' />
          </Button>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default ProfileAvatar
