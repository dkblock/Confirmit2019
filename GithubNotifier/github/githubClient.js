import {config} from '../config/config';

export default async function getLatestCommit(repository) {      
    const user = config.github.user;
    const clientID = config.github.clientID;
    const clientSecret = config.github.clientSecret;
    const url = `https://api.github.com/repos/${user}/${repository}/commits/master?client_id=${clientID}&&client_secret=${clientSecret}`;
    const response = await fetch(url);
    const commit = await response.json();

    return commit;
}