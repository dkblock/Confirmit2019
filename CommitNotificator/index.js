const Octokit = require('@octokit/rest');
const octokit = new Octokit({
    auth: '05d03cc94c69fd282c377d57f50dbdc5f81d5574 '
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
