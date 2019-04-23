import React from 'react'
import { shallow } from 'enzyme'

import { Greeting } from './Greeting'

const initComponent = overrides => {
  const mockProps = {
    classes: {},
  }
  const mockMethods = {}
  const wrapper = shallow(<Greeting {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('global: Greeting', () => {
  it('renders without crashing', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toBeTruthy()
  })
  it('should render as expected', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toMatchSnapshot()
  })
})
