const initialState = {
    nodeId: 'f#df',
    nodeStatus: ''
}

const nodeReducer = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'SET_CURRENT_NODE':
      return { ...state, ...rest }
    case 'SET_NODE_STATUS':
        return { ...state, ...rest }
    default:
      return state
  }
}

export default nodeReducer