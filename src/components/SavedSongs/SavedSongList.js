import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import SavedSong from './SavedSong'
import Header from '../Header'

SavedSongList.propTypes = {
  stopPlayingSongById: PropTypes.func,
  deleteSavedSong: PropTypes.func.isRequired,
  savedSongs: PropTypes.array.isRequired,
  toggleCurrentSongId: PropTypes.func.isRequired,
  isSongPlaying: PropTypes.bool.isRequired,
  currentSongId: PropTypes.string,
}

export default function SavedSongList({
  stopPlayingSongById,
  deleteSavedSong,
  savedSongs,
  toggleCurrentSongId,
  isSongPlaying,
  currentSongId,
}) {
  return (
    <>
      <HeaderFixed>Favorites</HeaderFixed>
      <List>
        {savedSongs?.map(({ artist, songTitle, id }) => (
          <SavedSong
            key={id}
            artist={artist}
            songTitle={songTitle}
            id={id}
            stopPlayingSongById={stopPlayingSongById}
            deleteSavedSong={deleteSavedSong}
            toggleCurrentSongId={toggleCurrentSongId}
            isSongPlaying={isSongPlaying}
            currentSongId={currentSongId}
          />
        ))}
      </List>
    </>
  )
}

const HeaderFixed = styled(Header)`
  top: 0;
  left: 0;
  position: fixed;
`
const List = styled.ul`
  display: grid;
  gap: 32px;
  list-style: none;
  margin: 0;
  overflow-y: auto;
  padding: 0 0;
  scrollbar-width: none;
  &:before {
    content: '';
    display: block;
    height: 144px;
    width: 100%;
  }
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
