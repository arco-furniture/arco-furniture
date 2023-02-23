import React, { memo } from 'react'
import {
  IconButton,
  styled,
  Tooltip,
  tooltipClasses,
  // eslint-disable-next-line import/named
  TooltipProps,
} from '@mui/material'
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded'
import styles from '../../../scss/modules/basket/basket-item.module.scss'
import { specsNamesTypes } from '../../product/types'
import { SPECS_NAME } from '../../../app/constants'

const SpecsItem: React.FC<any> = ({ specs }) => {
  const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 250,
    },
  })

  const SpecsList = () => (
    <div className={styles.specs__content}>
      <ul>
        {SPECS_NAME?.map((item: specsNamesTypes) => (
          <li style={{ color: '#cbcbcb', fontWeight: 700 }} key={item.specsNameId}>{`${item.name}:`}</li>
        ))}
      </ul>
      <ul>
        {specs?.map((item, index) => (
          <li key={index}>{Object.values(item)}</li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className={styles.specs}>
      <div className={styles.specs__wrapper}>
        <h3 className={styles.specs__title}>Характеристики товара</h3>
        <CustomWidthTooltip placement='top' title={<SpecsList />} arrow>
          <IconButton size='small' sx={{ backgroundColor: '#F8F8F8' }}>
            <InsertChartOutlinedRoundedIcon color='primary' fontSize='small' />
          </IconButton>
        </CustomWidthTooltip>
      </div>
    </div>
  )
}

export default memo(SpecsItem)
