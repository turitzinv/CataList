import "./App.css";
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MyLists from "./components/MyLists";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const [allLists, setLists] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //handle login function #session gets created
  //make logout button #delete

  useEffect(() => {
    fetch("/lists")
    .then((resp) => resp.json())
    .then((lists)=> setLists(lists))
  }, [])

  // useEffect(() => {
  //   fetch("/me")
  //   .then((resp) => resp.json())
  //   .then((user) => console.log(user))
  // }, [])

  //consider only pulling current user lists would be more efficient



  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/lists">
            <MyLists allLists={allLists} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
