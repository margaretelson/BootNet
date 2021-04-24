import React from 'react'
import "./style.css"

function Dashboardmain(props) {
    return (
        <main>
        <section class="glass">
          <div class="dashboard">
        
            <div class="user">
           <img src="" />
              <h3>Users Name</h3>
              <p>Bootcamp Name</p>
            </div>
            <div class="links">
              <div class="link">
              <img class ="icon"src={props} />
                <h2>Connections</h2>
              </div>
              <div class="link">
               <img class="icon" src={props} />
                <h2>Skills</h2>
              </div>
              <div class="link">
                <img class="icon"src={props} />
                <h2>Saved Jobs</h2>
              </div>
              <div class="link">
              <img class="icon" src={props} />
                <h2>Settings</h2>
              </div>
            </div>
           
          </div>
         
          <div class="cards"> 
            <div class="status">
              <h1>Dashboard</h1>
            </div>


          <div class="square-cards">
              <h2>Saved Users</h2>
              <div class="users">
              <img class="card-icon" src={props} />
                 <div class="card-info">
    <h2>{props.name}</h2>
    <p>{props.email}</p>
    <p>{props.company}</p>
    <p>{props.bootcamp}</p>
                   <div class="Delete"></div>
   </div>
   </div>
</div>           
            
            <div class="cards">
              <div class="card">
                <img class ="card-icon" src={props}/>
                 <div class="card-info">
                   <h2>Lorem ipsum dolor sit amet consectetur adipisicing. </h2>
                   <p>Lorem ipsum dolor sit.</p>
                 </div>
    
               </div>
              <div class="card">
              <img class="card-icon" src={props} />
                <div class="card-info">
                  <h2>Lorem ipsum dolor, sit amet consectetur adipisicing.</h2>
                  <p>Lorem ipsum dolor sit.</p>
        
                </div>
       
              </div>
              <div class="card">
                <img class="card-icon" src={props}/>
                <div class="card-info">
                  <h2>Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
                  <p>Lorem ipsum dolor sit.</p>
  
                </div>
  
              </div>
            </div>
            <div class="status">
              <h1>Skills</h1>
            <div class="square-cards">
              
              <div class="square">
              <img class="card-icon" src={props} />
                 <div class="card-info">
                   <h2> JS  </h2>
                   <p>intermediate</p>
                   <div class="progress"></div>
                 </div>
                 <h2 class="percentage">60%</h2>
               </div>
               <div class="square">
              <img class="card-icon" src={props}/>
                 <div class="card-info">
                   <h2>MySQL  </h2>
                   <p>Advanced</p>
                   <div class="progress"></div>
                 </div>
                 <h2 class="percentage">100%</h2>
               </div>
  
            </div>
          </div>
          </div>
        </section>
      </main>
     
    )
}

export default Dashboardmain
