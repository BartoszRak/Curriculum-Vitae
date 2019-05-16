import { useState } from 'react'

function useSelect(initialState = null) {
  const [selected, setSelected] = useState(initialState)

  return { selected, setSelected }
}

export default useSelect
