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
      <div className="flex justify-between  py-2 font-extrabold border-black border-b-4">
        <h1 className="ml-5 p-3">FRIENDS DATABASE</h1>
        <div className="flex gap-x-12">
          {isAuth && (
            <Link
              className="bg-black text-white text-sm p-3 active:bg-white active:text-white"
              onClick={handleLogout}
            >
              LOGOUT
            </Link>
          )}
          {!isAuth && (
            <Link
              className="bg-black text-white text-sm p-3 active:bg-white active:text-white"
              to="/"
            >
              LOGIN
            </Link>
          )}
          <Link
            className="bg-black text-white text-sm p-3 active:bg-white active:text-white"
            to="/friends"
          >
            FRIENDS LIST
          </Link>
          <Link
            className="bg-black text-white text-sm p-3 active:bg-white active:text-white "
            to="/friends/add"
          >
            ADD FRIEND
          </Link>
        </div>
      </div>

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
