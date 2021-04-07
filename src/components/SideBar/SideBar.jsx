import React from 'react';
import './SideBar.scss'
import Header from "../Header/Header";
import ListCreator from "../ListCreator/ListCreator";

const SideBar = () => {
  return (
    <div className={'sidebar'}>
      <Header />
      <ListCreator />
    </div>
  )
}

export default SideBar;
