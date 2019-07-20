import React from 'react'
import { cleanup } from '@testing-library/react'
import { shallow } from 'enzyme'

import { HomeTopbar } from './HomeTopbar'

jest.unmock('@material-ui/core')

jest.mock('./Menu', () => 'MenuMock')

let props

describe('component: HomeTopbar', () => {
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
      const wrapper = shallow(<HomeTopbar {...props} />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot ', () => {
      const wrapper = shallow(<HomeTopbar {...props} />)

      expect(wrapper).toMatchSnapshot()
    })

    test('render menu', () => {
      const wrapper = shallow(<HomeTopbar {...props} />)

      expect(wrapper.find('MenuMock').length).toBe(1)
    })
  })
})
