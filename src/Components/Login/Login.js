import React from "react";
import useAuth from "../../Context/useAuth";
import { useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const fb = <FontAwesomeIcon icon={faGoogle} size="lg" />;

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_url);
    });
  };
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div>
        <h1>Please Login With Google...</h1>

        <button className="px-5 py-3 my-5" onClick={handleGoogleLogin}>
          <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          <span className="pe-3">{fb}</span>Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
