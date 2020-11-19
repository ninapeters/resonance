import ArtistList from './components/ArtistList'
import { useState, useEffect } from 'react'
import getTrackData from './services/getTrackData'
import normalizeArtists from './services/normalizeArtists'

export default App

function App() {
  const [artistData, setArtistData] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    getTrackData()
      .then((tracks) => setArtistData(normalizeArtists(tracks.items)))
      .catch((error) => {
        setHasError(true)
      })
  }, [])

  return (
    <div>
      {hasError ? (
        <strong>Sorry, there was an error.</strong>
      ) : (
        <ArtistList artists={artistData} />
      )}
    </div>
  )
}
