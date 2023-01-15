import styles from '../../scss/modules/authorsPopup.module.scss'
import authors from '../../images/Artboard.svg'
import React from 'react'
import Confetti from 'react-confetti'
import Dialog from '@mui/material/Dialog'
import { DialogContent } from '@mui/material'
import { useOther } from '../../hooks/useStateSelectors'
import { useActions } from '../../hooks/useActions'
import ChipDeveloper from '../../ui/ChipDeveloper'
import { authorsName } from 'app/constants'

const AuthorsPopup: React.FC = () => {
  const { statusAuthorsPopup, height, width } = useOther()
  const { closeAuthorsPopup } = useActions()

  const handleClosePopup = () => {
    closeAuthorsPopup()
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
                <ChipDeveloper item={item} size='medium' key={index} />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Confetti>
  )
}

export default AuthorsPopup
