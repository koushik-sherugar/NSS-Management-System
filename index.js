const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./database/db");
const router = require("./Routes/router");
const path = require("path");
const buildPath = path.join(__dirname, "..", "build");
app.use(express.static(buildPath));

const nodemailer = require("nodemailer");
require("dotenv").config();

app.use(cors());
app.use(router);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// staff REGISTRATION  LOGIN

app.post("/api/staffregister", (req, res) => {
  const {
    college_id,
    staff_name,
    contact_no,
    staff_email,
    trained,
    training_center,
    trained_year,
  } = req.body;

  const sqlStaffReg =
    "Insert into staff (college_id, staff_name, contact_no, staff_email, trained, training_center, trained_year) VALUES(?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sqlStaffReg,
    [
      college_id,
      staff_name,
      contact_no,
      staff_email,
      trained,
      training_center,
      trained_year,
    ],
    (error, request) => {
      if (error) {
        console.log(error);
      }
    }
  );
});

app.get("/api/stafflogin", (req, res) => {
  const { staff_name, staff_email } = req.body;

  const sqlStafflogin =
    "Select * FROM staff WHERE staff_name = ? AND staff_email = ?";
  db.query(
    sqlStafflogin,
    [staff_name, staff_email],

    (error, result) => {
      if (error) {
        console.log(error);
        res.send({ error: error });
      }
      console.log(result);
      res.send(result);
    }

    //   (error, result) =>

    // {
    //   if (error) {
    //     console.log(error);
    //   }
    //   if (result) {
    //     res.send(result);
    //   } else {
    //     res.send({ message: "wrong name and password" });
    //   }
    // }
  );
});

//stdent REGISTRATION LOGIN

app.post("/api/studentregister", (req, res) => {
  const {
    first_name,
    last_name,
    parent_name,
    aadhar_no,
    email_id,
    gender,
    blood_group,
    dob,
    mob_no,
    category,
    street_address,
    city,
    postal_code,
    state_name,
    university_name,
    college_name,
    course,
    university_id,
    register_no,
    college_id,
    interests,
    achievements,
  } = req.body;

  const sqlStudentReg =
    "Insert into student (first_name, last_name, parent_name, aadhar_no, email_id, gender, blood_group, dob, mob_no, category, street_address, city, postal_code, state_name, university_name, college_name, course, university_id, register_no, college_id, interests, achievements) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sqlStudentReg,
    [
      first_name,
      last_name,
      parent_name,
      aadhar_no,
      email_id,
      gender,
      blood_group,
      dob,
      mob_no,
      category,
      street_address,
      city,
      postal_code,
      state_name,
      university_name,
      college_name,
      course,
      university_id,
      register_no,
      college_id,
      interests,
      achievements,
    ],
    (error, request) => {
      if (error) {
        console.log(error);
      }
    }
  );
});

// list StudentRegister
app.get("/api/liststudents", (req, res) => {
  const sqlGet = "SELECT * from student";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

app.post("/api/studentlogin", (req, res) => {
  const { first_name, register_no } = req.body;

  const sqlStafflogin =
    "Select * FROM student WHERE first_name = ? AND register_no = ?";
  db.query(sqlStafflogin, [first_name, register_no], (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
  });
});

app.delete("/api/delete_student/:register_no", (req, res) => {
  const { register_no } = req.params;
  console.log("delete ID: ", register_no);

  const sqlRemove = "DELETE FROM student WHERE register_no = ?";
  db.query(sqlRemove, register_no, (error, request) => {
    if (error) {
      console.log(error);
    }
  });
});

//**************************************************************** */
//*********************ACTIVITY MODULE******************************************* */

app.post("/api/addactivity", (req, res) => {
  const { college_id, activity_name, date, total_present, report, image } =
    req.body;

  const sqlInsert =
    "Insert into activity (college_id , activity_name, date ,total_present, report, image) VALUES( ?, ?, ?, ?, ?, ?) ";
  db.query(
    sqlInsert,
    [college_id, activity_name, date, total_present, report, image],
    (error, request) => {
      if (error) {
        console.log(error);
      }
    }
  );
});

app.get("/api/listactivity", (req, res) => {
  const sqlGet = "SELECT * from activity";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

app.delete("/api/delete_activity/:activity_name", (req, res) => {
  const { activity_name } = req.params;
  console.log("delete ID: ", activity_name);

  const sqlRemove = "DELETE FROM activity WHERE activity_name = ?";
  db.query(sqlRemove, activity_name, (error, request) => {
    if (error) {
      console.log(error);
    }
  });
});
//**************************************************************** */

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * from university";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

app.post("/api/post", (req, res) => {
  const { university_name, university_email } = req.body;

  const sqlInsert =
    "Insert into university (university_name, university_email) VALUES( ?, ?) ";
  db.query(sqlInsert, [university_name, university_email], (error, request) => {
    if (error) {
      console.log(error);
    }
  });
});

app.delete("/api/remove/:university_id", (req, res) => {
  const { university_id } = req.params;
  // console.log("delete ID: ", university_id);

  const sqlRemove = "DELETE FROM university WHERE university_id = ?";
  db.query(sqlRemove, university_id, (error, request) => {
    if (error) {
      console.log(error);
    }
  });
});

//edituni
app.get("/api/get/:university_id", (req, res) => {
  const { university_id } = req.params;

  const sqlGet = "SELECT * FROM university WHERE id = ?";
  db.query(sqlGet, university_id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

app.put("/api/put/:university_id", (req, res) => {
  const { university_id } = req.params;
  const { university_name, university_email } = req.body;

  const sqlUpdate =
    "UPDATE university SET university_name = ?, university_email = ? WHERE university_id= ?";
  db.query(
    sqlUpdate,
    [university_name, university_email, university_id],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      res.send(result);
    }
  );
});

app.get("/", (req, res) => {
  //   const sqlInsert =
  //     "Insert into university (university_name, university_email) VALUES('bck', 'test1@gmail.com') ";
  //   db.query(sqlInsert, (err, result) => {
  //     console.log("error", err);
  //     console.log("result", result);

  res.send("hello");
  //   });
});

//*********************college MODULE******************************************* */

app.get("/api/listcollege", (req, res) => {
  const sqlGet = "SELECT * from college";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

app.post("/api/addcollege", (req, res) => {
  const {
    university_id,
    college_name,
    college_email,
    college_address,
    college_contact_no,
  } = req.body;

  const sqlInsert =
    "INSERT into college ( university_id, college_name , college_email, college_address ,college_contact_no) VALUES( ?, ?, ?, ?, ?) ";
  db.query(
    sqlInsert,
    [
      university_id,
      college_name,
      college_email,
      college_address,
      college_contact_no,
    ],
    (error, request) => {
      if (error) {
        console.log(error);
      }
    }
  );
});

app.delete("/api/delete_college/:college_id", (req, res) => {
  const { college_id } = req.params;
  console.log("delete ID: ", college_id);

  const sqlRemove = "DELETE FROM college WHERE college_id = ?";
  db.query(sqlRemove, college_id, (error, request) => {
    if (error) {
      console.log(error);
    }
  });
});

//edituni
app.get("/api/get/:university_id", (req, res) => {
  const { university_id } = req.params;

  const sqlGet = "SELECT * FROM university WHERE id = ?";
  db.query(sqlGet, university_id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

app.put("/api/put/:university_id", (req, res) => {
  const { university_id } = req.params;
  const { university_name, university_email } = req.body;

  const sqlUpdate =
    "UPDATE university SET university_name = ?, university_email = ? WHERE university_id= ?";
  db.query(
    sqlUpdate,
    [university_name, university_email, university_id],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      res.send(result);
    }
  );
});

//mail

app.post("/api/send-email", (req, res) => {
 
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
   });
   
  let mailOptions = {
    from: "kaushiksherugar2001@gmail.com", 
    to: req.body.to, //"kotegarkoushik@gmail.com",
    subject: "Approval status of NSS registration", 
    text: "Description of the mail",
    html: `
      <div style="padding:15px;border-style: ridge">
      <h1>NSS management system</h1>
      <h3 style="color:black">Approval details</h3>
      <ul style="color:black">
          current status: <p style="color:green"> Approved</p>
          <br>
          You can login now and can access the services provided by us
      </ul>
      `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error " + err);
      res.json({ status: true, respMesg: "Email Sent Successfully" });
    } else {
      console.log("Email sent successfully");
      res.json({ status: true, respMesg: "Email Sent Successfully" });
    }
  });
});


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
