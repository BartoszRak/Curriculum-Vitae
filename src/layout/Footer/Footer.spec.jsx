import React from 'react'
import { shallow } from 'enzyme'

import { Footer } from './Footer'

const initComponent = overrides => {
  const mockProps = {
    classes: {},
  }
  const mockMethods = {}
  const wrapper = shallow(<Footer {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('global: Footer', () => {
  it('renders without crashing', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toBeTruthy()
  })
  it('should render as expected', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toMatchSnapshot()
  })
})
