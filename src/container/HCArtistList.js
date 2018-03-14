import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import ArtistList from '../components/ArtistList'
import {selectArtist} from '../action/index'

function mapStateToProps(state){
    return {artistas : state.artist}
}

function mapDistpachToProps(distpach){
 return bindActionCreators({onArtistClick: selectArtist}, distpach)
}

export default connect(mapStateToProps , mapDistpachToProps)(ArtistList)