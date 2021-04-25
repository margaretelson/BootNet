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
              <input class="input is-medium" type="text" placeholder="Username" />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input class="input is-medium" type="email" placeholder="Password" />
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

        </form>
      )}
    </div>
  );
}

export default FormCard;
