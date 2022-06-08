const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
	res.send("<h1>Home page</h1><a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
	const newProducts = products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});
	res.send(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
	const { productID } = req.params;
	const singleProduct = products.find(
		(product) => product.id === Number(productID)
	);
	if (!singleProduct) {
		res.status(404).send("Product does not exist");
	}
	res.send(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
	const { search, limit } = req.query;
	let filteredProduct = [...products];
	if (search) {
		filteredProduct = filteredProduct.filter((product) =>
			product.name.includes(search)
		);
	}

	if (limit) {
		filteredProduct = filteredProduct.slice(0, Number(limit));
	}

	if (filteredProduct.length < 1) {
		return res.status(200).send("No products matched your searchs");
	}
	res.status(200).json(filteredProduct);
});

app.listen(5000, () => {
	console.log("Sever listening on port 5000...");
});
