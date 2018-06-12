require('dotenv').config()

const app = require('./app');
const port = parseInt(process.env.PORT, 10) || 3000;

const server = app.listen(port, function() {
    console.log('Express server listening on port ' + port);
})