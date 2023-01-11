import { describe, it, expect } from '@jest/globals'
import { shallow, render } from 'enzyme'
import { getPriceWithFormat } from 'utils/getPriceWithFormat'

describe('Test utils functions', () => {
  it('get type string', () => {
    const component = getPriceWithFormat(10)
    expect(component).toBe('10')
  })

  it('get true format price', () => {
    const component = getPriceWithFormat(100000)
    expect(component).toBe('100 000')
  })
})
