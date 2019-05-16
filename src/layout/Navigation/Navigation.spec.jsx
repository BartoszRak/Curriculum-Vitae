import React from 'react'
import { shallow } from 'enzyme'

import { Navigation } from './Navigation'

const initComponent = overrides => {
  const mockProps = {
    classes: {},
    intl: {
      formatMessage: v => v.id,
    },
  }
  const mockMethods = {}
  const wrapper = shallow(<Navigation {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('global: Navigation', () => {
  it('renders without crashing', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toBeTruthy()
  })
  it('should render as expected', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toMatchSnapshot()
  })
})
