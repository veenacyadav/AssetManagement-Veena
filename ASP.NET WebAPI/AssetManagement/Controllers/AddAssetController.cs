using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using AssetManagement.Models;

namespace AssetManagement.Controllers
{
    [RoutePrefix("api/addasset")]
    public class AddAssetController : ApiController
    {
        AssetEntities23 DB = new AssetEntities23();

        [Route("InsertAsset")]
        [HttpPost]
        public object AddAsset(AddAssetTable ast)
        {
            try
            {

                AddAssetTable AT = new AddAssetTable();
                if (AT.AssetID == 0)
                {
                    AT.AssetName = ast.AssetName;
                    AT.Quantity = ast.Quantity;
                    AT.PricePerItem =  ast.PricePerItem;
                    int a = Convert.ToInt32(ast.PricePerItem);
                    int b = Convert.ToInt32(ast.Quantity);
                    AT.TotalPrice = a * b;
                    DB.AddAssetTables.Add(AT);
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

        [Route("UpdateAsset")]
        [HttpPost]
        public object UpdateAsset(AddAssetTable ast)
        {
            try
            {
                AddAssetTable AT = new AddAssetTable();
                var obj = DB.AddAssetTables.Where(x => x.AssetID == ast.AssetID).ToList().FirstOrDefault();

                if (obj.AssetID > 0)

                {
                    int a = Convert.ToInt32(ast.PricePerItem);
                    int b = Convert.ToInt32(ast.Quantity);
                    obj.AssetName = ast.AssetName;
                    obj.Quantity = ast.Quantity;
                    obj.PricePerItem = ast.PricePerItem;
                    obj.TotalPrice = a * b;
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
        

        [HttpGet]  
        [Route("assetslist")]  
        public object Getasset()
        {  
            var emp = DB.AddAssetTables.ToList();  
            return emp;  
        }

        [Route("deleteasset")]
        [HttpDelete]  
        public object Deleteasset(int id)
        {
            var obj = DB.AddAssetTables.Where(x => x.AssetID == id).ToList().FirstOrDefault();  
            DB.AddAssetTables.Remove(obj);  
            DB.SaveChanges();  
            return new Response  
            {  
                Status = "Delete",  
                Message = "Delete Successfuly"  
            };  
        }
        [Route("assetdetails")]
        [HttpGet]
        public object assetdetailById(int id)
        {
            var obj = DB.AddAssetTables.Where(x => x.AssetID == id).ToList().FirstOrDefault();
            return obj;
        }  
    }

}
