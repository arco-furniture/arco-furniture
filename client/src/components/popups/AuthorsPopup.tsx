import styles from '../../scss/modules/popups.module.scss'
import authors from '../../images/Artboard.svg'
import React from 'react'
import { useOther } from '../../hooks/useStateSelectors'
import { useActions } from '../../hooks/useActions'
import ChipDeveloper from '../../ui/ChipDeveloper'
import { authorsName } from 'app/constants'
import ConfettiTemplate from 'components/popups/ConfettiTemplate'

const AuthorsPopup: React.FC = () => {
  const { statusAuthorsPopup } = useOther()
  const { closeAuthorsPopup } = useActions()

  return (
    <ConfettiTemplate statusPopup={statusAuthorsPopup} handleClose={closeAuthorsPopup}>
      <div className={styles.popup__container}>
        <img className={styles.popup__authorsImage} src={authors} alt='authors' />
        <p className={styles.popup__text}>Над проектом работали</p>
        <div className={styles.popup__bottom}>
          {authorsName.map((item, index) => (
            <ChipDeveloper item={item} size='medium' key={index} />
          ))}
        </div>
      </div>
    </ConfettiTemplate>
  )
}

export default AuthorsPopup
