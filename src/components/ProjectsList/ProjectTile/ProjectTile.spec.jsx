import React from 'react'
import { render, cleanup } from '@testing-library/react'

import { ProjectTile } from './ProjectTile'

jest.unmock('@material-ui/core')
jest.unmock('@material-ui/icons')

let project

describe('component: ProjectTile', () => {
  afterEach(cleanup)

  beforeEach(() => {
    project = {
      description: 'Test description',
      isFavorite: false,
      tags: [{
        name: 'Test tag name1',
        url: 'http://testtagurl1.com',
      }, {
        name: 'Test tag name2',
        url: 'http://testtagurl2.com',
      }],
      title: 'Test title',
      url: 'http://testurl.com',
    }
  })

  describe('rendering', () => {
    test('match snapshot ', () => {
      const wrapper = render(<ProjectTile project={project} />)

      expect(wrapper).toMatchSnapshot()
    })

    test('render title and description ', () => {
      const { getByText } = render(<ProjectTile project={project} />)

      const titleEl = getByText(project.title)
      const descriptionEl = getByText(project.description)

      expect(titleEl).toBeVisible()
      expect(descriptionEl).toBeVisible()
    })

    test('render valid url ', () => {
      const { getByText } = render(<ProjectTile project={project} />)

      const hrefEl = getByText('Details').parentNode.parentNode

      expect(hrefEl).toHaveAttribute('href', project.url)
    })

    test('render active icon when project is favorite', () => {
      project.isFavorite = true
      const { getByTestId } = render(<ProjectTile project={project} />)

      const iconButtonEl = getByTestId('project-tile-icon-button')
      expect(iconButtonEl.className).toContain('favoriteIconButton')
    })

    test('render tags', () => {
      project.isFavorite = true
      const { getByText } = render(<ProjectTile project={project} />)

      project.tags.forEach(tag => {
        const tagEl = getByText(tag.name)
        expect(tagEl).toBeVisible()
      })
    })
  })
})
