import React from 'react'
import { cleanup } from '@testing-library/react'
import { shallow } from 'enzyme'

import { MainTopbar } from './MainTopbar'

jest.unmock('@material-ui/core')

jest.mock('react-router-dom', () => ({
  matchPath: jest.fn(),
  withRouter: jest.fn(),
}))
jest.mock('~components/LanguageSelect', () => 'LanguageSelectMock')

let props

describe('component: MainTopbar', () => {
  afterEach(cleanup)

  beforeEach(() => {
    props = {
      intl: {
        formatMessage: jest.fn(),
      },
      location: {
        pathname: 'mockedPathname',
      },
    }
  })
  describe('rendering', () => {
    test('render without crush', () => {
      const wrapper = shallow(<MainTopbar {...props} />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot ', () => {
      const wrapper = shallow(<MainTopbar {...props} />)

      expect(wrapper).toMatchSnapshot()
    })

    test('render language select', () => {
      const wrapper = shallow(<MainTopbar {...props} />)

      expect(wrapper.find('LanguageSelectMock').length).toBe(1)
    })
  })
})
