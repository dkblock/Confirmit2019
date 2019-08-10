# Confirmit2019

## GithubNotifier

### Prepare for using
You need to create **config.json** file in **GithubNotifier/config** folder with the following settings:

**github:user** - user whose repositories will be checked  
**github:repositories** - list of repositories to check latest commits  
**github:clientID** - client ID of your OAuth App. Required to send more requests to github  
**github:clientSecret** - client secret of your OAuth App. Required to send more requests to github. Read the [documentation](https://developer.github.com/apps/building-oauth-apps/) to learn how to get it  
**slack:token** - token of the slack bot that will send notifications. Read the [documentation](https://api.slack.com/bot-users) to learn how to get it and configure your bot  
**slack:channel** - slack сhannel where notifications will be sent    
**vk:userID** - id of vk user to whom notifications will be sent  
**vk:groupID** - id of vk group/public that will send notifications  
**vk:token** - access token of the group that will send notifications. Read the [documentation](https://vk.com/dev/bots_docs) to learn how to get it

For example:
```json
{
    "github": {
        "user": "dkblock",
        "repositories": [
            "GithubNotifier", 
            "Personal",
            "YarTransport",
            "TreesComparer",
            "Confirmit2019"
        ],
        "clientID": "55cec4b38cf73eb82c4e",
        "clientSecret": "0282438687638c2946f11498c56106f670542445"
    },
    "slack": {
        "token": "xoxb-699737002945-696024412450-6he11On1c3t8k3nRuqzwHfQXF8H4Xgx",
        "channel": "CLRKPCL0U"
    },
    "vk": {
        "userID": "217408987",
        "groupID": "184182874",
        "token": "a1cdf3d101160162e2a6d98fc20397n1c3t0k3nde428f20a267e80e70f4b1818aaa8800555e555713546ba562"
    }
}
```
