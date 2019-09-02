import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

import { fetchLogin } from "./actions/index";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.signIn = this.signIn.bind(this);

    this.state = {
      email: "",
      password: ""
    };

    console.log("[현재 리덕스 스토어 상태]");
    console.log("[userName] = " + this.props.userName);
    console.log("[token] = " + this.props.token);
    console.log("==================");
  }

  handleEmailChange(e) {
    //이메일 핸들링
    console.log("[handle] Email address is " + this.state.email);
    this.setState({ email: e.target.value });
  }
  handlePasswordChange(e) {
    //패스워드 핸들링
    console.log("[handle] Password is " + this.state.password);

    this.setState({ password: e.target.value });
  }

  signIn() {
    //로그인 콘솔 확인
    console.log(
      "[Submit] Email address is " +
        this.state.email +
        " Password is " +
        this.state.password
    );

    //Action
    console.log("[Action]");
    return this.props
      .fetchLogin(this.state.email, this.state.password)
      .then(console.log("Login Success"));

    //쿠기에 저장
    console.log("쿠키에 저장은 react-cookie 사용해서 저장... ");
  }

  render() {
    return (
      <div className="App" style={{ marginTop: "50px" }}>
        {/* <form className="form-signin"> */}
        <input
          type="text"
          onChange={this.handleEmailChange}
          id="email"
          placeholder="email"
        ></input>
        <input
          type="password"
          onChange={this.handlePasswordChange}
          id="password"
          placeholder="password"
        ></input>
        <button onClick={this.signIn}>로그인</button>
        {/* </form> */}
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      userName: state.auth.userName,
      token: state.auth.token
    };
  },
  { fetchLogin }
)(App);
