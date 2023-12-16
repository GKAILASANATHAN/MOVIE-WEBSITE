import React, { useState, useEffect } from "react";
import email from "./email.png";
import password from "./password.png";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Loginsignup = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setAuthenticated] = useState(false);

  const handleGoogleLogin = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log(decoded, "DECODED");

    localStorage.setItem("googleToken", credentialResponse.credential);
    setAuthenticated(true);

    navigate("/movies");
  };

  useEffect(() => {
    const checkToken = localStorage.getItem("googleToken");
    if (checkToken) {
      setAuthenticated(true);
      navigate("/Movies");
    }
  }, [navigate]);

  return (
    <div className="body1">
      <div className="container1">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email} alt="" />
            <input type="email" name="email" placeholder="email id" />
          </div>
          <div className="input">
            <img src={password} alt="img" />
            <input type="password" name="password" placeholder="password " />
          </div>
        </div>
        <div className="sumbit-container">
          <button className="sumbit">Login</button>
        </div>
        <div className="clientuser">
          {isAuthenticated ? (
            <button onClick={() => setAuthenticated(false)}>Logout</button>
          ) : (
            <GoogleOAuthProvider clientId="866237802421-g4j13fh878mgnqlajb2fs22mh4cp1i5o.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
