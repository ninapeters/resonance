import { useEffect } from 'react'
import { useDataLayerValue } from '../DataLayer'
import SpotifyWebApi from 'spotify-web-api-js'
import getTokenFromUrl from '../services/getTokenFromUrl'

export default function useToken() {
  const spotify = new SpotifyWebApi()
  const [{ token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''
    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { spotify, token }
}
