import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  

function ViewProfile(props) {  
        const [user, setuser]= useState({ID:'', Name: '', Password: '', Mobile: '', Email: '', Department: ''});
        console.log(props.match.params.id);  
        const Url = "https://localhost:44330/api/user/UserDetailsbyID?id=" + props.match.params.id; 

        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setuser(result.data);  
          };     
          GetData();  
        }, []);      

        const UpdateAsset = (e) => {  
          e.preventDefault();  
          const data = {ID: props.match.params.id, Name: user.Name, Password: user.Password, Mobile: user.Mobile, Email: user.Email, Department: user.Department };  
         console.log(data);
          axios.post('https://localhost:44330/api/user/UpdateUser', data)  
            .then((result) => {  
                console.log(result.data);
                
                props.history.push('/Dashboard') 
            }) 
        }      

        const onChange = (e) => {  
          e.persist();  
          setuser({...user, [e.target.name]: e.target.value});  
        }  

        return (    
          <div class="container " style={{fontFamily:"Times New Roman", fontWeight:"bold", paddingLeft:150}}>  
          <div class="row">  
          </div>  
          <div class="card o-hidden border-0 shadow-lg my-5 " style={{ "marginTop": "5rem!important;" }} >  
            <div class="card-body p-0">  
              <div class="row">  
                <div class="col-lg-12">  
                  <div class="p-5">  
                  <div class="text-center">  
                      <h1 class="h4 text-gray-900 mb-4" style={{fontFamily:"Times New Roman", fontWeight:"bold"}}>Manager Details</h1>  
                    </div>
                    <form onSubmit={UpdateAsset} class="user" style={{fontFamily:"Times New Roman", fontWeight:"bold"}}>  
                      <div class="form-group">  
                      
                        <div>  
                          <label><strong>ID:</strong></label>
                          <input type="number" name="ID"  value={user.ID} class="form-control" id="exampleID" placeholder="ID" />  
                        </div>  
                               <br/>
                        <div>  
                          <label><strong>Name:</strong></label>
                          <input type="text" name="Name" onChange={onChange} value={user.Name} class="form-control" id="exampleName" placeholder="Name" />  
                        </div>  
                               <br/>
                        <div>
                          <label><strong>Password:</strong></label>  
                          <input type="Password" name="Password" onChange={onChange} value={user.Password} class="form-control" id="examplePassword" placeholder="Password" />  
                        </div>  
                               <br/>
                      <div>  
                        <label><strong>Mobile:</strong></label> 
                        <input type="phoneno" name="Mobile" onChange={onChange} value={user.Mobile} class="form-control" id="exampleInputMobile" placeholder="Mobile" />  
                      </div>  
                              <br/>
                      <div>
                        <label><strong>Email:</strong></label>  
                        <input type="text" name="Email" onChange={onChange} value={user.Email} class="form-control" id="exampleInputEmail" placeholder="Email" />  
                      </div>  
                              <br/>
                      <div>
                        <label><strong>Department:</strong></label>  
                        <input type="text" name="Department" onChange={onChange} value={user.Department} class="form-control" id="exampleDepartment" placeholder="Department" />  
                      </div>  
                              <br/>
                      </div>  
                      <Button type="submit" className="btn btn-info mb-1" ><span>Update</span></Button> 
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      <Button className="btn btn-info mb-1" ><span>Back</span></Button>  
                      <hr />  
                    </form>  
                    <hr />  
                  </div>  
                </div>  
              </div>  
            </div>  
          </div>  
        </div>  
        )  
}  
  
export default ViewProfile  











