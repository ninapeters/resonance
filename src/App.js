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
              <p>Don't forget to unmute your device.</p>
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
  background: var(--white-transparent-min);
  padding: 8px;
  position: fixed;
  top: 0;
  width: 100%;
  p {
    color: var(--primary-dark);
    font-size: 0.7em;
    margin: 0;
    text-align: center;
  }
`
const Footer = styled.footer`
  bottom: 30px;
  display: grid;
  padding: 0 14px;
  place-items: center;
  position: fixed;
  width: 100%;
`
