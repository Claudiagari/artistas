import {combineReducers} from 'redux';
import artistReducers from './artist';
import artistDetailReducers from './artistDetail'

const rootReducer = combineReducers ({
  active_artist_detail :artistDetailReducers,
  artist:artistReducers
})
export default rootReducer