import { combineReducers } from "./reducers"
import homeReducer from "./home/reducer"

const appReducers = combineReducers({
    home: homeReducer
})
   
export default appReducers