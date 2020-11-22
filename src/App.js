import { useState, useEffect } from 'react'
import data from './data/spotifyTrackData.json'
import normalizeArtists from './services/normalizeArtists'
import ArtistList from './components/Artists/ArtistList'

export default App

function App() {
  const [artistData, setArtistData] = useState([])

  useEffect(() => {
    setArtistData(normalizeArtists(data.tracks.items))
  }, [])

  return (
    <div>
      <ArtistList artists={artistData} />
    </div>
  )
}
