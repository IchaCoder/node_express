const getText = (path) => {
	return new Promise((resolve, reject) => {
		readFile(path, "utf8", (err, data) => {
			if (err) {
				return reject(err);
			} else {
				return resolve(data);
			}
		});
	});
};

getText("./content/subfolder/second.txt")
	.then((result) => console.log(result))
	.catch((err) => console.log(err));
