import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist  from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        // {
        //   name: 'Borderline', 
        //   artist: 'Madonna', 
        //   album: 'Immaculate Conception'
        // }
      ],
      playlistName: '',
      playlistTracks: [] 
    };  
      
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.search = this.search.bind(this); 
  } //end of constructor

  //step 41
  addTrack(track) {
    // get current list of tracks
    let tracks = this.state.playlistTracks
    // check if track exists
    if(!tracks.includes(track)) {
      //if not, add it to the tracks object
      tracks.push(track);
      this.setState({
        playlistTracks: tracks
      }) 
    }
  } // end of addTrack

  removeTrack(track) {
    // get list of curret tracks
    let tracks = this.state.playlistTracks
    // check if track is in the list
    if(tracks.includes(track)) {
      //filter checks currTrack against tracks
      tracks = tracks.filter(currTrack => {
      // return true if currTrack.id doesn't have the same id as `track`
        if(currTrack.id !== track.id) {
          return true;
        } else {
          return false;
        }
      }); 
    }  
      this.setState({
        tracks: tracks
      }) 
  }// end of removeTrack

  updatePlaylistName(name) {
    this.setState({
      name: name
    })
  }

  savePlaylist(playlistName, arrayTrackURIs) {
    Spotify.savePlaylist(playlistName, arrayTrackURIs).then(playlistTrack => {
      this.setState({
        playlistName: 'New Playlist',
        searchResults: []
      })
    })
    // let trackURIs = [];
    // for(let i= 0; i < this.playListTracks.length; i ++){
    //   trackURIs.push(this.playListTracks[i].uri); 
    // }  
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults});
    })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack}/>
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks} 
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  } //end of render
} //end of Component

export default App;
