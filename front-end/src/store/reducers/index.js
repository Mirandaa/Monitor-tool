import { combineReducers } from 'redux'
import sidebarShowReducer from './sideBarShow'
import userReducer from './user'
import nodeReducer from './node'

const rootReducer = combineReducers({
  sidebar: sidebarShowReducer,
  user: userReducer,
  node: nodeReducer
})

export default rootReducer