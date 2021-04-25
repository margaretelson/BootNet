import React from "react";
import title from "../../assets/title.png";

function index() {
  return (
    <div class="column left">
      <img src={title} alt="title" />
      <h2 class="subtitle colored is-4">There's strength in alumni</h2>
      <p class="booty">
        We're a network of bootcamp grads helping other bootcamp grads find job
        opportunities. Let's stick together and kick some booty!
      </p>
    </div>
  );
}

export default index;
