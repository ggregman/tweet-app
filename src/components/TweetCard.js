import React from "react";
import { TweetCardDetails } from "./TweetCardDetails";

export const TweetCard = ({ tweet }) => {
  return (
    <div className="tweetCard">
      <img width="100%" src={tweet.content.imgUrl} alt={tweet.user.username} />
      <TweetCardDetails tweet={tweet} />
    </div>
  );
};
