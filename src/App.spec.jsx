import React from 'react'
import { shallow } from 'enzyme'

import { App } from './App'

jest.mock('./layout', () => 'LayoutMock')
jest.mock('~components/PreventInternetExplorer', () => 'PreventInternetExplorerMock')

const initComponent = overrides => {
  const mockProps = {
    classes: {},
  }
  const mockMethods = {}
  const wrapper = shallow(<App {...mockProps} {...mockMethods} {...overrides} />)
  return { mockProps, wrapper }
}

describe('global: App', () => {
  it('renders without crashing', () => {
    const { wrapper } = initComponent()
    expect(wrapper).toBeTruthy()
  })
})
