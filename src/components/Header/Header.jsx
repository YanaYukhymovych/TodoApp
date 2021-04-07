import React from 'react';
import { Segment } from 'semantic-ui-react';

import Auth from "../Auth/Auth";
import UserInfo from "../UserInfo/UserInfo";
import UserSettings from "../UserSettings/UserSettings";

const Header = () => {
  return (
    <Segment style={{margin: '0'}}>
      <UserInfo />
      <UserSettings />

      {/*show auth form or user info*/}
      <Auth />
    </Segment>
  )
}

export default Header;