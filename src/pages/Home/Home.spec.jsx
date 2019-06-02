import React from 'react'
import { cleanup } from '@testing-library/react'
import { shallow } from 'enzyme'

import { Home } from './Home'

jest.unmock('@material-ui/core')

jest.mock('./Projects', () => 'ProjectsMock')
jest.mock('./Bio', () => 'BioMock')
jest.mock('./Skills', () => 'SkillsMock')
jest.mock('./Workflow', () => 'WorkflowMock')
jest.mock('./Hobbies', () => 'HobbiesMock')

describe('component: Home', () => {
  afterEach(cleanup)

  describe('rendering', () => {
    test('render without crash', () => {
      const wrapper = shallow(<Home />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot', () => {
      const wrapper = shallow(<Home />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})
