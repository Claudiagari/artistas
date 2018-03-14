import React from 'react'

const ArtistDetail = ({detail}) => (
  <div className="artist-detail col-md-8">
    <div className="details">
      <div>{detail.name}</div>
      <div>{detail.bio}</div>
      <div><img src={detail.url} alt={detail.name} /></div>
    </div>
  </div>
)

export default ArtistDetail 