const { Router } = require("express");
const { Url } = require("../db");
const crypto = require("crypto");

const router = Router();

router.post("/", async (req, res) => {
  const { url } = req.body;

  if (!url) return res.json({ error: "Error: Not a valid url" });

  let cryptoID = async () => {
    let newID = crypto.randomBytes(2).toString("hex");

    let found = await Url.findByPk(newID);

    if (found) {
      cryptoID();
    } else {
      return newID;
    }
  };

  const newUrl = await Url.create({ url, id: await cryptoID() });

  let ID = newUrl.id;

  return res.json({ id: ID });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  let found = await Url.findByPk(id);

  if (found) {
    return res.json({ url: found.url });
  } else {
    return res.json({ error: "Error: Not a valid url" });
  }
});

module.exports = router;
