import {config} from '../config/config';
import composeMessage from './messageBuilder';

export function sendMessage(commit, repository) {    
    const message = composeMessage(commit, repository); 
    const userID = config.vk.userID;
    const groupID = config.vk.groupID;
    const token = config.vk.token;
    const randomID = getRandomID();
    const url = `https://api.vk.com/method/messages.send?user_id=${userID}&message=${message}&random_id=${randomID}&group_id=${groupID}&dont_parse_links=1&access_token=${token}&v=5.101`;

    fetch(url);
}

function getRandomID() {
    const min = 0;
    const max = 9999999;

    return Math.floor(Math.random() * (max - min)) + min;
}