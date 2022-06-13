const app = require('./app');
const connectWithDb = require('./config/db');
require('dotenv').config()
const {PORT} = process.env;

connectWithDb();

app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}`);
})
