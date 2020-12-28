import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import normalizeArtists from './services/normalizeArtists'
import { useState, useEffect } from 'react'
import useSpotify from './hooks/useSpotify'
import useAudio from './hooks/useAudio'
import useArtist from './hooks/useArtist'
import LoginPage from './login/LoginPage'
import ArtistPage from './artist/ArtistPage'
import SavedSongPage from './saved/SavedSongPage'
import Navigation from './components/Navigation/Navigation'

export default function App() {
  const { track, token, updateTrack } = useSpotify()

  const [artistData, setArtistData] = useState([])

  useEffect(() => {
    setArtistData(normalizeArtists(track?.tracks.items))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track])

  const { savedSongs, saveSong, deleteSavedSong } = useArtist({
    artistData,
  })

  const {
    toggleCurrentSongId,
    isSongPlaying,
    currentSongId,
    stopPlayingSongById,
    stopPlayingSong,
  } = useAudio({
    artistData,
    savedSongs,
    updateTrack,
  })

  return (
    <Main>
      {token ? (
        <Switch>
          <Route exact path="/">
            <UnmuteMessage>
              <p>Please unmute your device.</p>
            </UnmuteMessage>
            <ArtistPage
              artists={artistData}
              updateTrack={updateTrack}
              stopPlayingSong={stopPlayingSong}
              toggleCurrentSongId={toggleCurrentSongId}
              isSongPlaying={isSongPlaying}
              currentSongId={currentSongId}
              saveSong={saveSong}
              savedSongs={savedSongs}
            />
            <Footer>
              <Navigation onClick={stopPlayingSong} />
            </Footer>
          </Route>
          <Route path="/favorites">
            <SavedSongPage
              stopPlayingSongById={stopPlayingSongById}
              deleteSavedSong={deleteSavedSong}
              savedSongs={savedSongs}
              toggleCurrentSongId={toggleCurrentSongId}
              isSongPlaying={isSongPlaying}
              currentSongId={currentSongId}
            />
            <Footer>
              <Navigation onClick={stopPlayingSong} />
            </Footer>
          </Route>
        </Switch>
      ) : (
        <LoginPage />
      )}
    </Main>
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
