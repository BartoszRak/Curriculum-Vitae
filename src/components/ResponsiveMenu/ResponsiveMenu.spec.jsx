import React from 'react'
import { render, cleanup } from '@testing-library/react'

import { ResponsiveMenu } from './ResponsiveMenu'

jest.unmock('@material-ui/core')
jest.unmock('@material-ui/icons')

let routes

describe('component: ResponsiveMenu', () => {
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
      const wrapper = render(<ResponsiveMenu items={routes} />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot ', () => {
      const wrapper = render(<ResponsiveMenu items={routes} />)

      expect(wrapper).toMatchSnapshot()
    })

    test('render routesd', () => {
      const { getByText } = render(<ResponsiveMenu items={routes} />)

      routes.forEach(route => {
        const routeEl = getByText(route.name)
        expect(routeEl).toBeVisible()
      })
    })
  })
})
