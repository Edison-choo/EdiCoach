const express = require("express");
const path = require("path");

const PORT = 3000;
const STATIC_ASSETS_PATH = path.resolve(`${__dirname}/../../static`);

const app = express();

// Serve front end assets which have been built by webpack
app.use("/static", express.static(STATIC_ASSETS_PATH));

app.get("/", (request, response) => {
	response.sendFile(path.join(__dirname + '/view/index.html'));
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}.\n\nLoad it in your browser at http://localhost:${PORT}`))
