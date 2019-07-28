import { useEffect, useState } from 'react'
import { getElementPosition } from '~utils/utils'

export default function useScrollRangeHighlighting(names) {
  const [activeElement, setActiveElement] = useState(names[0])

  const scrollEffect = () => {
    const elements = names.map(name => document.querySelector(`#${name}`))
    const elementsWithGeometry = elements.map((el, index) => {
      const positions = getElementPosition(el) || {}
      const isLast = Boolean(index + 1 === elements.length)
      return {
        element: el,
        end: !isLast ? getElementPosition(elements[index + 1]).x : Infinity,
        start: positions.x,
      }
    })
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
