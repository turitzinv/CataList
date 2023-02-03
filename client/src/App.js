import "./App.css";
//import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MyLists from "./components/MyLists";
import Home from "./components/Home";

function App() {
  //const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((resp) => resp.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/lists">
            <MyLists />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
