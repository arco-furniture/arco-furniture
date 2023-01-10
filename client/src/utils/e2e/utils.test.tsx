import { describe, it, expect } from '@jest/globals'
import { shallow, render } from 'enzyme'
import { getPriceWithFormat } from '../getPriceWithFormat'
import { getSkeletonCards } from '../getSkeletonCards'

describe('Test utils functions', () => {
  it('get type string', () => {
    const component = getPriceWithFormat(10)
    expect(component).toBe('10')
  })

  it('get true format price', () => {
    const component = getPriceWithFormat(100000)
    expect(component).toBe('100 000')
  })

  it('get jsx skeleton cards', () => {
    const Skeleton = getSkeletonCards(3)

    // eslint-disable-next-line react/react-in-jsx-scope
    const res = shallow(<Skeleton />)
  })
})
