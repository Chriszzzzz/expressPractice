var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/users', function(req, res) {
    console.log("POST DATA \n\n", req.body)

    res.redirect('/')
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})