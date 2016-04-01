var cfg = require('./config.json');
var tw = require('node-tweet-stream')(cfg);
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io')(server);
	
app.set('view engine','ejs');

tw.track("xfactordk");

app.get('/',function(req,res){
	res.render('index');
});

tw.on('tweet',(tweet)=>{
	io.emit('chat message 2',tweet.text);
});

server.listen(8080);