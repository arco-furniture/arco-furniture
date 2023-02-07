import React, { memo, useState } from 'react'
import { Collapse, List } from '@mui/material'
import { ListItemTemplate } from 'components'
import { FilterColor, FilterPrice, FilterStyle, FilterMaterial, FilterTag } from './filters'
import {
  StyleOutlined,
  ColorizeOutlined,
  LocalOfferOutlined,
  ChairOutlined,
  StarBorderOutlined,
} from '@mui/icons-material'

const CategoryFilters: React.FC = (): JSX.Element => {
  const [openPrice, setOpenPrice] = useState<boolean>(true) // когда исправлю прайс
  const [openColor, setOpenColor] = useState<boolean>(true)
  const [openStyle, setOpenStyle] = useState<boolean>(true)
  const [openMaterial, setOpenMaterial] = useState<boolean>(true)
  const [openTag, setOpenTag] = useState<boolean>(true)

  return (
    <article className='filters panel panel-filters'>
      <List>
        <ListItemTemplate title='Цена' setOpen={setOpenPrice} open={false} icon={<LocalOfferOutlined />}>
          <Collapse in={false} timeout='auto' unmountOnExit>
            <FilterPrice />
          </Collapse>
        </ListItemTemplate>
        <ListItemTemplate title='Цвет' setOpen={setOpenColor} open={openColor} icon={<ColorizeOutlined />}>
          <Collapse in={openColor} timeout='auto' unmountOnExit>
            <FilterColor />
          </Collapse>
        </ListItemTemplate>
        <ListItemTemplate title='Стиль' setOpen={setOpenStyle} open={openStyle} icon={<StyleOutlined />}>
          <Collapse in={openStyle} timeout='auto' unmountOnExit>
            <FilterStyle />
          </Collapse>
        </ListItemTemplate>
        <ListItemTemplate title='Материал' setOpen={setOpenMaterial} open={openMaterial} icon={<ChairOutlined />}>
          <Collapse in={openMaterial} timeout='auto' unmountOnExit>
            <FilterMaterial />
          </Collapse>
        </ListItemTemplate>
        <ListItemTemplate title='Теги' setOpen={setOpenTag} open={openTag} icon={<StarBorderOutlined />}>
          <Collapse in={openTag} timeout='auto' unmountOnExit>
            <FilterTag />
          </Collapse>
        </ListItemTemplate>
      </List>
    </article>
  )
}

export default memo(CategoryFilters)
