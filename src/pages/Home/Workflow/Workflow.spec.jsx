import React from 'react'
import { cleanup } from '@testing-library/react'
import { shallow } from 'enzyme'

import { Workflow } from './Workflow'

jest.unmock('@material-ui/core')

describe('component: Workflow', () => {
  afterEach(cleanup)

  describe('rendering', () => {
    test('render without crash', () => {
      const wrapper = shallow(<Workflow />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot', () => {
      const wrapper = shallow(<Workflow />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})
