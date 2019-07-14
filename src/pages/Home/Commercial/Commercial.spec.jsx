import React from 'react'
import { cleanup } from '@testing-library/react'
import { shallow } from 'enzyme'

import { Commercial } from './Commercial'
import { PropertyProxy } from '~utils/proxies'

jest.unmock('@material-ui/core')

jest.mock('~components/ProjectsList', () => 'ProjectsListMock')

let props

describe('component: Commercial', () => {
  afterEach(cleanup)

  beforeEach(() => {
    props = {
      classes: PropertyProxy,
      intl: {
        formatMessage: jest.fn(value => value),
      },
    }
  })
  describe('rendering', () => {
    test('render without crash', () => {
      const wrapper = shallow(<Commercial {...props} />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot', () => {
      const wrapper = shallow(<Commercial {...props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})
