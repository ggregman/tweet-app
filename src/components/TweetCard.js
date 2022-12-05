import React from "react";
import { TweetCardDetails } from "./TweetCardDetails";

export const TweetCard = ({tweet}) => {
  return (
    <div className="tweetCard">
      <img width="100%" src={tweet.imgUrl} />
      <TweetCardDetails tweet={tweet}  />
    </div>
  );
};
