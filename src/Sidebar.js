import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import { ExpandMoreOutlined } from '@material-ui/icons';
import { useStateValue } from './StateProvider';

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

    return (
      <div className="sidebar">
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <SidebarRow
          Icon={EmojiFlagsIcon}
          title="Pages"
          style={{ color: "lightgray" }}
        />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow
          Icon={ChatIcon}
          title="Messenger"
          style={{ color: "lightgray" }}
        />
        <SidebarRow
          Icon={StorefrontIcon}
          title="Marketplace"
          style={{ color: "lightgray" }}
        />
        <SidebarRow
          Icon={VideoLibraryIcon}
          title="Videos"
          style={{ color: "lightgray" }}
        />
        <SidebarRow
          Icon={ExpandMoreOutlined}
          title="Marketplace"
          style={{ color: "lightgray" }}
        />
      </div>
    );
}

export default Sidebar
