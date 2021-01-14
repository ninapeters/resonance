import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useState } from 'react'
import AudioButton from '../../app/AudioButton'
import Button from '../../app/Button'
import { CrossIcon, ResetIcon, BinIcon } from '../../app/Icons/Icons'

SavedSong.propTypes = {
  stopPlayingSongById: PropTypes.func,
  artist: PropTypes.string.isRequired,
  songTitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteSavedSong: PropTypes.func,
  toggleCurrentSongId: PropTypes.func,
  isSongPlaying: PropTypes.bool.isRequired,
  currentSongId: PropTypes.string,
}

export default function SavedSong({
  stopPlayingSongById,
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
          <PrepareToDeleteWrapper>
            <Button
              isNoCircle
              isSmall
              isRedIcon
              id={id}
              onClick={() => prepareToDelete(id)}
              testId="prepare-delete"
            >
              <CrossIcon />
            </Button>
          </PrepareToDeleteWrapper>
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
              <Button
                isSmall
                isRedIcon
                id={id}
                onClick={() => deleteSavedSong(id)}
                testId="delete"
              >
                <BinIcon />
              </Button>
              <Button
                isSmall
                id={id}
                onClick={() => setToBeDeleted(false)}
                testId="reset"
              >
                <ResetIcon />
              </Button>
            </ConfirmationButtonWrapper>
          </ConfirmationWrapper>
        </Container>
      )}
    </>
  )

  function prepareToDelete(id) {
    stopPlayingSongById(id)
    setToBeDeleted(true)
  }
}

const ListItem = styled.li`
  display: grid;
  column-gap: 8px;
  grid-template-columns: 52px auto;
  grid-template-rows: auto;
  padding: 0 22px;
`
const PrepareToDeleteWrapper = styled.section`
  box-shadow: var(--shadow-light);
  border-radius: 34px 10px 10px 34px;
  display: grid;
  grid-template-rows: auto;
  padding: 4px 2px;
  place-items: center;
`
const Content = styled.section`
  box-shadow: var(--shadow-light);
  border-radius: 10px 34px 34px 10px;
  display: grid;
  grid-template-columns: 80% auto;
  grid-template-rows: auto;
  padding: 4px 4px 4px 12px;
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
  line-height: 1;
`
const AudioButtonWrapper = styled.div`
  grid-column-start: 3;
  grid-row: 1/3;
  justify-self: end;
  align-self: center;
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
