import React from 'react'
import { shallow } from 'enzyme'

import { Layout } from './Layout'

jest.mock('~pages/Home', () => 'HomeMock')
jest.mock('./Greeting', () => 'GreetingMock')
jest.mock('./Footer', () => 'FooterMock')

const initComponent = overrides => {
  const mockProps = {
    classes: {},
  }
  const mockMethods = {}
  const wrapper = shallow(<Layout {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('global: Layout', () => {
  it('renders without crashing', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toBeTruthy()
  })
  it('should render as expected', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toMatchSnapshot()
  })
})
