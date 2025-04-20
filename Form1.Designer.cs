namespace WindowsFormsApplication2
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.flowLayoutPanel1 = new System.Windows.Forms.FlowLayoutPanel();
            this.login_exit = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.login_username = new System.Windows.Forms.TextBox();
            this.ds = new System.Windows.Forms.Label();
            this.login_password = new System.Windows.Forms.TextBox();
            this.login_showPassword = new System.Windows.Forms.CheckBox();
            this.login_btn = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // flowLayoutPanel1
            // 
            this.flowLayoutPanel1.BackColor = System.Drawing.Color.White;
            this.flowLayoutPanel1.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("flowLayoutPanel1.BackgroundImage")));
            this.flowLayoutPanel1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center;
            this.flowLayoutPanel1.Dock = System.Windows.Forms.DockStyle.Left;
            this.flowLayoutPanel1.Location = new System.Drawing.Point(0, 0);
            this.flowLayoutPanel1.Name = "flowLayoutPanel1";
            this.flowLayoutPanel1.Size = new System.Drawing.Size(277, 408);
            this.flowLayoutPanel1.TabIndex = 1;
            // 
            // login_exit
            // 
            this.login_exit.AutoSize = true;
            this.login_exit.Cursor = System.Windows.Forms.Cursors.Hand;
            this.login_exit.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.login_exit.Location = new System.Drawing.Point(550, 9);
            this.login_exit.Name = "login_exit";
            this.login_exit.Size = new System.Drawing.Size(17, 16);
            this.login_exit.TabIndex = 2;
            this.login_exit.Text = "X";
            this.login_exit.Click += new System.EventHandler(this.label1_Click);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(308, 74);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(145, 24);
            this.label2.TabIndex = 3;
            this.label2.Text = "Login Account";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.Location = new System.Drawing.Point(309, 153);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(87, 15);
            this.label3.TabIndex = 4;
            this.label3.Text = "User Name :";
            // 
            // login_username
            // 
            this.login_username.Location = new System.Drawing.Point(312, 173);
            this.login_username.Multiline = true;
            this.login_username.Name = "login_username";
            this.login_username.Size = new System.Drawing.Size(227, 27);
            this.login_username.TabIndex = 5;
            // 
            // ds
            // 
            this.ds.AutoSize = true;
            this.ds.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ds.Location = new System.Drawing.Point(309, 210);
            this.ds.Name = "ds";
            this.ds.Size = new System.Drawing.Size(77, 15);
            this.ds.TabIndex = 6;
            this.ds.Text = "Password :";
            // 
            // login_password
            // 
            this.login_password.Location = new System.Drawing.Point(312, 232);
            this.login_password.Multiline = true;
            this.login_password.Name = "login_password";
            this.login_password.Size = new System.Drawing.Size(227, 27);
            this.login_password.TabIndex = 7;
            this.login_password.TextChanged += new System.EventHandler(this.login_password_TextChanged);
            // 
            // login_showPassword
            // 
            this.login_showPassword.AutoSize = true;
            this.login_showPassword.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.login_showPassword.Location = new System.Drawing.Point(425, 267);
            this.login_showPassword.Name = "login_showPassword";
            this.login_showPassword.Size = new System.Drawing.Size(114, 19);
            this.login_showPassword.TabIndex = 8;
            this.login_showPassword.Text = "Show Password";
            this.login_showPassword.UseVisualStyleBackColor = true;
            this.login_showPassword.CheckedChanged += new System.EventHandler(this.login_showPassword_CheckedChanged);
            // 
            // login_btn
            // 
            this.login_btn.BackColor = System.Drawing.Color.Red;
            this.login_btn.Font = new System.Drawing.Font("Rockwell", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.login_btn.ForeColor = System.Drawing.Color.White;
            this.login_btn.Location = new System.Drawing.Point(312, 290);
            this.login_btn.Name = "login_btn";
            this.login_btn.Size = new System.Drawing.Size(74, 30);
            this.login_btn.TabIndex = 9;
            this.login_btn.Text = "LOGIN";
            this.login_btn.UseVisualStyleBackColor = false;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Silver;
            this.ClientSize = new System.Drawing.Size(581, 408);
            this.Controls.Add(this.login_btn);
            this.Controls.Add(this.login_showPassword);
            this.Controls.Add(this.login_password);
            this.Controls.Add(this.ds);
            this.Controls.Add(this.login_username);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.login_exit);
            this.Controls.Add(this.flowLayoutPanel1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.FlowLayoutPanel flowLayoutPanel1;
        private System.Windows.Forms.Label login_exit;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox login_username;
        private System.Windows.Forms.Label ds;
        private System.Windows.Forms.TextBox login_password;
        private System.Windows.Forms.CheckBox login_showPassword;
        private System.Windows.Forms.Button login_btn;
    }
}

