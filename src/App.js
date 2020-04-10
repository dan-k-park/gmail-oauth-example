import React, { useState } from "react";
import "./styles.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [token, setToken] = useState("");

  const responseGoogle = resp => {
    setName(resp.profileObj.name);
    setEmail(resp.profileObj.email);
    setUrl(resp.profileObj.imageUrl);
    setToken(resp.tokenId);
    console.log(resp);
  };

  const logout = resp => {
    setName("");
    setEmail("");
    setUrl("");
    setToken("");
  };
  return (
    <div className="App">
      {token ? (
        <>
          <h2>
            Welcome {name} whose email is {email} and looks like{" "}
            <img src={url} alt={name} />
          </h2>
          <GoogleLogout
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          />
        </>
      ) : (
        <GoogleLogin
          clientId="442763618312-vdqqt2emttipa0n69og1cht34op4s9qh.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}
    </div>
  );
}
