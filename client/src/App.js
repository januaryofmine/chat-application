import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import JoinRoom from "./JoinRoom";
import RoomChat from "./RoomChat";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={JoinRoom} />
            <Route exact path="/:id" component={RoomChat} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
