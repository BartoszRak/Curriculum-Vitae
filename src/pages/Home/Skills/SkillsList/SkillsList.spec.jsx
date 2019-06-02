import React from 'react'
import { render, cleanup } from '@testing-library/react'

import { SkillsList } from './SkillsList'

jest.unmock('@material-ui/core')

let data

describe('component: SkillsList', () => {
  afterEach(cleanup)

  beforeEach(() => {
    data = [{
      advancement: 1,
      name: '1 Test skill name',
    }, {
      advancement: 3,
      name: '2 Test skill name',
    }]
  })

  describe('rendering', () => {
    test('match snapshot ', () => {
      const wrapper = render(<SkillsList data={data} />)

      expect(wrapper).toMatchSnapshot()
    })

    test('render skills', () => {
      const { getByText } = render(<SkillsList data={data} />)

      data.forEach(skill => {
        const skillEl = getByText(skill.name)
        expect(skillEl).toBeVisible()
      })
    })

    test('render valid summary', () => {
      const { getByTestId } = render(<SkillsList data={data} />)
      const skillSummaryEl = getByTestId('skills-list-summary')

      expect(skillSummaryEl).toBeVisible()
    })
  })
})
