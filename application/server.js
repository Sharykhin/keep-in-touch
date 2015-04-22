var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();
app.use(serveStatic('app'));
app.listen(5000);