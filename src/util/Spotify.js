const clientId = '899b1802c83949b4bd1811a245095ee0';
const uriRedirect = 'http://localhost:3000/';
let accessToken = '';


// Module that interacts with the Spotify API
let Spotify = {

  getAccessToken() {
    if(accessToken) {
      return accessToken;
    } 

    const tokenFound = window.location.href.match(/access_token=([^&]*)/);
    const expireTime = window.location.href.match(/expires_in=([^&]*)/);

    if(tokenFound && expireTime) {
      accessToken = tokenFound[1];
      
      const tokenExpires = Number(expireTime[1]); 

      window.setTimeout(() => accessToken = '', tokenExpires * 1000);
      window.history.pushState('Access Token', null, '/');

      return accessToken;

    } else {
      return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${uriRedirect}`;
    }

  }, // end of getAccessToken method

  search(userSearchTerm) {
    fetch(`https://api.spotify.com/v1/search?type=track&q=${userSearchTerm}`, 
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }  
      }).then(response => {
          return response.json();  
        })
        .then(jsonResponse => {
          if(jsonResponse.tracks) {
            return jsonResponse.tracks.map(track => ({
              ID: track.id,
              Name: track.name,
              Artist: track.artists[0].name,
              Album: track.album.name,
              URI: track.uri 
            }));
          }
        })
  }, //end or search method

  savePlaylist(playlistName, arrayTrackURIs) {
    // let access_token;
    let headers = {
      Authorization: 'Bearer ' + this.accessToken
    }
    let userId;
    let playlistID;

    if(!playlistName || !arrayTrackURIs) {
      return;
    } else {
      return fetch(
        'https://api.spotify.com/v1/me',
          {
            headers: headers
          }
        )
        .then(response => {
          return response.json();
        })
        .then(jsonResponse => {
          userId = jsonResponse.id;
          return fetch(
            `https://api.spotify.com/v1/users/${userId}/playlists`,
            {
              headers: headers,
              method: 'POST',
              body: JSON.stringify({ name: playlistName })
            }
          )
        })
        .then(response => {
          return response.json();
        })
        .then(jsonResponse => {
          playlistID = jsonResponse.id;
          return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistID}/tracks`, 
            {
              headers: headers,
              method: 'POST',
              body: JSON.stringify({ uris: arrayTrackURIs })
            }
          )
        })
    }
  }// end of savePlaylist method
} // end of Spotify module

export default Spotify;

