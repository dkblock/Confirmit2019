const Octokit = require('@octokit/rest');
const octokit = new Octokit({
    auth: '9374c26e0fa95110ff910d7958ed1481f386e649'
  });
const user = 'dkblock';

octokit.repos.listForUser({
    username: user
  }).then(({data}) => {
      console.log(`List of ${user}'s repositories:`)

      for (let i = 0; i < data.length; i++) {
          console.log(`${i+1}. ${data[i].name}`);          
      }
  });
