import React from 'react'
import { cleanup } from '@testing-library/react'
import { shallow } from 'enzyme'

import { Bio } from './Bio'
import { PropertyProxy } from '~utils/proxies'

jest.unmock('@material-ui/core')

let props

describe('component: Bio', () => {
  afterEach(cleanup)

  beforeEach(() => {
    props = {
      classes: PropertyProxy,
    }
  })
  describe('rendering', () => {
    test('render without crash', () => {
      const wrapper = shallow(<Bio {...props} />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot', () => {
      const wrapper = shallow(<Bio {...props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})
