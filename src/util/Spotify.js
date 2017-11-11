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
      const uriRedirect = 
      `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${uriRedirect}`;
    }

  }, // end of getAccessToken method

  search(userSearchTerm) {
    return new Promise()
  }

}

export default Spotify;

