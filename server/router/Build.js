const express = require("express");
const router = express.Router();

const {postNewBuild} = require("../controllers/Build");
const {UpdateBuild} = require("../controllers/Build");
const {deleteBuild} = require("../controllers/Build");
const {getBuild} = require("../controllers/Build");

// get all projects
router.post('/', postNewBuild )
router.patch('/:id',UpdateBuild )
router.delete('/:id', deleteBuild)
router.get("/", getBuild);

module.exports = router;
