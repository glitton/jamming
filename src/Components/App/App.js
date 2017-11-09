import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist  from '../Playlist/Playlist';

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
    let tracks = this.state.playListTracks
    if(!track.includes(track)) {
      tracks.push(track);
      this.setState({
        playListTracks: tracks
      }) 
    }
  } // end of addTrack

  removeTrack(track) {
    let tracks = this.state.playListTracks
    if(track.includes(track)) {
      delete track; //not sure about this
      this.setState({
        playListTracks: tracks
      }) 

  }// end of removeTrack

  //step 57, ask for a code review
  updatePlaylistName(name) {
    this.setState({
      name: name
    })
  }

  savePlaylist() {
    //step 63, need help
  }

  search(term) {
    console.log(term);
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
