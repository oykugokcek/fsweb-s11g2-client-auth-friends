import "./App.css";
import axios from "axios";
import { Link, Switch, Route, useHistory } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";
import AddFriendForm from "./components/AddFriendForm";
import PrivateRoute from "./components/PrivateRoute";
import { useEffect, useState } from "react";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("s11g2token");

  return axios.create({
    headers: {
      Authorization: token,
    },
  });
};
function App() {
  const [isAuth, setIsAuth] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem("s11g2token");
  //   token ? setIsAuth(true) : setIsAuth(false);
  //   return isAuth;
  // }, []);

  console.log(isAuth);
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("s11g2token");
    setIsAuth(false);
    history.push("/");
  };

  return (
    <div className="App">
      <h1>Client Auth Projesi: Friends</h1>
      {isAuth && <Link onClick={handleLogout}>Logout</Link>}
      {!isAuth && <Link to="/">Login</Link>}
      <Link to="/friends">Friends List</Link>
      <Link to="/friends/add">Add Friend</Link>

      <Switch>
        <Route exact path="/">
          <LoginForm setIsAuth={setIsAuth} />
        </Route>

        <PrivateRoute exact path="/friends" component={FriendsList} />
        <PrivateRoute path="/friends/add" component={AddFriendForm} />
      </Switch>
    </div>
  );
}

export default App;
