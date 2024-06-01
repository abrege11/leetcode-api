

module.exports = (app) => {
    // controllers
    const test = require("../controllers/test.controller.js");

    // create router
    const router = require("express").Router();
    
    // routes
    router.get('/all', test.getAll);

    app.use("/api/leet", router);
};