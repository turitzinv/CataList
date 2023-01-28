import './App.css';
//import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
      <Switch>
        <Route exact path = "/" >
          <h1>Test Homepage</h1>
        </Route>
        <Route path="/testing">
          <h1>Test Route</h1>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
