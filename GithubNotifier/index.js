const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const request = new XMLHttpRequest();
const user = 'dkblock';
const repo = 'confirmit2019';
const url = `https://api.github.com/repos/${user}/${repo}/commits/master`

request.open("GET", url, false);
request.send();

let data = JSON.parse(request.responseText);

console.log(`Latest commit from ${data.committer.login}:`);
console.log(` Message: "${data.commit.message}"`);
console.log(` URL: ${data.html_url}`);


