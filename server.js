const express = require('express')
const routes = require('./controllers/')
const sequelize = require('./config/connection')
const path = require('path')
const helpers = require('./utils/helpers');

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// connect server to public front end assets
app.use(express.static(path.join(__dirname, 'public')))

// connect session
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

// connect handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on routes
app.use(routes)

// start server & listen on port
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`))
})