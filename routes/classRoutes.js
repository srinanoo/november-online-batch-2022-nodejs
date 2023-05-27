const router = require('express').Router();

// Routes (RESTful routes)
router.get("/showAllClasses", (req, res) => {
    res.send("Show All Classes - from Routes");
});

router.get("/showClass", (req, res) => {
    res.send("Show Specific Class - from Routes");
});

router.post("/addClass", (req, res) => {
    res.send("Add Class - from Routes");
});

router.put("/updateClass", (req, res) => {
    res.send("Update Class - from Routes");
});

router.delete("/deleteClass", (req, res) => {
    res.send("Delete Class - from Routes");
});

module.exports = router;