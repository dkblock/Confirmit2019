require('dotenv').config();

const user = 'dkblock';
const repo = 'Confirmit2019';
const getInfoOfLatestCommit = require('./github.js');
const sendMessage = require('./slack.js');

const data = getInfoOfLatestCommit(user, repo);
sendMessage(data, repo);
