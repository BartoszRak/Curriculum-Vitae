import React from 'react'
import { cleanup } from '@testing-library/react'
import { shallow } from 'enzyme'

import { Layout } from './Layout'

jest.unmock('@material-ui/core')

describe('component: Layout', () => {
  afterEach(cleanup)

  describe('rendering', () => {
    test('render without crash', () => {
      const wrapper = shallow(<Layout />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot', () => {
      const wrapper = shallow(<Layout />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})
