import React from 'react'
import { cleanup } from '@testing-library/react'
import { shallow } from 'enzyme'

import { Hobbies } from './Hobbies'
import { PropertyProxy } from '~utils/proxies'

jest.unmock('@material-ui/core')

let props

describe('component: Hobbies', () => {
  afterEach(cleanup)

  beforeEach(() => {
    props = {
      classes: PropertyProxy,
    }
  })
  describe('rendering', () => {
    test('render without crash', () => {
      const wrapper = shallow(<Hobbies {...props} />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot', () => {
      const wrapper = shallow(<Hobbies {...props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})
