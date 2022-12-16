import React from "react";
import { TweetCard } from "./TweetCard";

export const TweetContainer = ({tweetList, handleDelete, handleAddLikes}) => {
  return (
    <div className="container">
      {tweetList.map((tweet, index) => {
        return (
          <TweetCard
          handleDelete={()=>handleDelete(index)}
          handleAddLikes={() => handleAddLikes(tweet.id)}
            key={index}
            tweet={tweet}
          />
        );
      })}
    </div>
  );
};
