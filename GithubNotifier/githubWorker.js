export default function getInfoOfLatestCommit(user, repo) {
    const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    const request = new XMLHttpRequest();
    const url = `https://api.github.com/repos/${user}/${repo}/commits/master`

    request.open('GET', url, false);
    request.send();

    return JSON.parse(request.responseText);
}