/*
  Pruebas de strweaming de twitter
*/
var Twit = require('twit');
var mysql = require('mysql');

var T = new Twit({
  consumer_key: '',
  consumer_secret: '',
  access_token: '',
  access_token_secret: '',
  timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
})



var stream = T.stream('statuses/filter', { track: ['Linux', 'Microsft', language: 'en' })


stream.on('tweet', function (tweet) {

  console.log( tweet.user.id + ' ' + tweet.user.screen_name + ' ' + tweet.text);

})