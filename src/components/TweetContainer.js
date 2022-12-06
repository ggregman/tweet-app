import React from "react";
import { TweetCard } from "./TweetCard";

export const TweetContainer = ({tweetList, handleDelete}) => {
  return (
    <div className="container">
      {tweetList.map((tweet, index) => {
        return (
          <TweetCard
          handleDelete={()=>handleDelete(index)}
            key={index}
            tweet={tweet}
          />
        );
      })}
    </div>
  );
};
