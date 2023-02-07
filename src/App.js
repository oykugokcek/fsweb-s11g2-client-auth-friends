import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <h1>Client Auth Projesi: Friends</h1>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
