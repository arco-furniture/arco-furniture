import { Collapse, List } from '@mui/material'
import FilterTemplate from './FilterTemplate'
import React, { useState } from 'react'
import { FilterColor, FilterPrice, FilterStyle, FilterMaterial, FilterTag } from './filters'
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined'
import ColorizeOutlinedIcon from '@mui/icons-material/ColorizeOutlined'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'

const CategoryFilters: React.FC = () => {
  const [openPrice, setOpenPrice] = useState(true)
  const [openColor, setOpenColor] = useState(true)
  const [openStyle, setOpenStyle] = useState(true)
  const [openMaterial, setOpenMaterial] = useState(true)
  const [openTag, setOpenTag] = useState(true)

  return (
    <article className='filters panel panel-filters'>
      <List>
        <FilterTemplate title='Цена' setOpen={setOpenPrice} open={openPrice} icon={<LocalOfferOutlinedIcon />}>
          <Collapse in={openPrice} timeout='auto' unmountOnExit>
            <FilterPrice />
          </Collapse>
        </FilterTemplate>
        <FilterTemplate title='Цвет исполнения' setOpen={setOpenColor} open={openColor} icon={<ColorizeOutlinedIcon />}>
          <Collapse in={openColor} timeout='auto' unmountOnExit>
            <FilterColor />
          </Collapse>
        </FilterTemplate>
        <FilterTemplate title='Стиль' setOpen={setOpenStyle} open={openStyle} icon={<StyleOutlinedIcon />}>
          <Collapse in={openStyle} timeout='auto' unmountOnExit>
            <FilterStyle />
          </Collapse>
        </FilterTemplate>
        <FilterTemplate title='Материал' setOpen={setOpenMaterial} open={openMaterial} icon={<ChairOutlinedIcon />}>
          <Collapse in={openMaterial} timeout='auto' unmountOnExit>
            <FilterMaterial />
          </Collapse>
        </FilterTemplate>
        <FilterTemplate title='Теги' setOpen={setOpenTag} open={openTag} icon={<StarBorderOutlinedIcon />}>
          <Collapse in={openTag} timeout='auto' unmountOnExit>
            <FilterTag />
          </Collapse>
        </FilterTemplate>
      </List>
    </article>
  )
}

export default CategoryFilters
