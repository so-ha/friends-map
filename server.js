const express = require("express");
const mongoose = require("mongoose");

const passport = require("passport");

const users = require('./server/routes/api/users');

const friendsInfo = require("./server/routes/api/friendsInfo");

const app = express();

app.use(express.urlencoded({extended:false}));

app.use(express.json());

const db = require("./server/config/keys").mongoURI;
//connect to MongoDB
mongoose.connect(db, {useNewUrlParser:true, useUnifiedTopology: true})
.then(()=> console.log("**MongoDB connected successfully**"))
.catch(err => console.log(err));

//passport middleware
app.use(passport.initialize());

//passport config
require('./server/config/passport')(passport);

//routes
app.use("/api/users", users);

app.use("/friends",friendsInfo);

const port = process.env.PORT || 5000; //process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port,()=> console.log(`Server up and running on port ${port} !`));