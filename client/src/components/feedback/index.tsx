import React from 'react'
import styles from '../../scss/modules/feedback.module.scss'
import { IFeedback } from 'components/feedback/types'

const Feedback: React.FC<IFeedback> = ({ icon, title, children }): JSX.Element => {
  return (
    <div className={styles.feedback}>
      <div className={styles.wrapper}>
        {icon}
        <h4 className={styles.title}>{title}</h4>
      </div>
      <p className={styles.paragraph}>{children}</p>
    </div>
  )
}

export default Feedback
