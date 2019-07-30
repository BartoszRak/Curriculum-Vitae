export function getElementPosition(element) {
  if (!element) return undefined
  const boundingRect = element.getBoundingClientRect()
  const x = boundingRect.top + window.pageYOffset
  const y = boundingRect.left + window.pageXOffset
  const { width, height } = boundingRect
  const positions = { height, width, x, y }
  return positions
}

export function getScrollingElement() { 
  return window.document.scrollingElement
  || window.document.body
  || window.document.documentElement
}
