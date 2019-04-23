import React from 'react'
import { shallow } from 'enzyme'

import { Sidebar } from './Sidebar'

const initComponent = overrides => {
  const mockProps = {
    classes: {},
  }
  const mockMethods = {}
  const wrapper = shallow(<Sidebar {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('global: Sidebar', () => {
  it('renders without crashing', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toBeTruthy()
  })
  it('should render as expected', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toMatchSnapshot()
  })
})
