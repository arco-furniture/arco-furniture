import styles from '../../scss/modules/authorsPopup.module.scss'
import authors from '../../images/Artboard.svg'
import Chip from '@mui/material/Chip'
import GitHubIcon from '@mui/icons-material/GitHub'
import Confetti from 'react-confetti'
import Dialog from '@mui/material/Dialog'
import { DialogContent } from '@mui/material'
import useWindowSize from 'react-use/lib/useWindowSize'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { otherSelector, closeAuthorsPopup } from '../../redux/other/otherSlice'
import React from 'react'
import { authorsNameTypes } from './types'

const AuthorsPopup: React.FC = () => {
  const authorsName: authorsNameTypes[] = [
    { name: 'Петерс Максим', link: 'https://github.com/kejjero' },
    { name: 'Рамзанов Иван', link: 'https://github.com/IvanVideo' },
    { name: 'Трубицин Илья', link: 'https://github.com/Lionen89' },
  ]
  const { width, height } = useWindowSize()
  const { statusAuthorsPopup } = useAppSelector(otherSelector)
  const dispatch = useAppDispatch()
  const handleClosePopup = () => {
    dispatch(closeAuthorsPopup())
  }

  const ChipPerson: React.FC<any> = ({ item }) => {
    return (
      <Chip
        className={styles.popup__name}
        color='primary'
        icon={<GitHubIcon />}
        label={item.name}
        variant='outlined'
        style={{ cursor: 'pointer' }}
      />
    )
  }

  return (
    <Confetti
      width={width - 25}
      height={height}
      style={{ zIndex: '10000', margin: '0 auto' }}
      numberOfPieces={statusAuthorsPopup ? 170 : 0}
      recycle={statusAuthorsPopup}
      gravity={0.07}
    >
      <Dialog open={statusAuthorsPopup} onClose={() => handleClosePopup()} fullWidth>
        <DialogContent>
          <div className={styles.popup__container}>
            <img className={styles.popup__img} src={authors} alt='authors' />
            <p className={styles.popup__text}>Над проектом работали</p>
            <div className={styles.popup__bottom}>
              {authorsName.map((item, index) => (
                <a
                  className={styles.popup__name}
                  key={index}
                  href={item.link}
                  target='_blank'
                  style={{ textDecoration: 'none' }}
                  rel='noreferrer'
                >
                  <ChipPerson item={item} />
                </a>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Confetti>
  )
}

export default AuthorsPopup
