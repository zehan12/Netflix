// import '../stylesheets/App.css';
import Home from "./Home";
import Main from "./Main";
import Signin from "./Signin";
import { Switch, Route } from "react-router-dom";
import SingleVideo from "./SingleVideo";
import Music from "./Music";
import Hollywood from "./Hollywood";
import Trending from "./Trending";
import Latest from "./Latest";

function App() {
  return (
    <>
      {/* < Home /> */}
      <Switch>
        <Route path="/signin" exact>
          <Signin />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/main" exact>
          <Main />
        </Route>
        <Route path="/music" exact>
          <Music />
        </Route>
        <Route path="/hollywood" exact>
          <Hollywood />
        </Route>
        <Route path="/trending" exact>
          <Trending />
        </Route>
        <Route path="/latest" exact>
          <Latest />
        </Route>
        <Route path="/singlevideo/:id" component={SingleVideo} exact />
      </Switch>
    </>
  );
}

export default App;
//zehan