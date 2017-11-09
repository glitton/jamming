import React from 'react';
import './Playlist.css'
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  constructor(props){
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(evt) {
    this.props.onNameChange(evt.target.value);

  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} />
        <TrackList 
            tracks={this.props.playListTracks}
            onRemove={this.props.onRemove} 
            onChange={this.handleNameChange}
        />
            
        <a className="Playlist-save" onClick={this.props.onSave}>
          SAVE TO SPOTIFY
        </a>
      </div>
    );
  }
}

export default Playlist;