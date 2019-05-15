import React from 'react'
import { shallow } from 'enzyme'

import { SkillsList } from './SkillsList'

const initComponent = overrides => {
  const mockProps = {
    classes: {},
    data: [{
      advancement: 0,
      name: 'testName1',
    }, {
      advancement: 1,
      name: 'testName2',
    }, {
      advancement: 2,
      name: 'testName3',
    }],
  }
  const mockMethods = {}
  const wrapper = shallow(<SkillsList {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('global: SkillsList', () => {
  it('renders without crashing', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toBeTruthy()
  })
  it('should render as expected', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toMatchSnapshot()
  })
})
