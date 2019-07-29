export default function sendMessage(data) {
    const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    const request = new XMLHttpRequest();
    const repo = process.env.GIT_REPO;
    const token = process.env.SLACK_TOKEN;
    const channel = process.env.SLACK_CHANNEL;
    const text = `Latest commit in ${repo}:\nCommitter: ${data.committer.login}\nMessage: '${data.commit.message}'\nLink: ${data.html_url}`;
    const url = `https://slack.com/api/chat.postMessage?token=${token}&channel=${channel}&text=${text}&as_user=true`;

    request.open('POST', url, false);
    request.send();
}