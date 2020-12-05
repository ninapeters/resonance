import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
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
      {artists?.map(({ artist, songTitle, image, id }) => (
        <ListItemStyled key={id}>
          <Cover src={image} alt="" />
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
  display: flex;
  flex-wrap: nowrap;
  margin: 0;
  overflow-x: scroll;
  padding: 0;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
const ListItemStyled = styled.li`
  display: grid;
  flex: 1 0 100%;
  grid-template-columns: 100%;
  grid-template-rows: 54vh auto;
  position: relative;
  row-gap: 46px;
  scroll-snap-align: start;
`
const Cover = styled.img`
  border-radius: 0 0 70px 70px;
  box-shadow: var(--shadow-dark);
  height: 54vh;
  object-fit: cover;
  width: 100%;
`
const Content = styled.div`
  padding: 0 22px;
`
const Artist = styled.span`
  color: var(--primary-regular);
  display: block;
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 8px;
  text-transform: uppercase;
`
const Song = styled.span`
  color: var(--primary-regular);
  font-size: 1.6em;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 50%;
  width: 100%;
`
