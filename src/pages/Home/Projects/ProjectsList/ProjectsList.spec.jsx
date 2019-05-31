import React from 'react'
import { shallow } from 'enzyme'

import { ProjectsList } from './ProjectsList'

jest.mock('./ProjectTile', () => 'ProjectTileMock')

const initComponent = overrides => {
  const mockProps = {
    classes: {},
    data: [
      {
        description: 'Test description1',
        title: 'testName1',
        tags: [{
          name: 'testTag',
          url: 'testTagUrl',
        }],
        url: 'https://testurl.com',
      },
    ]
  }
  const mockMethods = {}
  const wrapper = shallow(<ProjectsList {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('global: ProjectsList', () => {
  it('renders without crashing', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toBeTruthy()
  })
  it('should render as expected', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toMatchSnapshot()
  })
})
