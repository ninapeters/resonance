import { useState, useEffect } from 'react'
import getTokenfromUrl from '../services/getTokenfromUrl'

export default function useToken() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getTokenfromUrl()
    window.location.hash = ''
    const _token = hash.access_token

    if (_token) {
      setToken(_token)
    }
  }, [])

  return { token }
}
