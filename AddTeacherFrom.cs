using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data;
using System.Data.SqlClient;

namespace WindowsFormsApp2
{
    public partial class AddTeacherFrom : UserControl
    {
        SqlConnection connect = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\AKAM\OneDrive\Documents\student.mdf;Integrated Security=True;Connect Timeout=30");
        public AddTeacherFrom()
        {
            InitializeComponent();

            teacherDisplayData();
        }

        public void teacherDisplayData()
        {
            AddTeacherData addTD = new AddTeacherData();

            teacher_gridDatas.DataSource = addTD.teacherData();

        }


        private void teacher_addBtn_Click(object sender, EventArgs e)
        {
            AddTeacherData addTD = new AddTeacherData();

            teacher_gridDatas.DataSource = addTD.teacherData();
        }
    }
}
