const router = require('express').Router();

// Routes (RESTful routes)
router.get("/showAllBatches", (req, res) => {
    res.send("Show All Batches - from Routes");
});

router.get("/showBatch", (req, res) => {
    res.send("Show Specific Batch - from Routes");
});

router.post("/addBatch", (req, res) => {
    res.send("Add Batch - from Routes");
});

router.put("/updateBatch", (req, res) => {
    res.send("Update Batch - from Routes");
});

router.delete("/deleteBatch", (req, res) => {
    res.send("Delete Batch - from Routes");
});

module.exports = router;