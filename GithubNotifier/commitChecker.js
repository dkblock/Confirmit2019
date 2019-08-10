import getLatestCommit from './github/githubClient';
import {getLatestSavedCommit, saveLatestCommit} from './fileManager/fileManager';
import {sendMessage as sendMessageToSlack} from './slack/slackClient';
import {sendMessage as sendMessageToVK} from './vk/vkClient';

export default async function checkLatestCommit(repository) {
    const commit = await getLatestCommit(repository);

    if(isLatestPushedCommitNew(commit, repository)) {           
        sendMessageToSlack(commit, repository);
        sendMessageToVK(commit, repository);
        saveLatestCommit(commit, repository);
    }
}

function isLatestPushedCommitNew(commit, repository) {      
    const latestSavedCommit = getLatestSavedCommit(repository);

    if(latestSavedCommit !== commit.sha) {
        return true;
    }

    return false;
}