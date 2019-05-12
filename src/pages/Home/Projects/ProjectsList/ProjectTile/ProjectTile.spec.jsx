import React from 'react'
import { shallow } from 'enzyme'

import { ProjectTile } from './ProjectTile'

const initComponent = overrides => {
  const mockProps = {
    classes: {},
    url: 'http://testurl.com',
    name: 'Example title',
    image: 'http://testImage.com/url',
    description: 'Some example description',
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
