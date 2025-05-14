const express = require('express');
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');
const webRouter = require('./routes/web');
const apiRouter = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(ejsLayouts);

// Routes
app.use('/', webRouter);
app.use('/api', apiRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});