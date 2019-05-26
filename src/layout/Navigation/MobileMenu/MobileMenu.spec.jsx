import React from 'react'
import { shallow } from 'enzyme'

import { MobileMenu } from './MobileMenu'

const initComponent = overrides => {
  const mockProps = {
    classes: {},
    routes: [
      {
        elementId: 'testElementId1',
        name: 'testElementName1',
      },
      {
        elementId: 'testElementId2',
        name: 'testElementName2',
      },
    ],
  }
  const mockMethods = {}
  const wrapper = shallow(<MobileMenu {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('global: MobileMenu', () => {
  it('renders without crashing', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toBeTruthy()
  })
  it('should render as expected', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toMatchSnapshot()
  })
})
