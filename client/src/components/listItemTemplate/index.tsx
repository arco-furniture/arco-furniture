import { IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import React from 'react'
import { IFilterTemplate } from './types'

const ListItemTemplate: React.FC<IFilterTemplate> = ({
  title,
  children,
  setOpen,
  open,
  icon,
  fullWidth = false,
}): JSX.Element => {
  const stylesArrow = { transform: open ? 'rotate(90deg)' : 'rotate(0)', transition: 'transform ease-out 0.2s' }

  return (
    <div className='filters__filter'>
      <ListItem sx={{ padding: fullWidth ? 0 : '8 16px' }}>
        <ListItemIcon style={{ minWidth: 'auto', color: '#4675CE' }}>{icon}</ListItemIcon>
        <ListItemText primary={title} className='filters__filter-title' />
        <IconButton edge='end' onClick={() => setOpen(!open)} size='small'>
          <KeyboardArrowRightIcon style={stylesArrow} />
        </IconButton>
      </ListItem>
      <div className={`${fullWidth ? 'filters__filter-fullWidth' : 'filters__filter-content'}`}>{children}</div>
    </div>
  )
}

export default ListItemTemplate
