import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
function FormCard(props) {
  return (
    <div class="column right has-text-centered">
      <h1 class="title is-4">Log in</h1>
      <p class="description"></p>
      {window.location.pathname.includes("/login") ? (
        <form>
          <div class="field">
            <div class="control">
              <input class="input is-medium" type="text" placeholder="Name" />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input class="input is-medium" type="email" placeholder="Email" />
            </div>
          </div>
          <button class="button is-block is-info is-fullwidth is-medium">
            Log in
          </button>
          <br />
          <small>
            <em>
              <a href="signup">
                <br />
                Sign up
              </a>
            </em>
          </small>
        </form>
      ) : (
        <form>
          <div class="field">
            <div class="control">
              <input
                class="input is-medium"
                type="text"
                name="name"
                value={props.userInfo.name}
                onChange={props.handleInputChange}
                placeholder="Name"
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input
                class="input is-medium"
                type="email"
                name="email"
                value={props.userInfo.email}
                onChange={props.handleInputChange}
                placeholder="Email"
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input
                class="input is-medium"
                type="text"
                placeholder="User Name"
                name="username"
                value={props.userInfo.username}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input
                class="input is-medium"
                type="password"
                placeholder="Password"
                name="password"
                value={props.userInfo.password}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input
                class="input is-medium"
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={props.userInfo.password2}
                onChange={props.handleInputChange}
              />
            </div>
          </div>

          <button
            class="button is-block is-info is-fullwidth is-medium"
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
