import React from "react";
import { TweetCard } from "./TweetCard";

export const TweetContainer = ({tweetList}) => {
  return (
    <div className="container">
      {tweetList.map((tweet, index) => {
        return (
          <TweetCard
            key={index}
            tweet={tweet}
          />
        );
      })}
    </div>
  );
};
