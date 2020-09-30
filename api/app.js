var createError = require('http-errors');
var express = require('express');
var path = require('path');

var logger = require('morgan');
var signup1 = require('./routes/signup1')
var usersRouter = require('./routes/users');
var updocs = require('./routes/updocs')
var cors= require('cors')
var app = express();

// view engine setup



app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/',express.static(path.join(__dirname, 'public')));


app.use('/', usersRouter);
app.use("/signup1", signup1);
app.use('/updocs',updocs);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
