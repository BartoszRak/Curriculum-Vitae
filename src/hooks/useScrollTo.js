import { useCallback } from 'react'
import anime from 'animejs'

import { getElementPosition, getScrollingElement } from '~utils/utils'

function useScrollTo(moveBy = 0) {
  const scrollTo = useCallback(element => {
    const scrollElement = getScrollingElement()
    const elementPosition = getElementPosition(element)

    anime({
      duration: 500,
      easing: 'easeInOutQuad',
      scrollTop: elementPosition.x + moveBy,
      targets: scrollElement,
    })
  }, [])

  return {
    scrollTo,
  }
}

export default useScrollTo
