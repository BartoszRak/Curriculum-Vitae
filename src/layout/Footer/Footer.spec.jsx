import React from 'react'
import { render, cleanup } from '@testing-library/react'

import { Footer } from './Footer'

jest.unmock('@material-ui/core')

jest.mock('react-intl')

describe('component: Footer', () => {
  afterEach(cleanup)

  describe('rendering', () => {
    test('render without crash ', () => {
      const wrapper = render(<Footer />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot ', () => {
      const wrapper = render(<Footer />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})
