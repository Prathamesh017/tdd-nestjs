import { Injectable } from '@nestjs/common';

@Injectable()
export class TweetsService {
    tweets=[];

   public createTweet(tweet:string){
     if(tweet.length<3 || tweet.length>100){
       throw new Error("Invalid Tweet");
     }
     this.tweets.push(tweet);
     return tweet;
   }

   updateTweet(tweet: string, id: number) {
    const tweetToUpdate = this.tweets[id];
    if (!tweetToUpdate) {
      throw new Error(`This Tweet does not exist`);
    }
    this.tweets[id] = tweet;
    return tweet;
  }
  getTweet(id:number){
    const tweet = this.tweets[id];
    if (!tweet) {
      throw new Error(`This Tweet does not exist`);
    }
    return tweet;
  }

  deleteTweet(id: number) {
    const tweetToDelete = this.tweets[id];
    if (!tweetToDelete) {
      throw new Error(`This Tweet does not exist`);
    }
    this.tweets.splice(id, 1);
    return tweetToDelete;
  }

}
