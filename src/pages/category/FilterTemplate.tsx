import { IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { IFilterTemplate } from './types'
import React from 'react'

const FilterTemplate: React.FC<IFilterTemplate> = ({ title, children, setOpen, open, icon }) => {
  const stylesArrow = { transform: open ? 'rotate(90deg)' : 'rotate(0)', transition: 'transform ease-out 0.2s' }

  return (
    <div className='filters__filter'>
      <ListItem>
        <ListItemIcon style={{ minWidth: 'auto', color: '#4675CE' }}>{icon}</ListItemIcon>
        <ListItemText primary={title} className='filters__filter-title' />
        <IconButton edge='end' onClick={() => setOpen(!open)} size='small'>
          <KeyboardArrowRightIcon style={stylesArrow} />
        </IconButton>
      </ListItem>
      <div className='filters__filter-content'>{children}</div>
    </div>
  )
}

export default FilterTemplate
