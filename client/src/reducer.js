export const initialState = {
  token: null,
  track: null,
}

const reducer = (state, action) => {
  console.log('action: ', action)

  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      }

    case 'SET_TRACK':
      return {
        ...state,
        track: action.track,
      }

    default:
      return state
  }
}

export default reducer
