import { useCallback } from 'react'
import anime from 'animejs'

function useScrollTo() {
  const scrollTo = useCallback(identifier => {
    const scrollElement = window.document.scrollingElement
      || window.document.body
      || window.document.documentElement
    const element = window.document.querySelector(identifier)

    if (!element) return

    const boundingRect = element.getBoundingClientRect()
    anime({
      duration: 500,
      easing: 'easeInOutQuad',
      scrollTop: boundingRect.top + window.pageYOffset,
      targets: scrollElement,
    })
  }, [])

  return {
    scrollTo,
  }
}

export default useScrollTo
