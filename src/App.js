import React, { Component } from "react";
import './App.css';
import NavBarComp from './components/NavBarComp';
import Support from './components/Support';
import QueryList from "./components/QueryList";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/Store";


class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <NavBarComp />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/querylist"  element={<QueryList />} />
            <Route path="/support"  element={<Support />} />
          </Routes>
        </div> 
      </Provider>
    ); 
  }
}

export default App;
