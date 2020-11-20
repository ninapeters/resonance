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
          <span>{artist}</span>
          {songTitle}
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
  span {
    display: block;
    font-size: 75%;
    font-weight: 300;
    padding-bottom: 6px;
    text-transform: uppercase;
  }

  background-color: var(--primary-light);
  color: var(--primary-dark);
  font-size: 1em;
  font-weight: 600;
  padding: 20px;
`
const ButtonWrapper = styled.div`
  display: grid;
  justify-content: flex-end;
`
