import { combineReducers } from 'redux'
import sidebarShowReducer from './sideBarShow'
import userReducer from './user'

const rootReducer = combineReducers({
  sidebar: sidebarShowReducer,
  user: userReducer
})

export default rootReducer