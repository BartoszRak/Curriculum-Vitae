import React from 'react'
import { render, cleanup } from '@testing-library/react'

import { DesktopMenu } from './DesktopMenu'

jest.unmock('@material-ui/core')
jest.unmock('@material-ui/icons')

let routes

describe('component: DesktopMenu', () => {
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
      const wrapper = render(<DesktopMenu routes={routes} />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot ', () => {
      const wrapper = render(<DesktopMenu routes={routes} />)

      expect(wrapper).toMatchSnapshot()
    })

    test('render routes when icon clicked', () => {
      const { getByText } = render(<DesktopMenu routes={routes} />)

      routes.forEach(route => {
        const routeEl = getByText(route.name)
        expect(routeEl).toBeVisible()
      })
    })
  })
})
