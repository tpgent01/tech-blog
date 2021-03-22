const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: '53cr3t50m3th1ng',
    cookie: {
        maxAge: 300 * 1000
    },
    resave: false,

    rolling: true,
    saveUninitialized: true,
    store: new SequelizeStore({
        db:sequelize
    })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});

// Set 'force:true' to re-create the tables and association changes.