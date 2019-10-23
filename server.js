const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware
// For url-encoded requests
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
// For json requests
app.use(bodyParser.json());

// DB Config
const dbURI = require("./config/keys").mongoURI;

// Connect to MongoDB instance
mongoose
	.connect(dbURI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true
	})
	.then(() => console.log("MongoDB connected!"))
	.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Routes
// For api/users route use users.js
app.use("/api/users", users);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
// Start listening on port
app.listen(port, () => console.log(`Server running on port ${port}!`));
