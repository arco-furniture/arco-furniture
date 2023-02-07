import React from 'react'
import { ITitleTooltip } from 'components/BlackTooltip/types'

const TitleTooltip: React.FC<ITitleTooltip> = ({ title }): JSX.Element => {
  return <span className='tooltip-title'>{title}</span>
}

export default TitleTooltip
