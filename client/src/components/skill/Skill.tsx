import React from 'react'
import styles from '../../scss/modules/skill.module.scss'

interface ISkill {
  name: string
  icon: JSX.Element
}

const Skill: React.FC<ISkill> = (props) => {
  return (
    <span className={styles.skill}>
      <span className={styles.icon}>{props.icon}</span>
      <h5 className={styles.name}>{props.name}</h5>
    </span>
  )
}

export default Skill
