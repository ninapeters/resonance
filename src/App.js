import styled from 'styled-components'
import data from './data/spotifyTrackData.json'
import normalizeArtists from './services/normalizeArtists'
import { useState, useEffect } from 'react'
import useAudio from './components/Audio/useAudio'
import useArtist from './components/Artists/useArtist'
import ArtistList from './components/Artists/ArtistList'
import SavedSong from './components/Artists/SavedSong'

export default App

function App({ artists }) {
  const [artistData, setArtistData] = useState([])

  useEffect(() => {
    setArtistData(normalizeArtists(data.tracks.items))
  }, [])

  const { toggleCurrentSongId, isSongPlaying, currentSongId } = useAudio({
    artistData,
  })

  const { savedSongs, saveSong } = useArtist({ artistData })

  return (
    <div>
      <UnmuteMessage>Don't forget to unmute your device.</UnmuteMessage>
      <ArtistList
        artists={artistData}
        toggleCurrentSongId={toggleCurrentSongId}
        isSongPlaying={isSongPlaying}
        currentSongId={currentSongId}
        saveSong={saveSong}
        savedSongs={savedSongs}
      />
      <SavedSong
        savedSongs={savedSongs}
        toggleCurrentSongId={toggleCurrentSongId}
        isSongPlaying={isSongPlaying}
        currentSongId={currentSongId}
      />
    </div>
  )
}

const UnmuteMessage = styled.p`
  padding: 4px;
  color: var(--primary-dark-transparent);
  text-align: center;
  font-size: 0.7em;
`
