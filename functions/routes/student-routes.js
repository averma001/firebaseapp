/* eslint-disable */
const express = require("express");
const {
  addStudent,
  getallstudent,
  updatestudent,
  deletestudent,
} = require("../controllers/studentctrl");

const router = express.Router();

router.post("/add", addStudent);
router.get("/view", getallstudent);
router.put("/update/:id", updatestudent);
router.delete("/delete/:id", deletestudent);
module.exports = {
  routes: router,
};
