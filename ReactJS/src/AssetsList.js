import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  

function AssetsList(props) {  
  const [data, setData] = useState([]);  
  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('https://localhost:44330/api/addasset/assetslist');  
      setData(result.data);  
    };  
    GetData();  
  }, []);  
  const deleteasset = (id) => {  
    debugger;  
    
    axios.delete('https://localhost:44330/api/addasset/deleteasset?id=' + id)  
      .then((result) => {  
        props.history.push('/AssetsList')  
      });  
  };  
  const editasset = (id) => {  
    console.log(id);
    props.history.push({  
      pathname: '/EditAsset/'+ id  
    });  
  };  
  return (  
    <div className="animated fadeIn" style={{fontFamily:"Times New Roman",paddingTop:50, fontWeight:"bold", alignItems:"center", alignContent:"center"}}>  
      <Row>  
        <Col>  
          <Card>  
            <CardHeader style={{fontFamily:"Times New Roman", fontWeight:"bold",textAlign:"center"}}>  
              <i className="fa fa-align-justify" > Assets List  </i>
              </CardHeader>  
            <CardBody>  
              <Table hover bordered striped responsive size="sm" style={{fontFamily:"Times New Roman", fontWeight:"bold", alignItems:"center", alignContent:"center", paddingLeft:300}}>  
                <thead style={{fontFamily:"Times New Roman", fontWeight:"bold", alignItems:"center", alignContent:"center"}}>  
                  <tr>  
                  <th>Asset ID</th>
                    <th>Asset Name</th>  
                    <th>Quantity</th>  
                    <th>Price Per Item</th>  
                    <th>Total Price</th>   
                  </tr>   
                </thead>  
                <tbody>  
                  {  
                    data.map((item, idx) => {  
                      return <tr> 
                        <td>{item.AssetID}</td>   
                        <td>{item.AssetName}</td>  
                        <td>{item.Quantity}</td>  
                        <td>Rs. {item.PricePerItem}</td>  
                        <td>Rs. {item.TotalPrice}</td>     
                        <td>  
                          <div class="btn-group">  
                            <button className="btn btn-info" onClick={() => { editasset(item.AssetID) }} >Edit</button>  
                            &nbsp;
                            <button className="btn btn-info" onClick={() => { deleteasset(item.AssetID) }}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                            </svg>&nbsp;Delete</button>  
                          </div>  
                        </td>  
                      </tr>  
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
  
export default AssetsList  