import React from 'react'
import { render, cleanup } from '@testing-library/react'

import { LanguageSelect } from './LanguageSelect'

jest.unmock('@material-ui/core')
jest.mock('~services/Internacionalization')
jest.mock('react-intl')

describe('component: LanguageSelect', () => {
  afterEach(cleanup)

  describe('rendering', () => {
    test('match snapshot', () => {
      const wrapper = render(<LanguageSelect />)

      expect(wrapper).toMatchSnapshot()
    })

    test('render select', () => {
      const { getByTestId } = render(<LanguageSelect />)
      const el = getByTestId('language-select')

      expect(el).toBeVisible()
    })
  })
})
