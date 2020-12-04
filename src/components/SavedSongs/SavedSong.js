import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useState } from 'react'
import AudioButton from '../Buttons/AudioButton'
import Button from '../Buttons/Button'
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
            <PrepareToDeleteButton
              isDelteButton
              id={id}
              onClick={() => prepareToDelete(id)}
              data-testid="prepare-delete-button"
            >
              <XIcon />
            </PrepareToDeleteButton>
          </ButtonWrapper>
          <Content>
            <Artist>{artist}</Artist>
            <Song>{songTitle}</Song>
            <AudioButtonWrapper>
              <AudioButton
                isSmall
                onClick={() => toggleCurrentSongId(id)}
                isSongPlaying={isSongPlaying && currentSongId === id}
                currentSongId={currentSongId}
              />
            </AudioButtonWrapper>
          </Content>
        </ListItem>
      )}
      {toBeDeleted && (
        <Container>
          <ConfirmationWrapper>
            <p>Do you want to delete {songTitle}?</p>
            <ConfirmationButtonWrapper>
              <DelteButton
                id={id}
                onClick={() => deleteSavedSong(id)}
                data-testid="delete-button"
              >
                <BinIcon />
              </DelteButton>
              <ResetButton
                id={id}
                onClick={() => setToBeDeleted(false)}
                data-testid="reset-button"
              >
                <ResetIcon />
              </ResetButton>
            </ConfirmationButtonWrapper>
          </ConfirmationWrapper>
        </Container>
      )}
    </>
  )

  function prepareToDelete(id) {
    stopPlayingSong(id)
    setToBeDeleted(true)
  }
}

const ListItem = styled.li`
  display: grid;
  column-gap: 8px;
  grid-template-columns: 48px auto;
  padding: 0 22px;
`
const ButtonWrapper = styled.div`
  grid-row: 1/3;
  grid-column-start: 1;
`
const PrepareToDeleteButton = styled(Button)`
  height: 48px;
  width: 48px;
`
const Content = styled.div`
  box-shadow: var(--shadow-light);
  border-radius: 10px 34px 34px 10px;
  display: grid;
  grid-template-columns: 82% auto;
  grid-template-rows: 50% 50%;
  padding: 0 0 0 8px;
`
const Artist = styled.span`
  align-self: end;
  color: var(--primary-regular);
  font-size: 0.9em;
  font-weight: 300;
  text-transform: uppercase;
`
const Song = styled.span`
  align-self: start;
  color: var(--primary-regular);
  grid-row-start: 2;
  font-size: 0.9em;
  font-weight: 700;
  text-transform: uppercase;
`
const AudioButtonWrapper = styled.div`
  grid-column-start: 3;
  grid-row: 1/3;
  justify-self: end;
`
const Container = styled.div`
  padding: 0 22px;
  display: grid;
`
const ConfirmationWrapper = styled.div`
  p {
    align-self: start;
    color: var(--primary-regular);
    font-size: 0.9em;
    font-weight: 700;
    text-align: center;
  }
`
const ConfirmationButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`
const DelteButton = styled(Button)`
  height: 48px;
  width: 48px;
  fill: var(--cta-red);
`
const ResetButton = styled(Button)`
  height: 48px;
  width: 48px;
  fill: var(--spotify-green);
`
