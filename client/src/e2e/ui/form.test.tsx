import { describe, it, expect } from '@jest/globals'
import { shallow, render } from 'enzyme'
import Form from 'ui/Form'

describe('Form component tests', () => {
  const props = {
    title: 'title-value',
    children: <input value='input-value' onChange={() => jest.fn()} />,
  }
  const component = render(<Form {...props} />)

  it('should render form element', () => {
    expect(component.find('form').length).toBe(0)
  })

  it('should render title', () => {
    const title = component.find('h2')
    expect(title.text()).toBe('title-value')
  })
})
