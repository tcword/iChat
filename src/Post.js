import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { ExpandMoreOutlined } from "@material-ui/icons";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar className="post_avatar" src={profilePic} />
        <div className="post_topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post_bottom">
        <p>{message}</p>
      </div>

      <div className="post_image">
        <img src={image} alt="" />
      </div>

      <div className="post_options">
        <div className="post_option">
          <ThumbIcon style={{ color: "lightgray" }} />
          <p>Like</p>
        </div>
        <div className="post_option">
          <ChatBubbleOutlineIcon style={{ color: "lightgray" }} />
          <p>Comment</p>
        </div>
        <div className="post_option">
          <NearMeIcon style={{ color: "lightgray" }} />
          <p>Share</p>
        </div>
        <div className="post_option">
          <AccountCircleIcon style={{ color: "lightgray" }} />
          <ExpandMoreOutlined style={{ color: "lightgray" }} />
        </div>
      </div>
    </div>
  );
}

export default Post;
