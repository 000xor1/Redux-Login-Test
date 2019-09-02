import React from "react";

const Login = props => {
  return (
    <div>
      <input
        type="text"
        onChange={props.handleEmailChange}
        id="email"
        placeholder="email"
      ></input>
      <input
        type="password"
        onChange={props.handlePasswordChange}
        id="password"
        placeholder="password"
      ></input>
      <button onClick={props.signIn}>로그인</button>
    </div>
  );
};

export default Login;
