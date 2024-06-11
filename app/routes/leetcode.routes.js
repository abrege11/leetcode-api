module.exports = (app) => {
    // controllers
    const leetcode = require("../controllers/leetcode.controller.js");

    // create router
    const router = require("express").Router();
    
    // routes
    router.get("/user/:userId", leetcode.getDataByUsername);

    router.get("/questionOfDay", leetcode.getQuestionOfDay)

    app.use("/api/leetcode", router);
};