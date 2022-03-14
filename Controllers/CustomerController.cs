using CustomerDataApplication.DatabaseAccessLayer;
using CustomerDataApplication.Models;
using Newtonsoft.Json;
using System;
using System.Configuration;
using System.Data;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Web.Mvc;

namespace CustomerDataApplication.Controllers
{
    public class CustomerController : Controller
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["DBModels"].ConnectionString.ToString());

        DB dblayer = new DatabaseAccessLayer.DB();

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult getAll()
        {
            using (DBModels dataContext = new DBModels())
            {
                var employeeList = dataContext.Customers.ToList();
                return Json(employeeList, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult addCustomer(Customer customer)

        {
            string res = string.Empty;
            try

            {
                dblayer.addCustomer(customer);
                res = "Successfully Inserted...!";
            }
            catch (Exception)
            {
                res = "Failed";
            }
            return Json(res, JsonRequestBehavior.AllowGet);
        }

        public JsonResult getCustomerByNo(string customerNo)
        {
            using (DBModels dataContext = new DBModels())
            {
                int no = Convert.ToInt32(customerNo);
                var customerList = dataContext.Customers.Find(no);
                return Json(customerList, JsonRequestBehavior.AllowGet);
            }
        }
        public string updateCustomer(Customer customer)
        {
            if (customer != null)
            {
                using (DBModels dataContext = new DBModels())
                {
                    int no = Convert.ToInt32(customer.ID);
                    var customerList = dataContext.Customers.Where(x => x.ID == no).FirstOrDefault();
                    customerList.CustomerName = customer.CustomerName;
                    customerList.Class = customer.Class;
                    customerList.Phone = customer.Phone;
                    customerList.Email = customer.Email;
                    customerList.Comment = customer.Comment;
                    dataContext.SaveChanges();
                    return "Customer Updated";
                }
            }
            else
            {
                return "Invalid Customer";
            }
        }
        public string deleteCustomer(Customer customer)
        {
            if (customer != null)
            {
                using (DBModels dataContext = new DBModels())
                {
                    int no = Convert.ToInt32(customer.ID);
                    var customerList = dataContext.Customers.Where(x => x.ID == no).FirstOrDefault();
                    dataContext.Customers.Remove(customerList);
                    dataContext.SaveChanges();
                    return "Customer Deleted";
                }
            }
            else
            {
                return "Invalid Customer";
            }
        }
    }
}
