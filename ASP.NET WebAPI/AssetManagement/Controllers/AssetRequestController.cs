using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AssetManagement.Models;

namespace AssetManagement.Controllers
{
    [RoutePrefix("api/assetrequest")]
    public class AssetRequestController : ApiController
    {
        AssetEntities19 DB = new AssetEntities19();

        [Route("AddAssetRequest")]
        [HttpPost]
        
        public object AddAsset(AssetRequestTable ast)
        {
            try
            {
              
                
                AssetRequestTable AT = new AssetRequestTable();
                if (AT.RequestID == 0)
                {
                    AT.AssetName = ast.AssetName;
                    AT.Quantity = ast.Quantity;
                    AT.EmpID = ast.EmpID;
                    AT.Status = "Pending";
                    AT.ManagerID = ast.ManagerID;
                   

                    DB.AssetRequestTables.Add(AT);
                    DB.SaveChanges();

                    return new Response
                    {
                        Status = "Success",
                        Message = "Record SuccessFully Saved."
                    };
                }
               
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex.Message);
            }
            return new Response
            {
                Status = "Error",
                Message = "Invalid Data."
            };
        }

        [Route("UpdateAssetRequest")]
        [HttpPost]
        public object UpdateAsset(AssetRequestTable ast)
        {
            try
            {
                var obj = DB.AssetRequestTables.Where(x => x.RequestID == ast.RequestID).ToList().FirstOrDefault();

                if (obj.RequestID > 0)
                {
                    
                    obj.Status = ast.Status;
                    DB.SaveChanges();

                    return new Response
                    {
                        Status = "Updated",
                        Message = "Updated Successfully"
                    };
                }
            }

            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return new Response
            {
                Status = "Error",
                Message = "Invalid Data."
            };
        }
            

       
        [Route("AssetRequestList")]
        [HttpGet]
        public object Getasset()
        {
            
            {
                var emp = DB.AssetRequestTables.ToList();
                return emp;
            }
          
        }

       
        [Route("AssetRequestDetailsbyID")]
        [HttpGet]
        public object assetdetailById(int id)
        {
            var obj = DB.AssetRequestTables.Where(x => x.RequestID == id).ToList();
            return obj;
        }

        [Route("AssetRequestDetailsbyIDUser")]
        [HttpGet]
        public object assetdetailuser(int id)
        {
           
            var obj = DB.AssetRequestTables.Where(x => x.ManagerID == id).ToList();
            return obj;
        }
    }
}
