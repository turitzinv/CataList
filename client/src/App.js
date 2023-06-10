import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import NavBar from "./components/NavBar";
import MyLists from "./components/MyLists";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const [allLists, setLists] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState(null);

  let history = useHistory();

  // console.log(user.lists)
  //Add lists that are involved from the user.
  //Separate state for items that match users id?
  //Or another nest within users to have user -> lists -> id.

  useEffect(() => {
    fetch("/me")
    .then((resp) => resp.json())
    .then((user) => setLists(user.lists))
  }, [])

  function handleLogin(event) {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
        history.push("/lists");
        setUsername("");
        setPassword("");
      } else {
        resp.json().then((err) => setErrors(err));
      }
    });
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar setUser={setUser} user={user} />
        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route path="/lists">
            <MyLists allLists={allLists} />
          </Route>
          <Route path="/login">
            <Login
              handleLogin={handleLogin}
              username={username}
              setUsername={setUsername}
              setPassword={setPassword}
              password={password}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
