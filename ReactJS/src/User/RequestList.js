import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  

function RequestList(props) {  
  const [data, setData] = useState([]);  

  
  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('https://localhost:44330/api/assetrequest/AssetRequestList');  
      setData(result.data);  
    };  
    GetData();  
  }, []);  


  const deleteasset = (id) => {  
    debugger;  
    axios.delete('https://localhost:44330/api/assetrequest/DeleteAseetRequest?id=' + id)  
      .then((result) => {  
        props.history.push('/RequestList')  
      });  
  };  


  const editasset = (id) => {  
    console.log(id);
    props.history.push({  
      pathname: '/EditRequest/'+ id  
    });  
  };  


  return (  
    <div className="animated fadeIn" style={{fontFamily:"Times New Roman",paddingTop:50, fontWeight:"bold", alignItems:"center", alignContent:"center"}}>  
      <Row>  
        <Col>    
          <Card>     
            <CardHeader style={{fontFamily:"Times New Roman", fontWeight:"bold",textAlign:"center"}}>  
              <i className="fa fa-align-justify"></i> Assets Requests List  
              </CardHeader>  
            <CardBody>  
              <Table hover bordered striped responsive size="sm" style={{fontFamily:"Times New Roman", fontWeight:"bold", alignItems:"center", alignContent:"center", paddingLeft:300}}>  
                <thead>  
                  <tr>  
                  <th>RequestID</th>
                    <th>Asset Name</th>  
                    <th>Quantity</th>  
                    <th>EmpID</th>  
                    <th>ManagerID</th> 
                    <th>Status</th>   
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item, idx) => { 
                      if(item.Status=="Approved"){
                      return <tr> 
                        <td>{item.RequestID}</td>   
                        <td>{item.AssetName}</td>  
                        <td>{item.Quantity}</td>  
                        <td>{item.EmpID}</td>  
                        <td>{item.ManagerID}</td> 
                        <td style={{color:'green'}}>{item.Status}</td>     
                        <td>  
                          <div class="btn-group">  
                            <button className="btn btn-info" onClick={() => { editasset(item.RequestID) }} >Accept/Reject</button>
                            
                          </div>  
                        </td>  
                      </tr>  
                        }
                        if(item.Status=="Rejected"){
                          return <tr> 
                            <td>{item.RequestID}</td>   
                            <td>{item.AssetName}</td>  
                            <td>{item.Quantity}</td>  
                            <td>{item.EmpID}</td>  
                            <td>{item.ManagerID}</td> 
                            <td style={{color:'red'}}>{item.Status}</td>     
                            <td>  
                              <div class="btn-group">  
                                <button className="btn btn-info" onClick={() => { editasset(item.RequestID) }} >Accept/Reject</button>
                                
                              </div>  
                            </td>  
                          </tr>  
                            }
                            else{
                              return <tr> 
                                <td>{item.RequestID}</td>   
                                <td>{item.AssetName}</td>  
                                <td>{item.Quantity}</td>  
                                <td>{item.EmpID}</td>  
                                <td>{item.ManagerID}</td> 
                                <td style={{color:'black'}}>{item.Status}</td>     
                                <td>  
                                  <div class="btn-group">  
                                    <button className="btn btn-info" onClick={() => { editasset(item.RequestID) }} >Accept/Reject</button>
                                    
                                  </div>  
                                </td>  
                              </tr>  
                                }
                        
                        
                        
                        
                        
                        
                        
                        
                        })}  
                </tbody>  
              </Table>  
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
    </div>  
  )  
}  
  
export default RequestList  