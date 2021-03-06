import React from 'react'
import { cleanup } from '@testing-library/react'
import { shallow } from 'enzyme'

import { Navigation } from './Navigation'

jest.unmock('@material-ui/core')

jest.mock('./MainTopbar', () => 'MainTopbarMock')
jest.mock('./HomeTopbar', () => 'HomeTopbarMock')

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
  })
})
