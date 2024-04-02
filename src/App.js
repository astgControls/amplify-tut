import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {  withAuthenticator } from "@aws-amplify/ui-react";

//Routing
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'

const App = () => {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar/>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route path= "/" element={<Home/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default withAuthenticator(App);