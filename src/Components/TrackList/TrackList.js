import React from 'react';
import './TrackList.css'
import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        this.props.tracks.map(track => {
          return <Track 
                  name={this.props.track.name} 
                  artist={this.props.track.artist}
                  album={this.props.track.album}
                  key={this.props.track.id} 
                />
        })
      </div>
    )
  }
}

export default Tracklist;