import { useEffect, useState } from 'react'
import { getElementPosition } from '~utils/utils'

const getElements = names => {
  return names.map(name => document.querySelector(`#${name}`))
}

const getElementsWithGeometry = elements => {
  return elements.map((el, index) => {
    const positions = getElementPosition(el) || {}
    const isLast = Boolean(index + 1 === elements.length)
    return {
      element: el,
      end: !isLast ? getElementPosition(elements[index + 1]).x : Infinity,
      start: positions.x,
    }
  })
}

export default function useScrollRangeHighlighting(names) {
  const initElements = getElements(names)
  const initElementsWithGeometry = getElementsWithGeometry(initElements)
  const [activeElement, setActiveElement] = useState(initElementsWithGeometry[0])

  const scrollEffect = () => {
    const elements = getElements(names)
    const elementsWithGeometry = getElementsWithGeometry(elements)
    const activeEl =
      elementsWithGeometry.find(obj => {
        const viewPoint = window.scrollY + window.innerHeight / 2
        if (viewPoint >= obj.start && viewPoint < obj.end) return true
        return false
      }) || elementsWithGeometry[0]
    setActiveElement(activeEl.element)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollEffect)
    return () => {
      window.removeEventListener('scroll', scrollEffect)
    }
  })

  return { activeElement, setActiveElement }
}
