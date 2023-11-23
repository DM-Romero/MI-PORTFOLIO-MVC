const express = require('express');
const app = express ();
const mainRouter= require('./routers/main.routes')
const PORT = 3000;
const path = require('path')


app.use(express.static(path.join(__dirname,'public')));

app.use('/', mainRouter );

app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`));