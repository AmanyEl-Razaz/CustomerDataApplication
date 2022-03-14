using CustomerDataApplication.Models;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;


namespace CustomerDataApplication.DatabaseAccessLayer
{
    public class DB
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["DBModels"].ConnectionString);
        public void addCustomer(Customer customer)

        {

            SqlCommand com = new SqlCommand("customer_Data", con);

            com.CommandType = CommandType.StoredProcedure;

            com.Parameters.AddWithValue("@CustomerName", customer.CustomerName);

            com.Parameters.AddWithValue("@Class", customer.Class);

            com.Parameters.AddWithValue("@Phone", customer.Phone);

            com.Parameters.AddWithValue("@Email", customer.Email);

            com.Parameters.AddWithValue("@Comment", customer.Comment);

            con.Open();

            com.ExecuteNonQuery();

            con.Close();


        }
    }
}