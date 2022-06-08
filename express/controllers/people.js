const { people } = require("../data");

const getPeople = (req, res) => {
	res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res.status(400).send({ success: false, msg: "Please provide name" });
	}
	res.status(201).json({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res.status(400).send({ success: false, msg: "Please provide name" });
	}
	res.status(201).json({ success: true, data: [...people, name] });
};

const updatePerson = (req, res) => {
	const { id } = req.params;
	const { name } = req.body;

	const person = people.find((person) => person.id === Number(id));
	if (!person) {
		return res.status(404).send("Cant find person with id " + id);
	}

	const newPeople = people.map((person) => {
		if (person.id === Number(id)) {
			person.name = name;
		}
		return person;
	});

	res.status(200).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
	const { id } = req.params;

	const toDelete = people.find((person) => person.id === Number(id));

	if (!toDelete) {
		res
			.status(404)
			.json({ success: false, msg: `Cant find item with index ${id}` });
	}

	const filteredPeople = people.filter((person) => person.id !== Number(id));

	return res.status(200).json({ success: true, data: filteredPeople });
};

module.exports = {
	getPeople,
	createPerson,
	createPersonPostman,
	updatePerson,
	deletePerson,
};
