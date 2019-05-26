import React from 'react'
import { shallow } from 'enzyme'

import { PreventInternetExplorer } from './PreventInternetExplorer'

const initComponent = overrides => {
  const mockProps = {
    children: <div id="testChildren">Test children</div>,
    classes: {},
  }
  const mockMethods = {}
  const wrapper = shallow(<PreventInternetExplorer {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('global: PreventInternetExplorer', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      const { wrapper } = initComponent()
      expect(wrapper).toBeTruthy()
    })

    it('should render as expected', () => {
      const { wrapper } = initComponent()
      expect(wrapper).toMatchSnapshot()
    })
  })
})
