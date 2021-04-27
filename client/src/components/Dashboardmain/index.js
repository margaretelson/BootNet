import React from "react";
import "./style.css";

import AllUsers from "../AllUsers";

function Dashboardmain(props) {
  return (
    <main>
      <section class="glass">
          <div class="dashboard">
            <div class="user">
              <img src="" />
              <h3>User's Name</h3>
              <p>Bootcamp Name</p>
            </div>
            <div class="links-nav">
              <div class="link">
            
                <h2>Connections</h2>
              </div>
              <div class="link-nav">
          
                <h2>Skills</h2>
              </div>
              <div class="link-nav">
            
                <h2>Saved Jobs</h2>
              </div>
              <div class="link-nav">
            
                <h2>Connections</h2>
              </div>
              <div class="link-nav">
            
                <h2>Skills</h2>
              </div>
              <div class="link-nav">
              
                <h2>Saved Jobs</h2>
              </div>
              <div class="link-nav">
              
                <h2>Settings</h2>
              </div>
            </div>
          </div>

          <div class="cards">
            <div class="square-cards">
              <AllUsers />
            </div>
            <div class="leftMargin">
              <div class="status">
                <h1>Skills</h1>
                <div class="square-cards">
                  <div class="square">
                      <div class="card-info">
                        <h2> JS </h2>
                        <p>Intermediate</p>
                        <div class="progress"></div>
                      </div>
                      <h2 class="percentage">60%</h2>
                  </div>
                  <div class="square">
                      <div class="card-info">
                        <h2> MySQL </h2>
                        <p>Advanced</p>
                        <div class="progress"></div>
                      </div>
                      <h2 class="percentage"> 100%</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </main>
  );
}

export default Dashboardmain;
