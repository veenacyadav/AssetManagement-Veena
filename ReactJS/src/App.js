import React from 'react';  
import './App.css';  
import Login1 from "./Login";  
import Regster from "./Register";  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   
import Dashboard from './Dashboard';
import AddAsset from './AddAsset'; 
import AssetsList from './AssetsList';
import EditAsset from './EditAsset';
import AddRequest from './User/AddRequest';
import RequestList from './User/RequestList';
import EditRequest from './User/EditRequest';
import RequestStatus from './User/RequestStatus';
import RequestDetailsbyId from './User/RequestDetailsbyId';
import Admin from './Admin';
import Home from './Home';
import Allocated from './Allocated';
import About from './About';


function App() {  
  const login=()=>{
    document.getElementById("login").style.display="block"
    document.getElementById("logout").style.display="none"
}
 



  return (  
    <Router>      
      <div className="container" style={{}}>      
        <nav className="navbar navbar-expand-lg navheader" style={{width:1580, backgroundColor:'lightblue'}} >      
          <div className="collapse navbar-collapse" >      
            <ul className="navbar-nav mr-auto"> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item" >      
                <Link to={'/Home'} className="nav-link" style={{color:"black", fontFamily:"Times New Roman", fontSize:23}}><strong>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg>&nbsp;&nbsp;&nbsp;ASSET MANAGEMENT</strong></Link>      
            </li> 


              <h1 style={{color:'lightblue'}}>....................................................................................................</h1>

              <li className="nav-item">
              <Link to={'/About'} className="nav-link" style={{color:"black", fontFamily:"Times New Roman", fontSize:23}}>About</Link>
            </li>
 
            <h1 style={{color:'lightblue'}}>...</h1>



              <li className="nav-item" style={{display:"none", color:"black"}} id="logout">
                <Link to={'/Home'} className="nav-link" style={{color:"black", fontFamily:"Times New Roman", fontSize:23}} onClick={login}>    
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                </svg>&nbsp;Logout</Link>      
              </li>    
                
             
             
              <li className="nav-item" id="login">
                <Link to={'/login'} className="nav-link" style={{color:"black", fontFamily:"Times New Roman", fontSize:23}}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                </svg>&nbsp;Login</Link>      
              </li>    
              {/* <h1 style={{color:"darkslategrey"}}>....</h1>
              <li className="nav-item">      
                <Link to={'/Register'} className="nav-link" style={{color:"whitesmoke", fontFamily:"Times New Roman", fontSize:23}}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>&nbsp;Register</Link>      
              </li>    */}
               
              
            </ul>      
          </div>      
        </nav>   

      



        <Switch>        
          <Route path='/Home' component={Home} />
          <Route path='/login' component={Login1} />
          <Route path='/Admin' component={Admin} />     
          <Route path='/Register' component={Regster} />    
          <Route path='/Dashboard' component={Dashboard} />
          <Route path='/AddAsset' component={AddAsset} />
          <Route path='/AssetsList' component={AssetsList} />
          <Route path='/EditAsset/:id' component={EditAsset} />
          <Route path='/AddRequest' component={AddRequest} />
          <Route path='/RequestList' component={RequestList} />
          <Route path='/EditRequest/:id' component={EditRequest} />
          <Route path='/RequestStatus' component={RequestStatus} />
          <Route path='/RequestDetailsbyId/:id' component={RequestDetailsbyId} />
          <Route path='/Allocated' component={Allocated} />
          <Route path='/About' component={About} />

        </Switch>      
      </div>      
    </Router>     
  );  
}  
  
export default App;  

