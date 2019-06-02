import React from 'react'
import { render, cleanup } from '@testing-library/react'

import { PreventInternetExplorer } from './PreventInternetExplorer'

jest.unmock('@material-ui/core')

describe('component: PreventInternetExplorer', () => {
  afterEach(cleanup)

  describe('rendering', () => {
    test('match snapshot when loading', () => {
      const wrapper = render(<PreventInternetExplorer />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})
