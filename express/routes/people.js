const express = require("express");
const app = express();
const router = express.Router();
const {
	getPeople,
	createPerson,
	createPersonPostman,
	updatePerson,
	deletePerson,
} = require("../controllers/people");

const { people } = require("../data");

router.get("/", getPeople);

router.post("/", createPerson);

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

module.exports = router;
