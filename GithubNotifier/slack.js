function sendMessage(data, repo) {
    const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    const request = new XMLHttpRequest();
    const msg = `Latest commit in ${repo}:\nCommitter: ${data.committer.login}\nMessage: '${data.commit.message}'\nURL: ${data.html_url}`;
    const token = process.env.SLACK_TOKEN;
    const channel = process.env.CHANNEL;
    const url = `https://slack.com/api/chat.postMessage?token=${token}&channel=${channel}&text=${msg}&as_user=true`;

    request.open('POST', url, false);
    request.send();
}

module.exports = sendMessage;