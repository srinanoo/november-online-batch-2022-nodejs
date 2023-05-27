const express = require('express');
const cors = require('cors');

const port = 5000;

// use "app" variable for express
const app = express();

// express middleware will be using "cors"
app.use(cors());

// to retrieve data from client using form/req body
app.use(express.urlencoded({extended: false})); // querystring library (internally uses library "body-parser") | qs library
// to retrieve data from client using form/req body (JSON)
app.use(express.json());

// Route Modules
const traineeModule = require('./traineeModule');
// Routes (RESTful routes)
app.get("/showAllTrainees", (req, res) => {
    res.send("Show All Trainees");
});

app.get("/showTrainee", (req, res) => {
    res.send("Show Specific Trainee");
});

app.post("/addTrainee", (req, res) => {
    res.send("Add Trainee");
});

app.put("/updateTrainee", (req, res) => {
    res.send("Update Trainee");
});

app.delete("/deleteTrainee", (req, res) => {
    res.send("Delete Trainee");
});

// Default Unhandled Request
app.use("/*", (req, res) => {
    res.send("Invalid Route!!!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});