var express = require('express');
var passport = require('passport');

module.exports = function() {
  this.set('views', __dirname + '/../../app/views');
  this.set('view engine', 'jade');

  this.use(express.logger());
  this.use(express.cookieParser());
  this.use(express.bodyParser());
  this.use(express.session({ secret: 'secret' }));
  this.use(passport.initialize());
  this.use(passport.session());
  this.use(this.router);
  this.use(express.static(__dirname + '/../../public'));

  this.datastore(require('locomotive-mongoose'));
};
