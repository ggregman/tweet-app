import React from "react";
import { TweetCard } from "./TweetCard";

export const TweetContainer = ({tweetList, handleDeleteTweet, handleAddLikes}) => {
  return (
    <div className="container">
      {tweetList.map((tweet, index) => {
        return (
          <TweetCard
          handleDeleteTweet={()=>handleDeleteTweet(index)}
          handleAddLikes={() => handleAddLikes(tweet.id)}
            key={index}
            tweet={tweet}
          />
        );
      })}
    </div>
  );
};
