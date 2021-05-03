import React from 'react'
import ReactCompass from "./util/ReactCompass"
import 'react-compass/dist/react-compass.css';
import {AppContext} from "./context/context"

import Search from "./components/Search/Search"

function App() {

  console.log(React.useContext(AppContext));

  return (
    <div className="app">
      <Search />
    </div>
  );
}

export default App;
