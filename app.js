// Imports and handlebars setup
const express = require('express')
const app = express()
const path = require('path')
const compression = require('compression')
const expressHandlebars = require('express-handlebars')
const router = require('./src/routes/router')
const templates = path.join(__dirname, 'src/views')
const port = process.env.PORT || 12345
const hbs = expressHandlebars.create({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, './src/views/layouts'),
  partialsDir: './src/views/components',
  extname: '.hbs',
  helpers: {
    listen: (input) => {
      return console.log(input)
    },
  },
})

// Middleware
app
  .enable('trust proxy')
  .engine('.hbs', hbs.engine)
  .set('view engine', '.hbs')
  .set('views', templates)
  .use(express.static('dist'))
  .use(router)
  .use(compression())
  .use((request, response, next) => {
    if (process.env.NODE_ENV != 'development' && !request.secure) {
      return response.redirect('https://' + request.headers.host + request.url)
    }
    next()
  })

// Launch application
app.listen(port, function () {
  console.log(`App can be opened on http://localhost:${port}`)
})

// critical.generate({
//   inline: true,
//   base: 'dist/',
//   src: '/',
//   target: 'index-critical.html',
//   width: 1300,
//   height: 900,
// })
