import React from "react";

function index(props) {
  return (
    <div>
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-8 is-offset-2 register">
            <div className="columns">
           {props.children}

              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default index;
