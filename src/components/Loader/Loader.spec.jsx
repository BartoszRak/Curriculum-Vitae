import React from 'react'
import { shallow } from 'enzyme'

import { Loader } from './Loader'

const initComponent = overrides => {
  const mockProps = {
    children: <div id="testChildren">Test children</div>,
    classes: {},
  }
  const mockMethods = {}
  const wrapper = shallow(<Loader {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('global: Loader', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      const { wrapper } = initComponent()
      expect(wrapper).toBeTruthy()
    })

    it('should render as expected', () => {
      const { wrapper } = initComponent()
      expect(wrapper).toMatchSnapshot()
    })

    it('should render as expected when not loading', () => {
      const { wrapper } = initComponent({ disable: true })
      expect(wrapper).toMatchSnapshot()
    })

    it('should render children when loading disabled', () => {
      const { wrapper } = initComponent({ disable: true })
      expect(wrapper.find('#testChildren').length).toBe(1)
    })

    it('should not render children when loading disabled', () => {
      const { wrapper } = initComponent({ disable: false })
      expect(wrapper.find('#testChildren').length).toBe(0)
    })
  })
})
