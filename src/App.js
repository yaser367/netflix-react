import React from "react";
import './App.css'
import NavBar from "./components/Navbar/navBar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {originals,actions} from "./urls"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title ='Netflix Orginals' />
      <RowPost url={actions} title ='Action' isSmall />
    </div>
  );
}

export default App;
