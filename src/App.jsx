import React  from 'react';
import './styles/base.scss';

import SideBar from "./components/SideBar/SideBar";
import ListContent from "./components/ListContent/ListContent";

function App() {
  return (
    <div className="App">
      <SideBar />
      <ListContent />
    </div>
  );
}

export default App;
