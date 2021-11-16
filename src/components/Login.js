import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
export const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    // alert("Sign in button clicked");
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        dispatch({ type: "SET_USER", payload: result.user });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111615.png"
          alt="slack logo"
        ></img>
        <h1>Sign in to Tutul's slack</h1>
        <Button className="signin__btn" onClick={signIn}>
          SIGN IN WITH GOOGLE
        </Button>
      </div>
    </div>
  );
};
