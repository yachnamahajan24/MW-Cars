const express      = require('express');
const path         = require('path');
const logger       = require('morgan');
const bodyParser   = require('body-parser');
const createError  = require('http-errors');
const cookieParser = require('cookie-parser');
const apiRouter    = require('./APP_API/routes/cars');

const app = express();
require('./APP_API/models/db');

app.all('/*',function (req,res,next) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","*");
  res.header("Access-Control-Allow-Methods","*");
  next();

});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api', apiRouter);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'APP_PUBLIC','car-public', 'dist','car-public')));



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
