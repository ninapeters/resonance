import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import data from './data/spotifyTrackData.json'
import normalizeArtists from './services/normalizeArtists'
import { useState, useEffect } from 'react'
import useAudio from './hooks/useAudio'
import useArtist from './hooks/useArtist'
import ArtistList from './components/Artists/ArtistList'
import SavedSongList from './components/SavedSongs/SavedSongList'
import Navigation from './components/Navigation/Navigation'

export default App

function App() {
  const [artistData, setArtistData] = useState([])
  useEffect(() => {
    setArtistData(normalizeArtists(data.tracks.items))
  }, [])
  const {
    toggleCurrentSongId,
    isSongPlaying,
    currentSongId,
    stopPlayingSongById,
    stopPlayingSong,
  } = useAudio({
    artistData,
  })
  const { savedSongs, saveSong, deleteSavedSong } = useArtist({ artistData })

  return (
    <>
      <Main>
        <Switch>
          <Route exact path="/">
            <UnmuteMessage>
              <p>Please unmute your device.</p>
            </UnmuteMessage>
            <ArtistList
              artists={artistData}
              toggleCurrentSongId={toggleCurrentSongId}
              isSongPlaying={isSongPlaying}
              currentSongId={currentSongId}
              saveSong={saveSong}
              savedSongs={savedSongs}
            />
          </Route>
          <Route path="/favorites">
            <SavedSongList
              stopPlayingSongById={stopPlayingSongById}
              deleteSavedSong={deleteSavedSong}
              savedSongs={savedSongs}
              toggleCurrentSongId={toggleCurrentSongId}
              isSongPlaying={isSongPlaying}
              currentSongId={currentSongId}
            />
          </Route>
        </Switch>
      </Main>
      <Footer>
        <Navigation onClick={stopPlayingSong} />
      </Footer>
    </>
  )
}

const Main = styled.main`
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
const UnmuteMessage = styled.div`
  background: var(--white-transparent-max);
  padding: 8px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  p {
    color: var(--primary-regular);
    font-size: 0.7em;
    font-weight: 700;
    margin: 0;
    text-align: center;
  }
`
const Footer = styled.footer`
  bottom: 30px;
  left: 0;
  position: fixed;
  right: 0;
`
