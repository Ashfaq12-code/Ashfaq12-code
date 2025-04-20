using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using System.Windows.Forms;

namespace WindowsFormsApp2
{
    internal class DataAddTeachers
    {
        SqlConnection connect = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\AKAM\OneDrive\Documents\student.mdf;Integrated Security=True;Connect Timeout=30;Encrypt=False");
        public int ID { set; get; }
        public string TeacherID { set; get; }

        public string TeacherName { set; get; }
        public string TeacherGender { set; get; }
        public string TeacherAddres { set; get; }
        public string TeacherImage { set; get; } 
        public string Status { set; get; }

        public List<DataAddTeachers> addTeacher()
        {
            List<DataAddTeachers> listTeacher = new List<DataAddTeachers>();
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
                            DataAddTeachers dataTD = new DataAddTeachers();
                            dataTD.ID = (int)reader["id"];
                            dataTD.TeacherID = reader["teacher_id"].ToString();
                            dataTD.TeacherName = reader["teacher_name"].ToString() ;
                            dataTD.TeacherGender = reader["teacher_geder"].ToString() ;
                            dataTD.TeacherAddres = reader["teacher_Address"].ToString();
                            dataTD.Status = reader["teacher_status"].ToString();

                            listTeacher.Add(dataTD);
                        }
                        reader.Close();
                    }
                } 
                catch(Exception ex)
                {
                    Console.WriteLine("Error Connecting Database: " + ex);
                }
                finally
                {
                    connect.Close();
                }
            }
            return listTeacher;
               
            }



        }
    }

