import { useState, useEffect } from 'react'
import getTokenFromUrl from '../services/getTokenFromUrl'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi()

export default function useToken() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''
    const _token = hash.access_token

    if (_token) {
      setToken(_token)

      spotify.setAccessToken(_token)

      spotify.searchTracks('Love', { limit: 1 }).then(function (data) {
        console.log('Search by "Love"', data)
      })
    }
  }, [])

  return { token }
}
