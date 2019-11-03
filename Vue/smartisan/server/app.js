var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registRouter = require('./routes/regist');
var getGoodsRouter = require('./routes/getGoods');
var getClassifyRouter = require('./routes/getClassify');
var getHomesRouter = require('./routes/getHomes');
var getDetailRouter = require('./routes/getDetail');

var app = express();

//设置允许跨域
// app.use((req, res, next) => {
//   res.append('Access-Control-Allow-Origin', '*');
//   next()
// });

app.all('*', function (req, res, next) {
  //响应头指定了该响应的资源是否被允许与给定的origin共享。*表示所有域都可以访问，同时可以将*改为指定的url，表示只有指定的url可以访问到资源 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",  " Origin, X-Requested-With, Content-Type, Accept");
    //允许请求资源的方式
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });
 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/goods', getGoodsRouter);
app.use('/classify', getClassifyRouter);
app.use('/login', loginRouter);
app.use('/regist', registRouter);
app.use('/home', getHomesRouter);
app.use('/detail', getDetailRouter);

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
