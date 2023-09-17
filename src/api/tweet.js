import { TWEETS } from '@/utils/constants'
import { v4 as uuidv4 } from 'uuid'
import { remove } from 'lodash'

export const saveTweetApi = (tweet, username) => {
    const tweets = getTweetsApi()

    if (tweets.length == 0) {
        const tweeet = [
            {
                id: uuidv4(),
                tweet,
                username,
                createdAt: new Date()
            }
        ]
        localStorage.setItem(TWEETS, JSON.stringify(tweeet))
    } else {
        tweets.push({
            id: uuidv4(),
            tweet,
            username,
            createdAt: new Date()
        })
        localStorage.setItem(TWEETS, JSON.stringify(tweets))
    }



}


export const getTweetsApi = () => {
    const tweets = localStorage.getItem(TWEETS);
    if (tweets) {
        return JSON.parse(tweets);
    } else {
        return [];
    }

}


export const deleteTweetApi = (idTweet) => {
    const tweets = getTweetsApi()

    remove(tweets, function (tweet) {
        return tweet.id === idTweet//este sera el tweet que elimine
    })
    localStorage.setItem(TWEETS, JSON.stringify(tweets))

}