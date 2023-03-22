const express = require('express');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

const app = express();
app.get('/', (req, res)=> res.json({msg :"Hello from Browser"}));

connectDB();

//Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.listen(PORT , ()=> console.log("Server Started"));