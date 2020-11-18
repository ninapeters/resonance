import ArtistList from './components/ArtistList'
import { useState, useEffect } from 'react'
import getTrackData from './services/getTrackData'
import normalizeArtists from './services/normalizeArtists'

export default App

function App() {
  const [artistData, setArtistData] = useState([])

  useEffect(() => {
    getTrackData().then((tracks) =>
      setArtistData(normalizeArtists(tracks.items))
    )
  }, [])

  return (
    <div>
      <ArtistList artists={artistData} />
    </div>
  )
}
