import { Collapse, List } from '@mui/material'
import ListItemTemplate from '../../components/listItemTemplate/ListItemTemplate'
import React, { memo, useState } from 'react'
import { FilterColor, FilterPrice, FilterStyle, FilterMaterial, FilterTag } from './filters'
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined'
import ColorizeOutlinedIcon from '@mui/icons-material/ColorizeOutlined'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'

const CategoryFilters: React.FC = () => {
  const [openPrice, setOpenPrice] = useState(true) // когда исправлю прайс
  const [openColor, setOpenColor] = useState(true)
  const [openStyle, setOpenStyle] = useState(true)
  const [openMaterial, setOpenMaterial] = useState(true)
  const [openTag, setOpenTag] = useState(true)

  return (
    <article className='filters panel panel-filters'>
      <List>
        <ListItemTemplate title='Цена' setOpen={setOpenPrice} open={false} icon={<LocalOfferOutlinedIcon />}>
          <Collapse in={false} timeout='auto' unmountOnExit>
            <FilterPrice />
          </Collapse>
        </ListItemTemplate>
        <ListItemTemplate title='Цвет' setOpen={setOpenColor} open={openColor} icon={<ColorizeOutlinedIcon />}>
          <Collapse in={openColor} timeout='auto' unmountOnExit>
            <FilterColor />
          </Collapse>
        </ListItemTemplate>
        <ListItemTemplate title='Стиль' setOpen={setOpenStyle} open={openStyle} icon={<StyleOutlinedIcon />}>
          <Collapse in={openStyle} timeout='auto' unmountOnExit>
            <FilterStyle />
          </Collapse>
        </ListItemTemplate>
        <ListItemTemplate title='Материал' setOpen={setOpenMaterial} open={openMaterial} icon={<ChairOutlinedIcon />}>
          <Collapse in={openMaterial} timeout='auto' unmountOnExit>
            <FilterMaterial />
          </Collapse>
        </ListItemTemplate>
        <ListItemTemplate title='Теги' setOpen={setOpenTag} open={openTag} icon={<StarBorderOutlinedIcon />}>
          <Collapse in={openTag} timeout='auto' unmountOnExit>
            <FilterTag />
          </Collapse>
        </ListItemTemplate>
      </List>
    </article>
  )
}

export default memo(CategoryFilters)
