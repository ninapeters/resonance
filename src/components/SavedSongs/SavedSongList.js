import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import SavedSong from './SavedSong'
import Header from '../Header'

SavedSongList.propTypes = {
  stopPlayingSong: PropTypes.func,
  deleteSavedSong: PropTypes.func.isRequired,
  savedSongs: PropTypes.array.isRequired,
  toggleCurrentSongId: PropTypes.func.isRequired,
  isSongPlaying: PropTypes.bool.isRequired,
  currentSongId: PropTypes.string,
}

export default function SavedSongList({
  stopPlayingSong,
  deleteSavedSong,
  savedSongs,
  toggleCurrentSongId,
  isSongPlaying,
  currentSongId,
}) {
  return (
    <Container>
      <Header className="header-fixed">Favorites</Header>
      <List>
        {savedSongs?.map(({ artist, songTitle, id }) => (
          <SavedSong
            key={id}
            artist={artist}
            songTitle={songTitle}
            id={id}
            stopPlayingSong={stopPlayingSong}
            deleteSavedSong={deleteSavedSong}
            toggleCurrentSongId={toggleCurrentSongId}
            isSongPlaying={isSongPlaying}
            currentSongId={currentSongId}
          />
        ))}
      </List>
    </Container>
  )
}
const Container = styled.section`
  display: grid;
  grid-template-rows: 144px auto;
  height: 100%;
  &.header-fixed {
    top: 0;
    left: 0;
    position: fixed;
  }
`
const List = styled.ul`
  overflow-y: auto;
  scrollbar-width: none;
  display: grid;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 32px 0;
  &:after {
    content: '';
    display: block;
    height: 4px;
    width: 100%;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`
