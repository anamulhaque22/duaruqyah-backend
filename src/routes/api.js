const express = require("express");
const {
  getAllDuaCateogry,
  getAllDua,
  getAllSubCategory,
} = require("../controller/duaController");

const router = express.Router();

router.get("/category/:lang", getAllDuaCateogry);
router.get("/subcategory/:cat_id/:lang", getAllSubCategory);
router.get("/dua/:cat_id/:lang", getAllDua);

module.exports = router;
