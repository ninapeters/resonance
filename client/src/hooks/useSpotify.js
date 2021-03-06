import { useEffect } from 'react'
import { useDataLayerValue } from '../DataLayer'
import SpotifyWebApi from 'spotify-web-api-js'
import getTokenFromUrl from '../services/getTokenFromUrl'
import getRandomOffset from '../services/getRandomOffset'

export default function useSpotify() {
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

      updateTrack()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function updateTrack() {
    spotify
      .searchTracks('genre:alternative', {
        limit: 1,
        offset: getRandomOffset(),
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

  return { track, token, updateTrack }
}
