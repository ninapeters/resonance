import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import PrimaryButton from './PrimaryButton'

describe('PrimaryButton', () => {
  it('renders correctly', () => {
    const { container, rerender } = render(
      <PrimaryButton disabled={false} handleClick={() => {}}>
        Save this song
      </PrimaryButton>
    )
    expect(container.firstChild).toMatchSnapshot()

    rerender(
      <PrimaryButton disabled={true} handleClick={() => {}}>
        Save this song
      </PrimaryButton>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('calls handleClick with the correct id', () => {
    const handleClickMock = jest.fn()
    const { getByRole } = render(
      <PrimaryButton disabled={false} handleClick={() => handleClickMock('a')}>
        Save this song
      </PrimaryButton>
    )
    const button = getByRole('button')
    user.click(button)

    expect(handleClickMock).toHaveBeenCalledWith('a')
  })
})
