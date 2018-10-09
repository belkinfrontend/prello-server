//========= dependencies
const express = require('express'),
      app = express(),
      port = process.env.PORT || 8080,
      expressLayouts = require('express-ejs-layouts');

//========= configure

//========= look for static assets
app.use(express.static(__dirname + '/public'));

//========= set ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);

//========= routes
app.use(require('./app/routes'));


//========= start server
app.listen(port, () => {
   console.log(`App listening on http://localhost:${port}`);
});