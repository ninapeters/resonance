import { useState, useEffect } from 'react'
import styled from 'styled-components'
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
      <UnmuteMessage>Don't forget to unmute your device.</UnmuteMessage>
      <ArtistList artists={artistData} />
    </div>
  )
}

const UnmuteMessage = styled.p`
  padding: 4px;
  color: var(--primary-dark-transparent);
  text-align: center;
  font-size: 0.7em;
`
