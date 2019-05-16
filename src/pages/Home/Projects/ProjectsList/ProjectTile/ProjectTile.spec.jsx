import React from 'react'
import { shallow } from 'enzyme'

import { ProjectTile } from './ProjectTile'

const initComponent = overrides => {
  const mockProps = {
    classes: {},
    description: 'Some example description',
    tags: [{
      name: 'testName1',
      url: 'http://testurl1.com',
    }, {
      name: 'testName2',
      url: 'http://testurl2.com',
    }],
    title: 'Example title',
    url: 'http://testurl.com',
  }
  const mockMethods = {}
  const wrapper = shallow(<ProjectTile {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('global: ProjectTile', () => {
  it('renders without crashing', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toBeTruthy()
  })
  it('should render as expected', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toMatchSnapshot()
  })
})
