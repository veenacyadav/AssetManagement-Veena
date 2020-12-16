import React, { useState, useEffect } from 'react'   
import axios from 'axios';  
import Register from './Register';
import AddAsset from './AddAsset';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';


function Login(props) {  
    const [user, setuser] = useState({ID:'', Name: '', Password: ''});  
    const apiUrl = "https://localhost:44330/api/user/Login";   

    const Login = (e) => {    
            // e.preventDefault();    
            debugger;   
            const data = {ID: user.ID, Name:user.Name, Password: user.Password };    
            axios.post(apiUrl, data)    
            .then((result) => {    
                debugger;  
                console.log(result.data);   
                const serializedState = JSON.stringify(result.data.UserDetails);  
               var a= localStorage.setItem('myData', serializedState);   
                console.log("A:",a)  
                const user =result.data.UserDetails;  
                console.log(result.data.message);  
                if (result.data.status == '200')  {
                   
                    props.history.push('/Dashboard')   
                } 
                else if(result.data.status == '201'){
                  
                  props.history.push('/Admin') 
                }
                else    
                alert('Invalid User');    
            })        
          };    
          
          const onChange = (e) => {    
                e.persist();    
                debugger;    
                setuser({...user, [e.target.name]: e.target.value});    
              }    

              const logout=()=>{
           
                document.getElementById("login").style.display="none"
                document.getElementById("logout").style.display="block"
               }


               const { register, handleSubmit, errors } = useForm();
    return (  
        
        <div class="container" style={{fontFamily:"Times New Roman", fontWeight:"bold", width: 1300, paddingLeft:100, paddingTop:50, paddingBottom:100}}>  
        <div class="row justify-content-center" >  
          <div class="col-xl-10 col-lg-12 col-md-9 offset-4" style={{ backgroundColor:'lightblue'}}>  
            <div class="card o-hidden border-0 shadow-lg my-5">  
              <div class="card-body p-0">  
                <div class="row">  
                  <div class="col-lg-10">  
                    <div class="p-5">  
                      <div class="text-center">  
                        <h1 class="h4 text-gray-900 mb-4" style={{fontFamily:"Times New Roman", fontWeight:"bold"}}>Login</h1>  
                      </div>  
                      <form onSubmit={handleSubmit(Login)} class="user" >  
                        <div class="form-group" > 
                        
                        
                        <div>
                          <label><strong>Name:</strong></label> 
                          <input type="text" class="form-control" value={user.Name} onChange={ onChange }  name="Name" id="Name" placeholder="Enter Name" 
                          ref={register({ required: true })} />  
                          {errors.Name && errors.Name.type === "required" && ( <p style={{color:'red'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-diamond" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>
                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                      </svg>This field is required</p>)} 
                        </div>
                              
                              <br/>
                         
                        <div class="form-group">  
                          <label><strong>Password:</strong></label>
                          <input type="password" class="form-control" value={user.Password} onChange={ onChange }  name="Password" id="DepPasswordartment" placeholder="Enter Password" 
                          ref={register({ required: true})}/>  
                           {errors.Password && errors.Password.type === "required" && ( <p style={{color:'red'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-diamond" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>
                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                      </svg>This field is required</p>)}
                        </div>  
                              <br/>

                        <div>
                        <button type="submit" className="btn btn-info mb-1 offset-5" style={{alignItems:'center'}} onClick={logout}><span>Login</span></button> 
                        </div>
                           
                        
                        <div style={{textAlign:'center'}}>Not Registered?</div>
                        <Link to={'/Register'} className="nav-link" style={{textAlign:'center'}}>Click here to Register</Link> 
                        
                        </div>
                        <hr/>  
                      </form>  
                     
                    </div>  
                  </div>  
                </div>  
              </div>  
            </div>  
           </div>  
          </div>  
        </div>  
    )  
}  
  
export default Login  





