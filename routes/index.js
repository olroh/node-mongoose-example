const express = require("express");
const path = require("path");
const router = express.Router();
const homeController = require("../controllers/home");

router.get("/", homeController.getHomePage);

router.post("/cats", (req, res, next) => {
});

module.exports = router;