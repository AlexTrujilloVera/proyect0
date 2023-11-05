import Home from './index.js';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Index from "./Routes";
import Index from "./Routes/home";
import Index from "./Routes/login";
import Index from "./Routes/quiensoy";
import Index from "./Routes/registro";
import Index from "./Routes/index";
import Index from "./Routes/carrito";

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="index"Component = {Index}></Route>
      <Route path ="home"Component = {Home}></Route>
      <Route path ="Login"Component = {Login}></Route>
      <Route path ="Login"Component = {Login}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
