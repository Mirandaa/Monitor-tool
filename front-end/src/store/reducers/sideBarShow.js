const initialState = {
    sidebarShow: 'responsive'
}

const sidebarShowReducer = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'SET_SIDEBAR_SHOW':
      return { ...state, ...rest}
    default:
      return state
  }
}

export default sidebarShowReducer