const initialState = {
  userSoeid: 'xw98072'
}

const userReducer = (state = initialState, { type, ...rest }) => {
    switch (type) {
      case 'SET_USER_SOEID':
        return { ...state, ...rest }
      default:
        return state
    }
}

export default userReducer