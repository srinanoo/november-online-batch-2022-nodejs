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

// // Routes for retrieving data from querystring / form data / json
// app.get("/getMethod", (req, res) => {
//     res.send(req.query); // querystring
// });

// app.post("/postMethod", (req, res) => {
//     res.send(req.body); // form body
// });

// app.post("/jsonMethod", (req, res) => {
//     res.send(req.body); // form body in json
// });

// // Route for query params
// app.get("/queryParams/:id", (req, res) => {
//     res.send(req.params.id); // url query params
// });

// // Routes (RESTful routes) http://localhost:5000/showAllTrainees
// app.get("/showAllTrainees", (req, res) => {
//     res.send("Show All Trainees");
// });

// http://localhost:5000/showTrainee
// app.get("/showTrainee", (req, res) => {
//     res.send("Show Specific Trainee");
// });

// http://localhost:5000/addTrainee
// app.post("/addTrainee", (req, res) => {
//     res.send("Add Trainee");
// });

// http://localhost:5000/updateTrainee
// app.put("/updateTrainee", (req, res) => {
//     res.send("Update Trainee");
// });

// http://localhost:5000/deleteTrainee
// app.delete("/deleteTrainee", (req, res) => {
//     res.send("Delete Trainee");
// });

// Routes (Thread Pool)
// http://localhost:5000/trainees/
const TraineesRoute = require('./routes/traineeRoutes');
app.use("/trainees", TraineesRoute);

const BatchRoute = require('./routes/batchRoutes');
app.use("/batches", BatchRoute);

const ClassesRoute = require('./routes/classRoutes');
app.use("/classes", ClassesRoute);

// Default Unhandled Request
app.use("/*", (req, res) => {
    res.send("Invalid Route!!!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});