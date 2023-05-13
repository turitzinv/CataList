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
  const [errors, setErrors] = useState([])
  const [user, setUser] = useState(null)

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

  function handleLogin(event) {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password }),
    })
    .then((resp) => {
      if (resp.ok) {
        resp.json().then(user => console.log(user));
      } else {
        resp.json().then(err => console.log(err))
      }
    });
  }

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
            <Login handleLogin={handleLogin} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
