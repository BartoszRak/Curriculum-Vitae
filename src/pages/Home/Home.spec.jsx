import React from 'react'
import { shallow } from 'enzyme'

import { Home } from './Home'

jest.mock('./ProjectsList', () => 'ProjectsListMock')

const initComponent = overrides => {
  const mockProps = {
    classes: {},
  }
  const mockMethods = {}
  const wrapper = shallow(<Home {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('global: Home', () => {
  it('renders without crashing', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toBeTruthy()
  })
  it('should render as expected', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toMatchSnapshot()
  })
})
