import {config} from '../config/config';
import composeMessage from './messageBuilder';

export function sendMessage(commit, repository) {    
    const message = composeMessage(commit, repository); 
    const token = config.slack.token;
    const channel = config.slack.channel;
    const url = `https://slack.com/api/chat.postMessage`;
    const data = {
        channel: channel,
        blocks: [ 
            message,
            {
                "type": "divider"
            } 
        ],
        as_user: true
    };
    
    fetch(url, {
        method: 'post',
        body: JSON.stringify(data),
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
}