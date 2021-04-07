import React from 'react';
// import './UserInfo.scss';
import { Image } from 'semantic-ui-react';

const UserInfo = () => {
  return (
    <div>
      <div>
        <Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
        <span>Username</span>
      </div>
    </div>
  )
}

export default UserInfo;