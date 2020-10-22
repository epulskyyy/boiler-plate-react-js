import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/modules/auth/actions";
import "../../scss/_login.scss";
import { history } from "../../history";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    isEmail: false,
    isValidEmail: false,
    isPw: false,
    isChecked: false,
  });
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.email === "" && auth.post != null) {
      if (auth.post != null && auth.post.isChecked === true) {
        setUser({
          ...user,
          email: auth.post == null ? "" : auth.post.email,
          password: auth.post == null ? "" : auth.post.password,
          isChecked: true,
        });
        if (auth.isLoggedIn) {
          history.push("/");
        }
      }
    }
    document.title = "Login";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (event) => {
    event.persist();
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email.includes("@") && !user.email.includes(".")) {
      if (user.email.trim() === "") {
        setUser({ ...user, isValidEmail: false });
      } else {
        setUser({ ...user, isValidEmail: true });
      }
    } else if (user.email.trim() === "" || user.password === "") {
      setUser({ ...user, isEmail: true, isPw: true });
    } else if (isHuman === null || isHuman === false) {
      setIsHuman(false);
    } else {
      const newUser =
        user.email.trim() === "" && user.password === ""
          ? {
              email: e.target.email.value.trim(),
              password: e.target.password.value,
            }
          : { ...user, email: user.email.trim() };
      dispatch(login(newUser, user.isChecked)).then(async (isLogin) => {
        await setUser({ ...user, password: "" });
        if (isLogin) {
          history.push("/");
        }
      });
    }
  };
  const onCheckedHandler = (e) => {
    setUser({ ...user, isChecked: e.target.checked });
  };

  if (auth.isLoading) {
    return <Loading setIsHuman={setIsHuman} />;
  }
  return <div className="container"></div>;
}
export default Login;
