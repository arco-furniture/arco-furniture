import React from 'react'
import { describe, it, expect } from '@jest/globals'
import { shallow, render } from 'enzyme'
import Banner from '../../ui/Banner'
import image from '../../images/home__banner.jpg'

describe('Banner component tests', () => {
  const images = [image, image]
  const component = shallow(<Banner images={images} />)

  it('should render banner element', () => {
    expect(component.find('.preview__banner')).toBe(images.length)
  })
})
