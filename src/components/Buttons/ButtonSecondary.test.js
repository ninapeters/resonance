import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import ButtonSecondary from './ButtonSecondary'
import { ReactComponent as DeleteIcon } from '../../assets/x.svg'

describe('ButtonSecondary', () => {
  it('renders correctly', () => {
    const { container } = render(
      <ButtonSecondary onClick={() => {}}>
        <DeleteIcon />
      </ButtonSecondary>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('calls onClick with the correct id', () => {
    const onClickMock = jest.fn()
    const { getByRole } = render(
      <ButtonSecondary onClick={() => onClickMock('a')}>
        <DeleteIcon />
      </ButtonSecondary>
    )
    const button = getByRole('button')
    user.click(button)

    expect(onClickMock).toHaveBeenCalledWith('a')
  })
})
