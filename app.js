// jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {

	let today = new Date();
	let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  let day = today.toLocaleDateString("en-US", options);

	// This assumes there is a folder 'views' containing a file 'list.ejs'
	// inside 'list.ejs' there is an ejs marker called 'kindOfDay'
	res.render('list', {
		kindOfDay: day,
    newListItems: items
	});

});

// when a post request is triggered
app.post('/', function(req, res) {
  let item = req.body.newItem;  console.log(item);
  items.push(item);

  res.redirect("/");
});

app.listen(3000, function() {
	console.log('Server started on port 3000');
});
