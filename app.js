const isgd = require('isgd');
const core = require('@actions/core');
const github = require('@actions/github');

const inputs = {
	url: core.getInput('url'),
}

isgd.shorten(inputs.url, function(res) {
	const url = new URL(res)
	if (!url.protocol.startsWith("http")) {
		process.exitCode = 1;
		console.log(res);
	} else {
		core.setOutput("short_url", url.toString());
	}
});
