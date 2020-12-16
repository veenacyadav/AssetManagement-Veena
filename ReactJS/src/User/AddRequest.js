import React, { useState } from 'react'  
import axios from 'axios';  
import userEvent from '@testing-library/user-event';
import {useForm} from 'react-hook-form';

function AddRequest(props) { 
  
  const [data, setdata] = useState({RequestID:'', AssetName: '', Quantity: '', EmpID: '',ManagerID:''})  
  console.log(props.match.params.id);
  const apiUrl = "https://localhost:44330/api/assetrequest/AddAssetRequest";  
  
  const AddAssets = (e) => {  
    // e.preventDefault();  
    debugger;  
    const data1 = {RequestID: props.match.params.id, AssetName: data.AssetName, Quantity: data.Quantity, EmpID: data.EmpID, ManagerID: data.ManagerID};  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Error')  
          alert('Invalid information');  
         else
         alert('Request done') 
         props.history.push('/Dashboard') 
      })  
  }  

  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  


  const { register, handleSubmit, errors } = useForm();

  
  return (  
    <div class="container" style={{fontFamily:"Times New Roman", fontWeight:"bold", paddingLeft:150}}>  
      <div class="row">  
      </div>  
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
              <div class="text-center">    
                  <h1 class="h4 text-gray-900 mb-4" style={{fontFamily:"Times New Roman", fontWeight:"bold"}}>Add Asset Request</h1>  
                </div>
                <form onSubmit={handleSubmit(AddAssets)} class="user">  
                  <div class="form-group">  
                  
                    <div>  
                      <label><strong>Asset Name:</strong></label>
                      <input type="text" name="AssetName" onChange={onChange} value={data.AssetName} class="form-control" id="exampleName" placeholder="Asset Name" 
                       ref={register({ required: true})}/>
                       {errors.AssetName && errors.AssetName.type === "required" && ( <p style={{color:'red'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-diamond" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>
                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                      </svg>This field is required</p>)}    
                    </div>  
                           <br/>
                    <div>
                      <label><strong>Quantity:</strong></label>  
                      <input type="number" name="Quantity" onChange={onChange} value={data.Quantity} class="form-control" id="exampleQuantity" placeholder="Quantity" 
                      ref={register({ required: true})} />  
                       {errors.Quantity && errors.Quantity.type === "required" && ( <p style={{color:'red'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-diamond" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>
                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                      </svg>This field is required</p>)}
                    </div>  
                          <br/>
                  <div>  
                    <label><strong>Employee ID:</strong></label> 
                    <input type="number" name="EmpID" onChange={onChange} value={data.EmpID} class="form-control" id="exampleInputID" placeholder="EmpID" 
                      ref={register({ required: true})}/>  
                       {errors.EmpID && errors.EmpID.type === "required" && ( <p style={{color:'red'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-diamond" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>
                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                      </svg>This field is required</p>)}
                  </div> 
                          <br/> 
                  <div>  
                    <label><strong>Manager ID:</strong></label> 
                    <input type="number" name="ManagerID" onChange={onChange} value={data.ManagerID} class="form-control" id="exampleInputManagerID" placeholder="Manager ID"
                     ref={register({ required: true})} />  
                      {errors.ManagerID && errors.ManagerID.type === "required" && ( <p style={{color:'red'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-diamond" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>
                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                      </svg>This field is required</p>)}
                  </div> 
                          <br/>
                  <div>  
                  <button type="submit" class="btn btn-info mb-1">  Add  </button> 
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
  )  
}  
  
export default AddRequest  