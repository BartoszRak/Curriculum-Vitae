import React from 'react'
import { render, cleanup } from '@testing-library/react'

import { Greeting } from './Greeting'

jest.unmock('@material-ui/core')

jest.mock('react-intl')

describe('component: Greeting', () => {
  afterEach(cleanup)

  describe('rendering', () => {
    test('render without crash ', () => {
      const wrapper = render(<Greeting />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot ', () => {
      const wrapper = render(<Greeting />)

      expect(wrapper).toMatchSnapshot()
    })

    describe('render all titles', () => {
      test.each([
        ['greeting-title'],
        ['greeting-subtitle'],
        ['greeting-subsubtitle']
      ])('when specified title %s provided', title => {
        const { getByTestId } = render(<Greeting />)
        const titleEl = getByTestId(title)

        expect(titleEl).toBeVisible()
      })
    })
  })
})
