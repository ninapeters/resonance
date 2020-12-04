import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Header from '../Header'
import AudioButton from '../Buttons/AudioButton'
import Button from '../Buttons/Button'
import { SaveIcon } from '../Icons'

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired,
  toggleCurrentSongId: PropTypes.func.isRequired,
  isSongPlaying: PropTypes.bool.isRequired,
  currentSongId: PropTypes.string,
  saveSong: PropTypes.func.isRequired,
  savedSongs: PropTypes.array,
}

export default function ArtistList({
  artists,
  toggleCurrentSongId,
  isSongPlaying,
  currentSongId,
  saveSong,
  savedSongs,
}) {
  return (
    <ListStyled>
      {artists?.map(({ artist, songTitle, id }) => (
        <ListItemStyled key={id}>
          <Header hasImage />
          <Content>
            <Artist>{artist}</Artist>
            <Song>{songTitle}</Song>
          </Content>
          <ButtonWrapper>
            <AudioButton
              onClick={() => toggleCurrentSongId(id)}
              isSongPlaying={isSongPlaying && currentSongId === id}
              currentSongId={currentSongId}
            />
            <Button
              id={id}
              onClick={() => saveSong(id)}
              disabled={savedSongs?.some((song) => song.id === id)}
              data-testid="save-button"
            >
              <SaveIcon />
            </Button>
          </ButtonWrapper>
        </ListItemStyled>
      ))}
    </ListStyled>
  )
}

const ListStyled = styled.ul`
  display: grid;
  gap: 80px;
  list-style: none;
  margin: 0;
  padding: 0;
`
const ListItemStyled = styled.li`
  position: relative;
  display: grid;
  row-gap: 46px;
  grid-template-columns: 100%;
  grid-template-rows: 384px 1fr;
`
const Content = styled.div`
  padding: 0 22px;
`
const Artist = styled.span`
  display: block;
  color: var(--primary-regular);
  font-size: 1.2em;
  font-weight: 700;
  text-transform: uppercase;
`
const Song = styled.span`
  color: var(--primary-regular);
  font-size: 1.6em;
  font-weight: 700;
  text-transform: uppercase;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 268px;
  width: 100%;
`
