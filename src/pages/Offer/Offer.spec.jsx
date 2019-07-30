import React from 'react'
import { cleanup } from '@testing-library/react'
import { shallow } from 'enzyme'

import { Offer } from './Offer'

jest.unmock('@material-ui/core')

describe('component: Offer', () => {
  afterEach(cleanup)

  describe('rendering', () => {
    test('render without crash', () => {
      const wrapper = shallow(<Offer />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot', () => {
      const wrapper = shallow(<Offer />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})
