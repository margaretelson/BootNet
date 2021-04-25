import React from "react";

function LoginWrapper(props) {
  return (
    <div>
      <div className="container">
        <div className="columns is-multiline">
          <div className="column register">
            <div className="columns">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginWrapper;
