import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody,CardHeader,Table, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  

function RequestDetailsbyId(props) {  
        const [user, setuser]= useState([]);
        console.log(props.match.params.id);  
        const Url = "https://localhost:44330/api/assetrequest/AssetRequestDetailsbyIDUser?id=" + props.match.params.id;  
       
        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setuser(result.data);  
          };     
          GetData();  
        }, []);  

        const UpdateAsset = (e) => {  
          e.preventDefault();  
          const data = {RequestID:user.RequestID, AssetName:user.AssetName, Quantity: user.Quantity, EmpID: user.EmpID, Status: user.Status, ManagerID: props.match.params.id};  
         console.log(data);
          axios.post('https://localhost:44330/api/assetrequest/UpdateAssetRequest', data)  
            .then((result) => {  
                console.log(result.data);
                
              props.history.push('/RequestStatus')  
            }) 
        }    

        const onChange = (e) => {  
          e.persist();  
          setuser({...user, [e.target.name]: e.target.value});  
        }  

        
        return (  
    <div className="animated fadeIn" style={{fontFamily:"Times New Roman",paddingTop:50, fontWeight:"bold",paddingLeft:100}}>  
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
                    user.map((item, idx) => {  
                      return <tr> 
                        <td>{item.RequestID}</td>   
                        <td>{item.AssetName}</td>  
                        <td>{item.Quantity}</td>  
                        <td>{item.EmpID}</td>  
                        <td>{item.ManagerID}</td> 
                        <td>{item.Status}</td>     
                        <td>  
                          
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







              //   <div className="app flex-row align-items-center">  
              //   <Container style={{fontFamily:"Times New Roman", fontWeight:"bold", width: 1500, alignContent:"center", alignItems:"center", paddingLeft:300}}>  
              //     <Row className="justify-content-center">  
              //       <Col md="12" lg="10" xl="8">  
              //         <Card className="mx-4">  
              //           <CardBody className="p-4">  
              //             <Form onSubmit={UpdateAsset}>   
                           
              //             <div class="text-center">    
              //                 <h1 class="h4 text-gray-900 mb-4" style={{fontFamily:"Times New Roman", fontWeight:"bold"}}>Add Asset Request</h1>  
              //             </div>
                             
              //               <br/><br/>
              //               <InputGroup className="mb-3">  
              //                     <label><strong>Request ID:</strong></label> 
              //                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              //                     <Input type="number" name="RequestID" id="RequestID" placeholder="RequestID" value={user.RequestID}   />  
              //               </InputGroup>
              //               <br/>
              //                     <InputGroup className="mb-3"> 
              //                     <label><strong>Asset Name:</strong></label> 
              //                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              //                     <Input type="text" name="AssetName" id="Name" placeholder="Name" value={user.AssetName} onChange={onChange}   />  
              //               </InputGroup>  
              //               <br/>
              //               <InputGroup className="mb-3"> 
              //                     <label><strong>Quantity:</strong></label> 
              //                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              //                     <Input type="number" placeholder="Quantity" name="Quantity" id="Quantity" value={user.Quantity} onChange={onChange} />  
              //               </InputGroup>  
              //               <br/>
              //               <InputGroup className="mb-3">  
              //                     <label><strong>EmpID:</strong></label> 
              //                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              //                     <Input type="number" placeholder="Emp Id" name="EmpID" id="EmpID"  value={user.EmpID}  onChange={onChange}  />  
              //               </InputGroup>                              
              //               <br/>
              //               <InputGroup className="mb-3">  
              //                     <label><strong>Status:</strong></label> 
              //                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              //                     <Input type="text" placeholder="Status" name="Status" id="Status"  value={user.Status}   />  
              //               </InputGroup>   
              //               <br/>
              //         <CardFooter className="p-4">  
              //             <Row>  
              //             <Col xs="12" sm="6">  
              //                 <Button type="submit" className="btn btn-info mb-1" ><span>Update</span></Button>  
              //               </Col>
              //               <Col xs="12" sm="6">  
              //                 <Button className="btn btn-info mb-1" ><span>Back</span></Button>  
              //               </Col>  
              //             </Row>  
              //           </CardFooter>  
              //             </Form>  
              //           </CardBody>                 
              //         </Card>  
              //       </Col>  
              //     </Row>  
              //   </Container>  
              // </div>  
        )  
}  
  
export default RequestDetailsbyId  











// import React from 'react';   
// import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
// import axios from 'axios'  
// class EditAsset extends React.Component {  
//     constructor(props) {  
//         super(props)  

//     this.onChangeAssetName = this.onChangeAssetName.bind(this);  
//     this.onChangeQuantity = this.onChangeQuantity.bind(this);  
//     this.onChangePricePerItem = this.onChangePricePerItem.bind(this);  
      
//     this.onSubmit = this.onSubmit.bind(this);  

//          this.state = {  
//             AssetName: '',  
//             Quantity: '',  
//             PricePerItem: '' 
//         }  
//     }  

//   componentDidMount() {  
//       axios.get('http://localhost:44330/api/addasset/assetdetails?id='+this.props.match.params.id)  
//           .then(response => {  
//               this.setState({   
//                 AssetName: response.data.AssetName,   
//                 Quantity: response.data.Quantity,  
//                 PricePerItem: response.data.PricePerItem,  
//                 });  

//           })  
//           .catch(function (error) {  
//               console.log(error);  
//           })  
//     }  

//   onChangeAssetName(e) {  
//     this.setState({  
//         AssetName: e.target.value  
//     });  
//   }  
//   onChangeQuantity(e) {  
//     this.setState({  
//         Quantity: e.target.value  
//     });    
//   }  
//   onChangePricePerItem(e) {  
//     this.setState({  
//         PricePerItem: e.target.value  
//     });  
// }  
    

//   onSubmit(e) {  
//     debugger;  
//     e.preventDefault();  
//     const obj = {  
//         AssetID:this.props.match.params.id,  
//       AssetName: this.state.AssetName,  
//       Quantity: this.state.Quantity,  
//       PricePerItem: this.state.PricePerItem,  
//     };  

//     axios.post('https://localhost:44330/api/addasset/InsertAsset/', obj)  
//         .then(res => console.log(res.data));  
//         debugger;  
//         this.props.history.push('/AssetsList')  
//   }  
//     render() {  
//         return (  
//             <Container className="App">  

//              <h4 className="PageHeading">Update Informations</h4>  
//                 <Form className="form" onSubmit={this.onSubmit}>  
//                     <Col>  
//                         <FormGroup row>  
//                             <Label for="name" sm={2}>Asset Name</Label>  
//                             <Col sm={10}>  
//                                 <Input type="text" name="AssetName" value={this.state.AssetName} onChange={this.onChangeAssetName}  
//                                 placeholder="Enter Asset Name" />  
//                             </Col>  
//                         </FormGroup>  
//                         <FormGroup row>  
//                             <Label for="Password" sm={2}>Quantity</Label>  
//                             <Col sm={10}>  
//                                 <Input type="number" name="Quantity" value={this.state.Quantity} onChange={this.onChangeQuantity} placeholder="Enter Quantity" />  
//                             </Col>  
//                         </FormGroup>  
//                          <FormGroup row>  
//                             <Label for="Password" sm={2}>Price Per Item</Label>  
//                             <Col sm={10}>  
//                                 <Input type="number" name="PricePerItem" value={this.state.PricePerItem} onChange={this.onChangePricePerItem} placeholder="Enter Price" />  
//                             </Col>  
//                         </FormGroup>  
                          
//                     </Col>  
//                     <Col>  
//                         <FormGroup row>  
//                             <Col sm={5}>  
//                             </Col>  
//                             <Col sm={1}>  
//                           <Button type="submit" color="success" >Submit</Button>{' '}  
//                             </Col>  
//                             <Col sm={1}>  
//                                 <Button color="danger">Cancel</Button>{' '}  
//                             </Col>  
//                             <Col sm={5}>  
//                             </Col>  
//                         </FormGroup>  
//                     </Col>  
//                 </Form>  
//             </Container>  
//         );  
//     }  

// }  

// export default EditAsset;  