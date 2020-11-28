import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import SecondaryButton from './SecondaryButton'
import { ReactComponent as DeleteIcon } from '../../assets/x.svg'

describe('SecondaryButton', () => {
  it('renders correctly', () => {
    const { container } = render(
      <SecondaryButton handleClick={() => {}}>
        <DeleteIcon />
      </SecondaryButton>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('calls handleClick with the correct id', () => {
    const handleClickMock = jest.fn()
    const { getByRole } = render(
      <SecondaryButton handleClick={() => handleClickMock('a')}>
        <DeleteIcon />
      </SecondaryButton>
    )
    const button = getByRole('button')
    user.click(button)

    expect(handleClickMock).toHaveBeenCalledWith('a')
  })
})
