// Configuration
const config = {
	enableBabel: true, // change to false to disable babel
	pretty: true // change to true if you want to produce human-readable output
};

const pug = require('pug'),
	sass = require("sass"),
	fs = require("fs"),
	data = fs.readFileSync("src/data.json", "utf8");

const options = {
	data: JSON.parse(data),
	pretty: config.pretty,
	translation: JSON.parse(fs.readFileSync("src/translation.json", "utf8")),
	workers: "\n\"use strict\";\n" +
		`const data = ${data.trim()};\n` +
		`${fs.readFileSync("src/sheetworkers.js", "utf8").trim()}\n`
};

const printOutput = (() => {
	let calledBefore = false,
		t0 = process.hrtime();
	return () => {
		if (!calledBefore) calledBefore = true;
		else {
			console.log(`Sheet build completed. Time taken: ${
				(process.hrtime(t0)[0] + (process.hrtime(t0)[1] / 1e9)).toFixed(3)
			} s.`);
		}
	};
})();

// Handle presence/absence of babel
if (config.enableBabel && !config.pretty) {
	try {
		const babel = require("jstransformer")(require("jstransformer-babel"));
		options.workers = babel.render(options.workers, {presets: ["minify"]}).body;
	} catch (err) {
		console.log("jstransformer or jstransformer-babel did not execute successfully. Proceeding without minifying sheet workers. Error message was:");
		console.log(err);
	}
}

// Build CSS file
sass.render({
	file: "src/fortunaRPG.scss",
	outputStyle: config.pretty ? "expanded" : "compressed",
}, (error, result) => {
	if (!error) {
		const cssOutput = result.css.toString("utf8").replace(/^@charset "UTF-8";\s*/, "").replace(/^\uFEFF/, "").replace(/\n\n/g, "\n");
		fs.writeFile("fortunaRPG.css", cssOutput, printOutput);
	} else {
		console.log(`An error occured in the CSS build.\n${error.line}:${error.column} ${error.message}.`);
	}
});

// Build HTML
const htmlOutput = pug.renderFile("src/fortunaRPG.pug", options).trim().replace(/\n+/g, "\n");
fs.writeFile("fortunaRPG.html", `${htmlOutput}\n`, printOutput);

console.log("complete");