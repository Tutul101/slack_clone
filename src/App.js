import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Chat } from "./components/Chat";
import { Login } from "./components/Login";
import { useSelector } from "react-redux";
function App() {
  const state = useSelector((state) => state.userreducer);
  const user = state[state.length - 1].user;

  return (
    <div>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header></Header>
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <h1>Home Screen</h1>
                </Route>
                <Route path="/room/:roomId" exact>
                  <Chat />
                </Route>
              </Switch>
              {/* React-Router Chat Screen */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
