import React from 'react';
import './UserSettings.scss'
import { Dropdown } from "semantic-ui-react";


const UserSettings = () => {
  return (
    <Dropdown icon={'setting'}>
      <Dropdown.Menu>
        <Dropdown.Item className="settings__item" text='Reset password' icon={'angle right'}>
        </Dropdown.Item >
        <Dropdown.Item className={'settings__item'} text='Delete account' icon={'angle right'} />
        <Dropdown.Item className={'settings__item'} text='Sign out' icon={'angle right'} />
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default UserSettings;