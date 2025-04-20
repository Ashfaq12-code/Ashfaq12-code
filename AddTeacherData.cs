using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;


namespace WindowsFormsApp2
{
     class AddTeacherData
    {
        SqlConnection connect = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\AKAM\OneDrive\Documents\student.mdf;Integrated Security=True;Connect Timeout=30");
        public int ID { set; get; }
        public string TeacherID { set; get; }

        public string TeacherName { set; get; }
        public string TeacherGender { set; get; }
        public string TeacherAddres { set; get; }
        public string TeacherImage { set; get; }
        public string Status { set; get; }

        public List<AddTeacherData> teacherData()
        {
            List<AddTeacherData> listData = new List<AddTeacherData>();
            if (connect.State != ConnectionState.Open)
            {
                try
                {
                    connect.Open();

                    string sql = "SELECT = FROM teachers WHERE date_delete IS NULL";

                    using (SqlCommand cmd = new SqlCommand(sql, connect))
                    {
                        SqlDataReader reader = cmd.ExecuteReader();

                        while (reader.Read())
                        {
                            AddTeacherData addTD = new AddTeacherData();
                            addTD.ID = (int)reader["id"];
                            addTD.TeacherID = reader["teacher_id"].ToString();
                            addTD.TeacherName = reader["teacher_name"].ToString();
                            addTD.TeacherGender = reader["teacher_geder"].ToString();
                            addTD.TeacherAddres = reader["teacher_Address"].ToString();
                            addTD.Status = reader["teacher_status"].ToString();

                            listData.Add(addTD);
                        }
                        reader.Close();
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error Connecting Database: " + ex);
                }
                finally
                {
                    connect.Close();
                }
            }
            return listData;

        }



    }
}
        
    

