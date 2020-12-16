using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AssetManagement.Models;

namespace AssetManagement.Controllers
{
    [RoutePrefix("api/user")]
    public class LoginController : ApiController
    {
        
        
            AssetEntities DB = new AssetEntities();
            [Route("Login")]
            [HttpPost]
            public IHttpActionResult Login(Login login)
            {
                if(login.Name=="Admin" && login.Password == "admin")
            {
                return Ok(new { status = 201, isSuccess = true, message = "User Login successfully"});
            }
            else
            {
                var log = DB.RegisterTables.Where(x => x.Name.Equals(login.Name) && x.Password.Equals(login.Password)).FirstOrDefault();

                if (log == null)
                {
                    return Ok(new { status = 401, isSuccess = false, message = "Invalid User", });
                }
                else

                    return Ok(new { status = 200, isSuccess = true, message = "User Login successfully", UserDetails = log });
            }
                
            }
            [Route("Insert")]
            [HttpPost]
            public object Insert(RegisterTable Reg)
            {
                try
                {

                    RegisterTable EL = new RegisterTable();
                    if (EL.ID == 0)
                    {
                        EL.Name = Reg.Name;
                        EL.Mobile = Reg.Mobile;
                        EL.Email = Reg.Email;
                        EL.Department = Reg.Department;
                        EL.Password = Reg.Password;
                        DB.RegisterTables.Add(EL);
                        DB.SaveChanges();
                        return new Response
                        { Status = "Success", Message = "Record SuccessFully Saved." };
                    }
                }
                catch (Exception ex)
                {
                Console.WriteLine(ex.Message);   
                }
                return new Response
                { Status = "Error", Message = "Invalid Data." };
            }


        [Route("UpdateUser")]
        [HttpPost]
        public object Updateuser(RegisterTable ast)
        {
            try
            {
                var obj = DB.RegisterTables.Where(x => x.ID == ast.ID).ToList().FirstOrDefault();

                if (obj.ID > 0)

                {

                    obj.Name = ast.Name;
                    obj.Mobile = ast.Mobile;
                    obj.Email = ast.Email;
                    obj.Department= ast.Department;
                    obj.Password = ast.Password;
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



        [Route("UserList")]
        [HttpGet]
        public object Getuser()
        {

            {
                var emp = DB.RegisterTables.ToList();
                return emp;
            }

        }

        [Route("DeleteUser")]
        [HttpDelete]
        public object Deleteuser(int id)
        {
            var obj = DB.RegisterTables.Where(x => x.ID == id).ToList().FirstOrDefault();
            DB.RegisterTables.Remove(obj);
            DB.SaveChanges();
            return new Response
            {
                Status = "Delete",
                Message = "Delete Successfuly"
            };
        }
        [Route("UserDetailsbyID")]
        [HttpGet]
        public object assetdetailById(int id)
        {
            var obj = DB.RegisterTables.Where(x => x.ID == id).ToList().FirstOrDefault();
            return obj;
        }
    }
}
