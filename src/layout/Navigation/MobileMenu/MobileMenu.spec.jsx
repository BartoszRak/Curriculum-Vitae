import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'

import { MobileMenu } from './MobileMenu'

jest.unmock('@material-ui/core')
jest.unmock('@material-ui/icons')

let routes

describe('component: MobileMenu', () => {
  afterEach(cleanup)

  beforeEach(() => {
    routes = [{
      elementId: '1 test element id',
      name: '1 test name',
    }, {
      elementId: '2 test element id',
      name: '2 test name',
    }]
  })
  describe('rendering', () => {
    test('render without crash ', () => {
      const wrapper = render(<MobileMenu routes={routes} />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot ', () => {
      const wrapper = render(<MobileMenu routes={routes} />)

      expect(wrapper).toMatchSnapshot()
    })

    test('render routes when icon clicked', () => {
      const { getByText, getByTestId } = render(<MobileMenu routes={routes} />)
      const openButtonEl = getByTestId('mobile-menu-open-icon')

      fireEvent.click(openButtonEl)

      const modalEl = getByTestId('mobile-menu-modal')
      expect(modalEl).toBeVisible()

      routes.forEach(route => {
        const routeEl = getByText(route.name)
        expect(routeEl).toBeVisible()
      })
    })
  })
})
