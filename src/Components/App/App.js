import React, { Component } from 'react';
import './App.css';
import SearchBar from '/SearchBar/SearchBar';
import SearchResults from '/SearchResults/SearchResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: 'Borderline'},
        {artist: 'Madonna'},
        {album: 'The Immaculate Collection'}
      ]
    },
      playListName: 'Workout',
      playListTracks: [
        {name: 'Borderline'},
        {artist: 'Madonna'},
        {album: 'The Immaculate Collection'}
      ] 
  } //end of constructor

  addTrack(track) {
    if(this.props.track.id === this.state.playListTracks) {
      
    }

  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist 
              playListName={this.state.playListName} 
              playListTracks={this.state.playListTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
