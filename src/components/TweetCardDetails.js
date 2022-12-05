import React from "react";

export const TweetCardDetails = ({ tweet }) => {
  return (
    <div className="tweetDetails">
      <div className="card_header">
        <img className="avatar" src={tweet.user.avatarUrl} />
        <div className="tweetAuthor">
          <h3 style={{ margin: 0 }}>
            {tweet.user.name} {tweet.user.surname}
          </h3>
          <h4 className="username">@{tweet.user.username}</h4>
        </div>
      </div>
      <p>{tweet.text}</p>
      <p className="dateTime">
        {tweet.tweetTime} - {tweet.tweetDate}
      </p>
    </div>
  );
};
