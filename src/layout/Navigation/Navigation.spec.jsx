import React from 'react'
import { cleanup } from '@testing-library/react'
import { shallow } from 'enzyme'

import { Navigation } from './Navigation'

jest.unmock('@material-ui/core')

jest.mock('./MobileMenu', () => 'MobileMenuMock')
jest.mock('./DesktopMenu', () => 'DesktopMenuMock')
jest.mock('~components/LanguageSelect', () => 'LanguageSelectMock')

let props

describe('component: Navigation', () => {
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
      const wrapper = shallow(<Navigation {...props} />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot ', () => {
      const wrapper = shallow(<Navigation {...props} />)

      expect(wrapper).toMatchSnapshot()
    })

    test('render mobile and desktop menu', () => {
      const wrapper = shallow(<Navigation {...props} />)

      expect(wrapper.find('MobileMenuMock').length).toBe(1)
      expect(wrapper.find('DesktopMenuMock').length).toBe(1)
    })

    test('render language select', () => {
      const wrapper = shallow(<Navigation {...props} />)

      expect(wrapper.find('LanguageSelectMock').length).toBe(1)
    })
  })
})
