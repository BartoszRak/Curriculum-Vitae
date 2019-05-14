import { useState } from 'react'

function usePayloadLoading(initialState = true) {
  const [loading, setLoading] = useState(initialState)

  window.addEventListener('load', () => {
    setLoading(false)
  })

  return { loading }
}

export default usePayloadLoading
