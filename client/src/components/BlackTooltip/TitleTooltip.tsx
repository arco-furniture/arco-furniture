import React from 'react'
import { ITitleTooltip } from 'components/header/types'

const TitleTooltip: React.FC<ITitleTooltip> = ({ title }) => {
  return <span className='tooltip-title'>{title}</span>
}

export default TitleTooltip
