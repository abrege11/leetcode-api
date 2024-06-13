module.exports = (app) => {
    // controllers
    const leetcode = require("../controllers/leetcode.controller.js");

    // create router
    const router = require("express").Router();
    
    // routes
    router.get("/user/:userId", leetcode.getDataByUsername);

    router.get("/user/:userId/publicInfo", leetcode.getPublicUserInfo);

    router.get("/user/:userId/languageStats", leetcode.getLanguageStats);

    router.get("/envInfo", leetcode.envInfo);

    app.use("/api/leetcode", router);
};