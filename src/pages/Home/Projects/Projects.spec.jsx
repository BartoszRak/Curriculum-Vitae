import React from 'react'
import { cleanup } from '@testing-library/react'
import { shallow } from 'enzyme'

import { Projects } from './Projects'
import { createPropertyProxy } from '~utils/proxies'

jest.unmock('@material-ui/core')

jest.mock('./ProjectsList', () => 'ProjectsListMock')

let props

describe('component: Projects', () => {
  afterEach(cleanup)

  beforeEach(() => {
    props = {
      classes: createPropertyProxy,
    }
  })
  describe('rendering', () => {
    test('render without crash', () => {
      const wrapper = shallow(<Projects {...props} />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot', () => {
      const wrapper = shallow(<Projects {...props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})
