import React from 'react'
import { shallow } from 'enzyme'

import { Projects } from './Projects'

jest.mock('./ProjectsList', () => 'ProjectsListMock')

const initComponent = overrides => {
  const mockProps = {
    classes: {},
  }
  const mockMethods = {}
  const wrapper = shallow(<Projects {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('global: Projects', () => {
  it('renders without crashing', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toBeTruthy()
  })
  it('should render as expected', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toMatchSnapshot()
  })
})
