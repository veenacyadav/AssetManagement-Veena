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
import Allocated from './Allocated';
import Home from './Home';
import App from './App';
import Unallocated from './Unallocated';

function Admin() {  
  return (  
    <div style={{backgroundColor:'lightyellow' , width:1560, height:1400, opacity:30}}>
    <Router>      
      <div className="container">      
<br/>
          <div style={{display:"flex", paddingLeft:0,alignContent:"center",alignItems:"center"}}>
              <div class="card" style={{width:1000,height:80,backgroundColor:"whitesmoke"}}>
                <div class="card-body" >
                <Link to={'/AddAsset'} className="nav-link" style={{color:"black" , fontFamily:"Times New Roman", fontSize:18}}>AddAsset</Link>       
                </div>
              </div>
              &nbsp;
              <div class="card" style={{width:1000,height:80,backgroundColor:"whitesmoke"}}>
                <div class="card-body" >
                <Link to={'/AssetsList'} className="nav-link" style={{color:"black", fontFamily:"Times New Roman", fontSize:18}}>ViewAssets</Link>    
                </div>
              </div>  
              &nbsp;
              <div class="card" style={{width:1000,height:80,backgroundColor:"whitesmoke"}}>
                <div class="card-body" >
                <Link to={'/RequestList'} className="nav-link" style={{color:"black", fontFamily:"Times New Roman", fontSize:17}}>AssetsRequest </Link>   
                </div>
              </div>
              &nbsp;
                <div class="card" style={{width:1000,height:80,backgroundColor:"whitesmoke"}}>
                <div class="card-body" >
                <Link to={'/Allocated'} className="nav-link" style={{color:"black", fontFamily:"Times New Roman", fontSize:18}}>Allocated</Link>      
                </div>
              </div>
              &nbsp;
                <div class="card" style={{width:1000,height:80,backgroundColor:"whitesmoke"}}>
                <div class="card-body" >
                <Link to={'/Unallocated'} className="nav-link" style={{color:"black", fontFamily:"Times New Roman", fontSize:18}}>Unallocated</Link>      
                </div>
              </div>
                
              

         </div>

         {/* <div class="card" style={{paddingTop:30, width:1500,height:300}}>
                <img class="card-img-top" src="https://www.twpl.com/wp-content/uploads/Fotolia_115171174_M-1080x675.jpg" alt="Card image cap" style={{opacity:100}}></img>
                <div class="card-body">
                </div>
              </div> */}
         
        <Switch>        
        <Route path='/Home' component={Home} />                      
          <Route path='/AddAsset' component={AddAsset} />              
          <Route path='/AssetsList' component={AssetsList} />                 
          <Route path='/EditAsset/:id' component={EditAsset} />                  
          <Route path='/RequestList' component={RequestList} />              
          <Route path='/EditRequest/:id' component={EditRequest} />                     
          <Route path='/RequestDetailsbyId/:id' component={RequestDetailsbyId} />             
          <Route path='/Allocated' component={Allocated} />
          <Route path='/Unallocated' component={Unallocated} />
        </Switch>      
      </div>      
    </Router>     
    </div>
  );  
}  
  
export default Admin;  