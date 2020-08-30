import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterFollowButton,
  TwitterOnAirButton,
  TwitterShareButton,
  TwitterTimelineEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className=" widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>{" "}
        <TwitterFollowButton screenName={"1711shashankk"} />
        <TwitterTweetEmbed tweetId={"1299430805668638720"} />
        <TwitterTimelineEmbed
          className="widgets__profile"
          sourceType="profile"
          screenName="1711shashankk"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
