var express = require('express');
var app = express();
app.get('/html2pdf/lib/test', function (req, res) {
	res.send('Hello from test! [express sample]');
});
app.listen(process.env.PORT);