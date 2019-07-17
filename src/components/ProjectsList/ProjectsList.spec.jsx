import React from 'react'
import { cleanup } from '@testing-library/react'
import { shallow } from 'enzyme'

import { ProjectsList } from './ProjectsList'

jest.unmock('@material-ui/core')
jest.unmock('@material-ui/icons')

jest.mock('./ProjectTile', () => 'ProjectTileMock')

let data

describe('component: ProjectsList', () => {
  afterEach(cleanup)

  beforeEach(() => {
    data = [{
      description: '1 tile test description',
      isFavorite: false,
      tags: [],
      title: '1 tile test title',
      url: 'http://1tiletesturl.com',
      warning: 'sample warning',
    }, {
      description: '2 tile test description',
      isFavorite: false,
      tags: [],
      title: '2 tile test title',
      url: 'http://2tiletesturl.com',
    }]
  })

  describe('rendering', () => {
    test('render without crush', () => {
      const wrapper = shallow(<ProjectsList data={data} />)

      expect(wrapper).toBeTruthy()
    })

    test('match snapshot ', () => {
      const wrapper = shallow(<ProjectsList data={data} />)

      expect(wrapper).toMatchSnapshot()
    })

    test('render valid number of tiles ', () => {
      const wrapper = shallow(<ProjectsList data={data} />)

      expect(wrapper.find('ProjectTileMock').length).toBe(data.length)
    })
  })
})
