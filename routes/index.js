const router = require("express").Router();
const personRoutes = require("./api/persons");

router.use("/api/user", personRoutes);

module.exports = router;