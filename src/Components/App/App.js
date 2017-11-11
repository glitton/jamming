import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist  from '../Playlist/Playlist';
import Spotify from '../src/util/Spotify';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: 'Borderline'},
        {artist: 'Madonna'},
        {album: 'The Immaculate Collection'}
      ],
    
      playListName: 'Workout',
      playListTracks: [
        {name: 'Borderline'},
        {artist: 'Madonna'},
        {album: 'The Immaculate Collection'}
      ]
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
    let tracks = this.state.playListTracks
    // check if track exists
    if(!track.includes(track)) {
      //if not, add it to the tracks object
      tracks.push(track);
      this.setState({
        playListTracks: tracks
      }) 
    }
  } // end of addTrack

  removeTrack(track) {
    // get list of curret tracks
    let tracks = this.state.playListTracks
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

  //step 57, ask for a code review
  updatePlaylistName(name) {
    this.setState({
      name: name
    })
  }

  savePlaylist() {
    let trackURIs = [];
    for(let i= 0; i < this.playListTracks.length; i ++){
      trackURIs.push(this.playListTracks[i].uri); 
    }  
  }

  search(term) {
    Spotify.search(term).then(tracks => {
      this.setState({tracks: tracks});
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
              playListName={this.state.playListName} 
              playListTracks={this.state.playListTracks} 
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
