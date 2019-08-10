export default function composeMessage(commit, repository) {    
    const message = `New commit in repository ${repository}\nCommitter: ${commit.committer.login}\nMessage: '${commit.commit.message}'\nLink: ${commit.html_url}\n`            
    
    return message;
}