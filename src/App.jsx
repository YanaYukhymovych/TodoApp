import React  from 'react';
import './styles/base.scss';

import SideBar from "./components/SideBar/SideBar";
import ListItem from "./components/ListItem/ListItem";

function App() {
  return (
    <div className="App">
      <SideBar />
      <ListItem />
    </div>
  );
}

export default App;
