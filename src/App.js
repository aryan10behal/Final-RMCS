import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MainDisplay from "./components_screen1/MainDisplay";
import Screen_2 from "./components_screen2/Screen_2";
import Screen_3 from "./components_screen3/Screen_3";
import Screen_4 from "./components_screen4/Screen_4";
import Screen_5 from "./components_screen5/Screen_5";
import PageNotFound from "./page_not_found/PageNotFound";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainDisplay} />
        <Route path="/Screen1" exact component={MainDisplay} />
        <Route path="/Screen2" exact component={Screen_2} />
        <Route path="/Screen3" exact component={Screen_3} />
        <Route path="/Screen4" exact component={Screen_4} />
        <Route path="/Screen5" exact component={Screen_5} />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </Router>
  );
}
