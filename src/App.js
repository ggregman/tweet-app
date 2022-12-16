import { useEffect, useState } from "react";
import "./App.css";
import { TweetContainer } from "./components/TweetContainer";
import { getTweetList } from "./api/getTweetList";
import { DateTime } from "luxon";

function App() {
  const [tweetList, setTweetList] = useState();

  useEffect(() => {
    setTweetList(getTweetList());
  }, []);

  const handleAddTweet = () => {
    const tempTweet = [...tweetList];
    tempTweet.push({
      id: Math.floor(Math.random() * 1000),
      user: {
        avatarUrl:
          "https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/anonymous-512.png",
        surname: "User",
        name: "Temporary",
        username: "temporaryuser",
      },
      content: {
        imgUrl:
          "https://www.gamesoul.it/wp-content/uploads/2020/01/kobe-bryant-nba-2k17.jpg",
        text: "Learning how to extract components into reusable pieces while gazing at the sunset. What could go wrong?",
        dateTime: DateTime.now()
          .setLocale("en")
          .toFormat("hh:mm a · yyyy MMM, dd"),
        likes: Math.floor(Math.random() * 100),
      },
    });
    setTweetList(tempTweet);
  };

  const handleDelete = (index) => {
    const tempTweet = [...tweetList];
    tempTweet.splice(index, 1);
    setTweetList(tempTweet);
  };

  const handleAddLikes = (id) => {
    const tempTweet = [...tweetList];
    tempTweet.map((tweet) =>
      tweet.id === id ? { ...tweet, likes: tweet.content.likes++ } : tweet
    );
    setTweetList(tempTweet);
  };

  return (
    <div className="App">
      <h1 className="title">Today's Tweets</h1>
      <button onClick={handleAddTweet}>Add Tweet</button>
      {tweetList && tweetList.length > 0 ? (
        <TweetContainer
          tweetList={tweetList}
          handleDelete={handleDelete}
          handleAddLikes={handleAddLikes}
        />
      ) : (
        <h2 style={{ color: "white" }}>No tweets</h2>
      )}
    </div>
  );
}

export default App;
