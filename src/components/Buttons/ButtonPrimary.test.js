import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import ButtonPrimary from './ButtonPrimary'

describe('ButtonPrimary', () => {
  it('renders correctly', () => {
    const { container, rerender } = render(
      <ButtonPrimary disabled={false} onClick={() => {}}>
        Save this song
      </ButtonPrimary>
    )
    expect(container.firstChild).toMatchSnapshot()

    rerender(
      <ButtonPrimary disabled={true} onClick={() => {}}>
        Save this song
      </ButtonPrimary>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('calls onClick with the correct id', () => {
    const onClickMock = jest.fn()
    const { getByRole } = render(
      <ButtonPrimary disabled={false} onClick={() => onClickMock('a')}>
        Save this song
      </ButtonPrimary>
    )
    const button = getByRole('button')
    user.click(button)

    expect(onClickMock).toHaveBeenCalledWith('a')
  })
})
