// jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

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
	res.render("list", {
		listTitle: day,
    newListItems: items
	});

});

// when a post request is triggered
app.post('/', function(req, res) {
  console.log(req.body);
  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  }
  else {
    items.push(item);
    res.redirect("/");
  }
});

// another route '/work' for Work List
app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.get("/about", function(req, res) {
  res.render("about");
});

/* this does not suit as we the post request is directed to "/" home route */
// app.post("/work", function(req, res) {
//   let item = req.body.newItem;
//   workItems.push(item);
//   app.redirect("/work");
// });




app.listen(3000, function() {
	console.log('Server started on port 3000');
});
