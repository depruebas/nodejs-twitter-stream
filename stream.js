
var Twit = require('twit');
var mysql = require('mysql');

var T = new Twit({
  consumer_key: '',
  consumer_secret: '',
  access_token: '',
  access_token_secret: '',
  timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
})

var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'twitter_db'
});

// Grabamos en base de datos para que podamos insertar tweets como emojis
var sql = "SET NAMES utf8mb4";
conn.query(sql, function (err, result) {
  if (err) 
    console.log( error);
});

// Parametros de busqueda de tweet en tiempo resal
var stream = T.stream('statuses/filter', { track: ['Linux', '#Linux', 'Ubuntu', '#Ubuntu', 'KDE', '#KDE'], language: 'es' })


//Buscamos los tweet que nos interesan y cuando corresponden con las palabras buscadas los guardamos en base de datos
stream.on('tweet', function (tweet) {
  
  var values  = { 
    screen_name : tweet.user.screen_name,
    twitter_id : tweet.user.id,
    url : tweet.user.url,
    description : tweet.text,
    location : tweet.user.location,
    followers_count : tweet.user.followers_count,
    friends_count : tweet.user.friends_count,
    favourites_count : tweet.user.favourites_count,
    statuses_count : tweet.user.statuses_count,
    tw_created_at :tweet.user.created_at
  };

/*  var sql = "SET NAMES utf8mb4";
  conn.query(sql, function (err, result) {
    if (err) 
      console.log( error);
  });
*/

  var query = conn.query('INSERT INTO linux_users SET ?', values, function (error, results, fields) {
    if (error) 
      console.log( error);
    
    console.log( results);
  });

  console.log( tweet.user.id + ' ' + tweet.user.screen_name + ' ' + tweet.text);
})

