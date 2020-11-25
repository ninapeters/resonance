import styled from 'styled-components/macro'

const Button = styled.button`
  background-color: transparent;
  border: var(--primary-dark) 2px solid;
  color: var(--primary-dark);
  padding: 6px;
  font-size: 0.8em;
  width: 100%;

  &:disabled {
    opacity: 50%;
  }
`
export default Button
