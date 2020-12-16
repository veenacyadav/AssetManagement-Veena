
import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table,Input,CardFooter,Button,InputGroup,Container,Form } from 'reactstrap'; 
import axios from 'axios';  
import { useState, useEffect } from 'react'  

function RequestStatus(props) {  
  const [data, setdata] = useState([]);  

  const editasset = (id) => {  
    console.log(id);
    props.history.push({  
      pathname: '/RequestDetailsbyId/'+ id  
    });  
  };  

  const onChange = (e) => {  
        e.persist();  
        debugger;  
        setdata({ ...data, [e.target.name]: e.target.value });  
      }       
    
      return (  
          <>

<div class="container" style={{fontFamily:"Times New Roman", fontWeight:"bold", width: 1500, alignContent:"center", alignItems:"center", paddingLeft:300}}>  
      <div class="row">  
      </div>  
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
              <div class="text-center">    
                  <h1 class="h4 text-gray-900 mb-4" style={{fontFamily:"Times New Roman", fontWeight:"bold"}}>Track Status</h1>  
                </div>
                <form class="user">  
                  <div class="form-group">  
                      <div>  
                          <label><strong>Enter your ID:</strong></label>
                          <input type="number" name="RequestID" value={data.RequestID} class="form-control" id="RequestID" onChange={onChange} placeholder="ManagerID" />   
                      </div>  
                          <br/>
                      <div>
                      <button type="submit" class="btn btn-info mb-1" onClick={() => { editasset(data.RequestID) }} > View</button>  
                      </div>
                    
                  <hr /> 
                  </div> 
                </form>  
                <hr />  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
        {/* <div class="container">  
                    <form  class="user">  
                      <div class="form-group">  
                      <formgroup row>
                        <div>  
                        <label><strong>RequestID:</strong></label>
                          <input type="number" name="RequestID" value={data.RequestID} class="form-control" id="RequestID" onChange={onChange} placeholder="RequestID" />   
                        </div>  
                        </formgroup>
                      <button type="submit" class="btn btn-info mb-1" onClick={() => { editasset(data.RequestID) }} > View</button>  
                      </div>
                    </form>  
        </div>  */}
    
</>

      )
}


export default RequestStatus;