import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import AudioButton from '../Buttons/AudioButton'
import ButtonSecondary from '../Buttons/ButtonSecondary'
import { ReactComponent as DeleteIcon } from '../../assets/x.svg'

SavedSongList.propTypes = {
  savedSongs: PropTypes.array.isRequired,
  toggleCurrentSongId: PropTypes.func.isRequired,
  isSongPlaying: PropTypes.bool.isRequired,
  currentSongId: PropTypes.string,
}

export default function SavedSongList({
  deleteSavedSong,
  savedSongs,
  toggleCurrentSongId,
  isSongPlaying,
  currentSongId,
}) {
  return (
    <ListStyled>
      {savedSongs?.map(({ artist, songTitle, id }) => (
        <ListItem key={id}>
          <DeleteButtonWrapper>
            <ButtonSecondary
              id={id}
              onClick={() => deleteSavedSong(id)}
              data-testid="delete-button"
            >
              <DeleteIcon />
            </ButtonSecondary>
          </DeleteButtonWrapper>
          <Artist>{artist}</Artist>
          <Song>{songTitle}</Song>
          <AudioButtonWrapper>
            <AudioButton
              onClick={() => toggleCurrentSongId(id)}
              isSongPlaying={isSongPlaying && currentSongId === id}
              currentSongId={currentSongId}
            />
          </AudioButtonWrapper>
        </ListItem>
      ))}
    </ListStyled>
  )
}

const ListStyled = styled.ul`
  display: grid;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  background-color: var(--primary-light);
  display: grid;
  column-gap: 14px;
  grid-template-columns: 36px auto 46px;
  grid-template-rows: 1fr 1fr;
  padding: 20px;
`
const DeleteButtonWrapper = styled.div`
  grid-row: 1/3;
  grid-column-start: 1;
`
const Artist = styled.span`
  display: block;
  font-size: 75%;
  font-weight: 300;
  padding-bottom: 6px;
  text-transform: uppercase;
  grid-column-start: 2;
`
const Song = styled.span`
  color: var(--primary-dark);
  font-size: 1em;
  font-weight: 600;
  grid-column-start: 2;
`
const AudioButtonWrapper = styled.div`
  grid-column-start: 3;
  grid-row: 1/3;
  justify-self: end;
`
