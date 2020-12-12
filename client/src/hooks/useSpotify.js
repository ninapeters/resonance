import { useEffect } from 'react'
import { useDataLayerValue } from '../DataLayer'
import SpotifyWebApi from 'spotify-web-api-js'
import getTokenFromUrl from '../services/getTokenFromUrl'

export default function useToken() {
  const spotify = new SpotifyWebApi()
  const [{ token, track }, dispatch] = useDataLayerValue()

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

      spotify
        .searchTracks(getRandomCharacter(), {
          limit: 15,
          offset: getRandomOffset(),
          market: 'DE',
        })
        .then((track) =>
          dispatch({
            type: 'SET_TRACK',
            track: track,
          })
        )
        .catch((error) => {
          console.error(error)
        })
    }

    function getRandomCharacter() {
      const characters = 'abcdefghijklmnopqrstuvwxyz'
      return characters.charAt(Math.floor(Math.random() * characters.length))
    }

    function getRandomOffset() {
      return Math.floor(Math.random() * 500)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { track, token }
}
