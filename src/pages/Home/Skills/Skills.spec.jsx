import React from 'react'
import { cleanup } from '@testing-library/react'
import { shallow } from 'enzyme'

import { Skills } from './Skills'
import { PropertyProxy } from '~utils/proxies'

jest.unmock('@material-ui/core')

jest.mock('./SkillsList', () => 'SkillsListMock')

let props

describe('component: Skills', () => {
  afterEach(cleanup)

  beforeEach(() => {
    props = {
      classes: PropertyProxy,
    }
  })
  describe('rendering', () => {
    test('render without crash', () => {
      const wrapper = shallow(<Skills {...props} />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot', () => {
      const wrapper = shallow(<Skills {...props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})
