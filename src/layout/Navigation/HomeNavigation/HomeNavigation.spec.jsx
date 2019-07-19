import React from 'react'
import { cleanup } from '@testing-library/react'
import { shallow } from 'enzyme'

import { HomeNavigation } from './HomeNavigation'

jest.unmock('@material-ui/core')

jest.mock('./MobileMenu', () => 'MobileMenuMock')
jest.mock('./DesktopMenu', () => 'DesktopMenuMock')

let props

describe('component: HomeNavigation', () => {
  afterEach(cleanup)

  beforeEach(() => {
    props = {
      intl: {
        formatMessage: jest.fn(),
      },
    }
  })
  describe('rendering', () => {
    test('render without crush', () => {
      const wrapper = shallow(<HomeNavigation {...props} />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot ', () => {
      const wrapper = shallow(<HomeNavigation {...props} />)

      expect(wrapper).toMatchSnapshot()
    })

    test('render mobile and desktop menu', () => {
      const wrapper = shallow(<HomeNavigation {...props} />)

      expect(wrapper.find('MobileMenuMock').length).toBe(1)
      expect(wrapper.find('DesktopMenuMock').length).toBe(1)
    })
  })
})
