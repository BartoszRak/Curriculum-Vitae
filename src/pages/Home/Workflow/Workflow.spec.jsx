import React from 'react'
import { cleanup } from '@testing-library/react'
import { shallow } from 'enzyme'

import { Workflow } from './Workflow'
import { createPropertyProxy } from '~utils/proxies'

jest.unmock('@material-ui/core')

let props

describe('component: Workflow', () => {
  afterEach(cleanup)

  beforeEach(() => {
    props = {
      classes: createPropertyProxy,
    }
  })
  describe('rendering', () => {
    test('render without crash', () => {
      const wrapper = shallow(<Workflow {...props} />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot', () => {
      const wrapper = shallow(<Workflow {...props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})
