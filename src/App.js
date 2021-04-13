import './App.css';
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import JobDetails from "./pages/JobDetails"
import Navbar from "./components/Navbar"


function App() {




  return (
    <div>
      <div className="header">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route path="/jobs/:id" exact component={JobDetails} />
      </Switch>
    </div>
  );
}



export default App;
