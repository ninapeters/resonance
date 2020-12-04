import { useState, useEffect } from 'react'
import getTokenFromUrl from '../services/getTokenFromUrl'

export default function useToken() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''
    const _token = hash.access_token

    if (_token) {
      setToken(_token)
    }
  }, [])

  return { token }
}
