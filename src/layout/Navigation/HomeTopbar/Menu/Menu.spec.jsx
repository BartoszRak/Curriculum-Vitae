import React from 'react'
import { render, cleanup } from '@testing-library/react'

import { Menu } from './Menu'

jest.unmock('@material-ui/core')
jest.unmock('@material-ui/icons')

let routes

describe('component: Menu', () => {
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
      const wrapper = render(<Menu routes={routes} />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot ', () => {
      const wrapper = render(<Menu routes={routes} />)

      expect(wrapper).toMatchSnapshot()
    })

    test('render routesd', () => {
      const { getByText } = render(<Menu routes={routes} />)

      routes.forEach(route => {
        const routeEl = getByText(route.name)
        expect(routeEl).toBeVisible()
      })
    })
  })
})
