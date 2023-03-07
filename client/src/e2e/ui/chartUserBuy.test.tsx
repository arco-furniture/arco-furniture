import React from 'react'
import { describe, it, expect } from '@jest/globals'
import { shallow, render } from 'enzyme'
import ChartUserBuy from '../../ui/ChartUserBuy'

describe('chart user buy component tests', () => {
  const item = {
    day: 'декабрь',
    price: [125000, 325000],
  }

  const result = [].fill(item, 0, 15)
  const component = render(<ChartUserBuy chart={result} />)

  it('Chart user render element', () => {
    expect(component.find('canvas').length).toBe(1)
  })
})
