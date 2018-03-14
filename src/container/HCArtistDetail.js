import {connect} from 'react-redux';
import ArtistDetail from '../components/ArtistDetail'

function mapStateToProps(state){
  return {detail:state.active_artist_detail}

}

export default connect(mapStateToProps)(ArtistDetail)