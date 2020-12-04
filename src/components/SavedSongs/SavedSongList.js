import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import SavedSong from './SavedSong'

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
  )
}

const List = styled.ul`
  display: grid;
  gap: 32px;
  list-style: none;
  margin: 22px 0;
  padding: 0;
`
