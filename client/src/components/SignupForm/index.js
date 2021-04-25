import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

function SinupForm(props) {
  return (
    <div class="column right has-text-centered">
      <h1 class="title is-4">Sign up today</h1>
      <p class="description">There's strength in alumni</p>
      <form>
        <div class="field">
          <div class="control">
            <input
              class="input is-medium"
              type="text"
              placeholder="Name"
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
              placeholder="Email"
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
              type="email"
              placeholder="username"
              name="username"
              value={props.userInfo.email}
              onChange={props.handleInputChange}
              placeholder="Username"
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
              value={props.userInfo.password}
              onChange={props.handleInputChange}
            />
          </div>
        </div>
        <button class="button is-block is-info is-fullwidth is-medium">
          Sign Up
        </button>
        <br />
        <small>
          <em>
            We're a network of bootcamp grads helping other bootcamp grads find
            job opportunities. Let's stick together and kick some booty!
          </em>
        </small>
        <small>
          <em>
            <a href="route">
              <br />
              Log in
            </a>
          </em>
        </small>
      </form>
    </div>
  );
}

export default SinupForm;
