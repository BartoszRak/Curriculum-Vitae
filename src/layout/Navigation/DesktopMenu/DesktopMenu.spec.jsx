import React from 'react'
import { shallow } from 'enzyme'

import { DesktopMenu } from './DesktopMenu'

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
  const wrapper = shallow(
    <DesktopMenu {...mockProps} {...mockMethods} {...overrides} />
  )
  return { mockProps, wrapper }
}

describe('global: DesktopMenu', () => {
  it('renders without crashing', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toBeTruthy()
  })
  it('should render as expected', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toMatchSnapshot()
  })
})
