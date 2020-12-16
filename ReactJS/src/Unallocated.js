import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  

function Unallocated(props) {  
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
              <i className="fa fa-align-justify"></i> Unallocated Assets  
              </CardHeader>  
            <CardBody>  
              <Table hover bordered striped responsive size="sm">  
                <thead>  
                  <tr>  
                  <th>RequestID</th>
                    <th>Asset Name</th>  
                    <th>Quantity</th>  
                    <th>EmpID</th>  
                    <th>Status</th>   
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item, idx) => {  
                        if (item.Status=="Rejected"){
                    
                      return <tr> 
                        <td>{item.RequestID}</td>   
                        <td>{item.AssetName}</td>  
                        <td>{item.Quantity}</td>  
                        <td>{item.EmpID}</td>  
                        <td style={{color:'red'}}>{item.Status}</td>     
                        <td>  
                          
                        </td>  
                      </tr>  
                        }
                        if (item.Status=="Pending"){
                    
                          return <tr> 
                            <td>{item.RequestID}</td>   
                            <td>{item.AssetName}</td>  
                            <td>{item.Quantity}</td>  
                            <td>{item.EmpID}</td>  
                            <td style={{color:'black'}}>{item.Status}</td>     
                            <td>  
                              
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
  
export default Unallocated  