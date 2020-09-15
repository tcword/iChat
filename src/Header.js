import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";
import iCLogo from './iCLogo.png';

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header_left">
        <img src={iCLogo} alt="" />
        <div className="header_input">
          <SearchIcon style={{ color: "lightgray" }} />
          <input placeholder="Search iChat" type="text" />
        </div>
      </div>
      <div className="header_center">
        <div className="header_option header_option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header_right">
        <div className="header_info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>

        <IconButton>
          <AddIcon style={{ color: "lightgray" }} />
        </IconButton>
        <IconButton>
          <ForumIcon style={{ color: "lightgray" }} />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon style={{ color: "lightgray" }} />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon style={{ color: "lightgray" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
