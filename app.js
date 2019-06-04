var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./middleware/trace');

var app = express();
app.use(bodyParser.json());
//app.use(middleware());

app.get('/', (req, res, next) => {

    middleware();
    res.status(200).json({
        ok: true,
        message: 'Response from the server'
    });

});

app.listen(3000, () => {
    console.log('Express server port 3000: \x1b[32m%s\x1b[0m', 'online');
});