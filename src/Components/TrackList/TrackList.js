import React from 'react';
import './TrackList.css'
import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList"> 
      {
        this.props.tracks.map(track => {
          return <Track 
            track={track}
            key={track.id} 
            onRemove={this.props.onRemove}
            onAdd={this.props.onAdd}
          /> //end of Track component
          }        
        )
      }  
      </div>
    );
  }
}

export default TrackList;