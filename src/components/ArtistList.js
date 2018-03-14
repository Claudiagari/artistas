import React from 'react';
import ArtistItem from './ArtistItem';

const ArtistList = ({artistas,onArtistClick}) => (
<ul className="col-md-4 list-group">
  {artistas.map(artista => 
    <ArtistItem
    key = {artista.name}
    {...artista}
    onClick = {() => onArtistClick(artista)}
            {...artista}
/>
  )}
</ul>
)

export default ArtistList
