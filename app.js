const express = require('express')
const app = express()
const port = 3000
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/:type', function (req, res) {
  switch (req.params.type) {
      case 'Normal':
        res.render('index', { title: 'Weak to:', 
                message: 'Fighting', title2: 'Resistant to:', 
                message2: 'Ghost'});
          break;
      case 'Fire':
          res.send('Weak to: Water, Ground, Rock');
          break;
      case 'Water':
          res.send('Weak to: Electric, Grass');
          break;
      case 'Electric':
          res.send('Weak to: Ground');
          break;
      case 'Grass':
          res.send('Weak to: Fire, Ice, Poison, Flying, Bug');
          break;
      case 'Ice':
          res.send('Weak to: Fire, Fighting, Rock, Steel');
          break;
      case 'Fighting':
          res.send('Weak to: Flying, Psychic, Fairy');
          break;
      case 'Poison':
          res.send('Weak to: Ground, Psychic');
          break;
      case 'Ground':
          res.send('Weak to: Water, Grass, Ice');
          break;
      case 'Flying':
          res.send('Weak to: Electric, Ice, Rock');
          break;
      case 'Psychic':
          res.send('Weak to: Bug, Ghost, Dark');
          break;
      case 'Bug':
          res.send('Weak to: Fire, Flying, Rock');
          break;
      case 'Rock':
          res.send('Weak to: Water, Grass, Fighting, Ground, Steel');
          break;
      case 'Ghost':
          res.send('Weak to: Ghost, Dark');
          break;
      case 'Dragon':
          res.send('Weak to: Ice, Dragon, Fairy');
          break;
      case 'Dark':
          res.send('Weak to: Fighting, Bug, Fairy');
          break;
      case 'Steel':
          res.send('Weak to: Fire, Fighting, Ground');
          break;
      case 'Fairy':
          res.send('Weak to: Poison, Steel');
          break;
      default:
          res.send('Try typing water');
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


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
