import getInfoOfLatestCommit from './githubWorker';
import sendMessage from './slackWorker';

const user = process.env.GIT_USER;
const repo = process.env.GIT_REPO;
const data = getInfoOfLatestCommit(user, repo);

sendMessage(data);