import './App.css';
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import JobDetails from "./pages/JobDetails"

function App() {




  return (
    <div>
      <h1>ITviec</h1>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route path="/jobs/:id" exact component={JobDetails} />
      </Switch>
    </div>
  );
}



export default App;
