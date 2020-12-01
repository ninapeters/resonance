import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useState } from 'react'
import AudioButton from '../Buttons/AudioButton'
import ButtonSecondary from '../Buttons/ButtonSecondary'
import { XIcon, ResetIcon, BinIcon } from '../Icons'

SavedSong.propTypes = {
  stopPlayingSong: PropTypes.func,
  artist: PropTypes.string.isRequired,
  songTitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteSavedSong: PropTypes.func,
  toggleCurrentSongId: PropTypes.func,
  isSongPlaying: PropTypes.bool.isRequired,
  currentSongId: PropTypes.string,
}

export default function SavedSong({
  stopPlayingSong,
  artist,
  songTitle,
  id,
  deleteSavedSong,
  toggleCurrentSongId,
  isSongPlaying,
  currentSongId,
}) {
  const [toBeDeleted, setToBeDeleted] = useState(false)

  return (
    <>
      {toBeDeleted || (
        <ListItem>
          <ButtonWrapper>
            <ButtonSecondary
              id={id}
              onClick={() => prepareToDelete(id)}
              data-testid="prepare-delete-button"
            >
              <XIcon />
            </ButtonSecondary>
          </ButtonWrapper>
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
      )}
      {toBeDeleted && (
        <ConfirmationWrapper>
          <p>Do you want to delete this song?</p>
          <ConfirmationButton
            id={id}
            onClick={() => deleteSavedSong(id)}
            data-testid="delete-button"
          >
            <BinIcon />
          </ConfirmationButton>
          <ConfirmationButton
            id={id}
            onClick={() => setToBeDeleted(false)}
            data-testid="reset-button"
          >
            <ResetIcon />
          </ConfirmationButton>
        </ConfirmationWrapper>
      )}
    </>
  )

  function prepareToDelete(id) {
    stopPlayingSong(id)
    setToBeDeleted(true)
  }
}

const ListItem = styled.li`
  background-color: var(--primary-light);
  display: grid;
  column-gap: 14px;
  grid-template-columns: 36px auto 46px;
  grid-template-rows: 1fr 1fr;
  padding: 20px;
`
const ButtonWrapper = styled.div`
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
const ConfirmationWrapper = styled.section`
  background-color: var(--primary-light);
  display: grid;
  column-gap: 14px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 20px;
  p {
    align-self: start;
    grid-column: 1/3;
    margin: 0;
    text-align: center;
  }
`
const ConfirmationButton = styled(ButtonSecondary)`
  justify-self: center;
`
