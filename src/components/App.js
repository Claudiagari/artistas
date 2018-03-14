import React from 'react';
import '../App.css';
import SearchBar from './SearchBar'
import ArtistList from '../container/HCArtistList';
import ArtistDetail from '../container/HCArtistDetail';


const App = () => (
      <div className="App">
         <SearchBar/>
         <ArtistDetail />
        <ArtistList />
      </div>
    );


export default App;
