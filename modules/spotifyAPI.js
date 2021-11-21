const {client_id, client_secret, redirect_url} = require('./credentials');
var SpotifyWebApi = require('spotify-web-api-node');

const scopes = ['user-read-private', 'user-read-email']
const spotifyApi = new SpotifyWebApi({
  clientId: client_id,
  clientSecret: client_secret,
  redirectUri: redirect_url
});

spotifyApi.setAccessToken('<your_access_token>');