import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from './firebase';
import { actionTypes } from './Reducer';
import { useStateValue} from './StateProvider';
import iCLogo from "./iCLogo.png";
import iChatLogo from './iChatLogo.png'

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }).catch((error) => alert(error.message));
    };

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src={iCLogo}
          alt=""
        />
        <img
          src={iChatLogo}
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
