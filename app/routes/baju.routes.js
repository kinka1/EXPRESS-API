module.exports = app => {
    const baju = require("../controllers/baju.controller")
    const router = require("express").Router();

    router.get("/", baju.findAll); 
    router.get("/:id", baju.show); 
    router.post("/", baju.create); 
    router.put("/:id", baju.update); 
    router.delete("/:id", baju.delete);
    
    app.use('/baju', router);
}