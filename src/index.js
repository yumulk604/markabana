const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));

// Route for the home page
app.get('/', (req, res) => {
  res.render('markabana');
});

// Route for the admin login page
app.get('/admin/login', (req, res) => {
  res.render('admin_login', { error: null });
});

app.post('/admin/login', (req, res) => {
    const { Email, Password } = req.body;
    if (Email === 'admin@example.com' && Password === 'password') {
        res.redirect('/admin/dashboard');
    } else {
        res.render('admin_login', { error: 'Invalid email or password' });
    }
});

app.get('/admin/dashboard', (req, res) => {
    res.render('admin_dashboard');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
