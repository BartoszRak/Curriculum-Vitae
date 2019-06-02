import React from 'react'
import { cleanup } from '@testing-library/react'
import { shallow } from 'enzyme'

import { App } from './App'

jest.unmock('@material-ui/core')
jest.mock('./layout', () => 'LayoutMock')
jest.mock('~components/PreventInternetExplorer', () => 'PreventInternetExplorerMock')

describe('component: App', () => {
  afterEach(cleanup)

  describe('rendering', () => {
    test('render without crash', () => {
      const wrapper = shallow(<App />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot', () => {
      const wrapper = shallow(<App  />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})
