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

  } //end of constructor

  addTrack(track) {
    let tracks = this.state.playListTracks
    if(!track.includes(track)) {
      tracks.push(track);
      this.setState({playListTracks: tracks})
    }

  } // end of addTrack

  removeTrack(track) {

  }// end of removeTrack

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack}/>
            <Playlist 
              playListName={this.state.playListName} 
              playListTracks={this.state.playListTracks} 
              onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  } //end of render
} //end of Component

export default App;
