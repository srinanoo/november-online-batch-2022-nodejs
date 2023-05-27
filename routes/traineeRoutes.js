const router = require('express').Router();

// Routes (RESTful routes)
router.get("/showAllTrainees", (req, res) => {
    res.send("Show All Trainees - from Routes");
});

router.get("/showTrainee", (req, res) => {
    res.send("Show Specific Trainee - from Routes");
});

router.post("/addTrainee", (req, res) => {
    res.send("Add Trainee - from Routes");
});

router.put("/updateTrainee", (req, res) => {
    res.send("Update Trainee - from Routes");
});

router.delete("/deleteTrainee", (req, res) => {
    res.send("Delete Trainee - from Routes");
});

module.exports = router;