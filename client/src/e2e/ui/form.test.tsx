import React from 'react'
import { describe, it, expect } from '@jest/globals'
import { shallow, render } from 'enzyme'
import Form from 'ui/Form'

describe('Form component tests', () => {
  const component = render(
    <Form title='Заголовок формы' onSubmit={jest.fn()}>
      <input value='input-value' onChange={() => jest.fn()} />
    </Form>,
  )

  it('should render form element', () => {
    expect(component.find('form').length).toBe(0)
  })

  it('should render title', () => {
    const title = component.find('h2')
    expect(title.text()).toBe('Заголовок формы')
  })
})
