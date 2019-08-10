import checkLatestCommit from './commitChecker';
import {config} from './config/config';

const repositories = config.github.repositories;
const interval = config.interval;

repositories.forEach(repository => {
    setInterval(checkLatestCommit, interval, repository);
});