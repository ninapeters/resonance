import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import AudioButton from '../AudioButton/AudioButton'

export default ArtistList

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired,
}

function ArtistList({ artists }) {
  return (
    <ListStyled>
      {artists?.map(({ artist, songTitle, songSnippet, id }) => (
        <ListItemStyled key={id}>
          <Artist>{artist}</Artist>
          <Song>{songTitle}</Song>
          <ButtonWrapper>
            <AudioButton songUrl={songSnippet} />
          </ButtonWrapper>
        </ListItemStyled>
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
const ListItemStyled = styled.li`
  display: grid;
  grid-template-columns: 80% auto;
  grid-template-rows: repeat(2, 50%);
  background-color: var(--primary-light);
  padding: 20px;
`
const Artist = styled.span`
  display: block;
  font-size: 75%;
  font-weight: 300;
  padding-bottom: 6px;
  text-transform: uppercase;
`
const Song = styled.span`
  color: var(--primary-dark);
  font-size: 1em;
  font-weight: 600;
  grid-column-start: 1;
`
const ButtonWrapper = styled.div`
  grid-row: 1/3;
  grid-column-start: 2;
  justify-self: end;
`
