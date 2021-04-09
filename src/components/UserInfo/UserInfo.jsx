import React from 'react';
// import './UserInfo.scss';
import {Dropdown, Image} from 'semantic-ui-react';

const UserInfo = () => {
  return (
    <div>
      <div>
        <Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
        <span>Username</span>
      </div>
      <Dropdown icon={'setting'}>
        <Dropdown.Menu>
          <Dropdown.Item className="settings__item" text='Reset password' icon={'angle right'}>
          </Dropdown.Item >
          <Dropdown.Item
            className={'settings__item'}
            text='Delete account'
            icon={'angle right'}
          />
          <Dropdown.Item
            className={'settings__item'}
            text='Sign out'
            icon={'angle right'}
          />
        </Dropdown.Menu>
      </Dropdown>
    </div>

  )
}

export default UserInfo;