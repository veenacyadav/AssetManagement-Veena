import React, { useState, useEffect } from 'react'  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import AddRequest from './User/AddRequest';
import RequestStatus from './User/RequestStatus';
import RequestDetailsbyId from './User/RequestDetailsbyId';
import ViewProfile from './User/ViewProfile';
import Home from './Home';
  
function Dashboard() {  
    const [user, setuser] = useState({ Name: '', Password: '' });  

    useEffect(() => {  
        var a = localStorage.getItem('myData');  
        var b = JSON.parse(a);  
        console.log(b.Name);  
        setuser(b)  
        console.log(user.Name)  
    }, []);  


    return (  
        <div style={{backgroundColor:'lightyellow' , width:1560, height:1400, opacity:30}}>  
        <br/>
        <h1 style={{fontFamily:"Times New Roman", paddingLeft:750, fontSize: 20}}>Welcome {user.Name} &nbsp;
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-emoji-smile" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path fill-rule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"/>
        <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
        </svg>
        </h1> 
    <Router>      
      <div className="container">      
              <br/> 
           <div style={{display:"flex", paddingLeft:100}}>
              <div class="card" style={{width:1200,height:80,backgroundColor:'whitesmoke' }}>
                <div class="card-body" >
                <Link to={'/AddRequest'} className="nav-link" style={{color:"black",fontWeight:'bold' , fontFamily:"Times New Roman", fontSize:20}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AddRequest</Link>      
                </div>
              </div>
              &nbsp;
              <div class="card" style={{width:1200,height:80,backgroundColor:"whitesmoke"}}>
                <div class="card-body" >
                  <Link to={'/RequestDetailsbyId/'+user.ID} className="nav-link" style={{color:"black",fontWeight:'bold', fontFamily:"Times New Roman", fontSize:20}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Track Status </Link>      
                </div>
              </div>  
              &nbsp;
              <div class="card" style={{width:1200,height:80,backgroundColor:"whitesmoke"}}>
                <div class="card-body" >
                <Link to={'/ViewProfile/'+user.ID} className="nav-link" style={{color:"black",fontWeight:'bold', fontFamily:"Times New Roman", fontSize:20}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ViewProfile </Link>      
                </div>
              </div>
              
             

         </div>








        <Switch>        
          <Route path='/Home' component={Home} /> 
          <Route path='/AddRequest' component={AddRequest} />
          <Route path='/RequestStatus' component={RequestStatus} />
          <Route path='/RequestDetailsbyId/:id' component={RequestDetailsbyId} />
          <Route path='/ViewProfile/:id' component={ViewProfile} />
        </Switch>      
      </div>      
    </Router>     
             
        </div>  
    )  
}  
  
export default Dashboard  