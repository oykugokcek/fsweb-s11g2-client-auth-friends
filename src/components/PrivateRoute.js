import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log("private'e erişmeye çalışıyor");

  const token = localStorage.getItem("s11g2token");
  // if (token === null) {
  //   toast.message("Lütfen giriş yapın")
  // }

  /*
    eğer token varsa
      props ile gelen Component render olsun,
      yoksa login sayfasına yönlensin
  */

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
