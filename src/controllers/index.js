import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { pizzas: [{ name: "test" }, { name: "test2" }] });
});

export default router;
