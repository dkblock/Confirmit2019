export default function composeMessage(commit, repository) {    
    const message = {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `*New commit in repository ${repository}* :wink:\n>Committer: ${commit.committer.login}\n>Message: '${commit.commit.message}'\n`
                },
                "accessory": {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "GET IT",
                    },
                    "url": `${commit.html_url}`,
                    "style": "primary"
                }
    }    
    
    return message;
}