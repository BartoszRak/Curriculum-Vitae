import React from 'react'
import { render, cleanup } from '@testing-library/react'

import { Loader } from './Loader'

jest.unmock('@material-ui/core')

describe('component: Loader', () => {
  afterEach(cleanup)

  describe('rendering', () => {
    test('match snapshot when loading', () => {
      const wrapper = render(<Loader />)

      expect(wrapper).toMatchSnapshot()
    })

    test('match snapshot when not loading', () => {
      const wrapper = render(<Loader disabled />)

      expect(wrapper).toMatchSnapshot()
    })

    test('render all 4 bars', () => {
      const { getAllByRole } = render(<Loader />)
      const elArr = getAllByRole('progressbar')

      elArr.forEach(el => {
        expect(el).toBeVisible()
      })
      expect(elArr.length).toBe(4)
    })
  })
})
