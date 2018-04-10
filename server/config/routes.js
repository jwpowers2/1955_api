
let PersonController = require("../controllers/PersonController.js");

module.exports = (app)=>{

  app.get("/",PersonController.all);
  app.get("/new/:name",PersonController.new_person);
  app.get("/remove/:name",PersonController.remove_person);
  app.get("/:name",PersonController.person);

}
