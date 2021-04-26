import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import signup from "../../Assets/sign-in.png";

function FormCard(props) {
  return (
    <div className="column right has-text-centered">
      <h1 className="title is-4">Already registered? Log in</h1>
      <p className="description"></p>
      {window.location.pathname.includes("/login") ? (
        <form>
          <div className="field">
            <div className="control">
              <input
                className="input is-medium"
                type="text"
                placeholder="Username"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                className="input is-medium"
                type="email"
                placeholder="Password"
              />
            </div>
          </div>
          <button className="button is-block is-info is-fullwidth is-medium">
            Log in
          </button>
          <br />
          <small>
            <em>
              <a href="signup" class="signup">
                Don't have an account yet? Sign up!<br></br>
                <img src={signup} alt="Signup icon" className="signup-icon" />
              </a>
            </em>
          </small>
        </form>
      ) : (
        <form>
          <div className="field">
            <div className="control">
              <input
                className="input is-medium"
                type="text"
                name="name"
                value={props.userInfo.name}
                onChange={props.handleInputChange}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input is-medium"
                type="email"
                name="email"
                value={props.userInfo.email}
                onChange={props.handleInputChange}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input is-medium"
                type="text"
                placeholder="User Name"
                name="username"
                value={props.userInfo.username}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input is-medium"
                type="password"
                placeholder="Password"
                name="password"
                value={props.userInfo.password}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input is-medium"
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={props.userInfo.password2}
                onChange={props.handleInputChange}
              />
            </div>
          </div>

          <button
            className="button is-block is-info is-fullwidth is-medium"
            onClick={props.handleSave}
          >
            Sign Up
          </button>
          <br />
          <small>
            <em>
              <a href="route">
                <br />
                Sign up
              </a>
            </em>
          </small>
        </form>
      )}
    </div>
  );
}

export default FormCard;
