import React from "react";
import "../assets/css/signup.css";

const StudentStaffLogin = () => {
  return (
    <div class="signin-menu">
      <div class="signin-formbox">
        <center>
          {/* <img src="assets/images&gif/others/login.jpg" class="signin-avatar"> */}
          //style="width:90px;height:90px;"
          <h1
          //style="color:#009879;"
          >
            LOGIN
          </h1>
        </center>
        <div class="signin-buttonbox">
          <div id="signin-btn"></div>
          <button //style="outline:none"
            type="button"
            class="signin-toggle-btn"
            onclick="login1()"
          >
            Patient
          </button>
          <button
            //style="outline:none"
            type="button"
            class="signin-toggle-btn"
            onclick="login2()"
          >
            Doctor
          </button>
        </div>

        <form id="login1" class="signin-input-group" autocomplete="off">
          <input
            type="text"
            name="pat_email"
            class="signin-input-field"
            placeholder="Email Id"
            required
          />

          <span class="eye" onclick="pat_eye()">
            <i
              id="hide1"
              class="fa fa-eye"
              //style="margin-bottom: auto;color:#009879;"
            ></i>
            <i
              id="hide2"
              class="fa fa-eye-slash"
              //style="margin-bottom: auto;color:#009879;"
            ></i>
          </span>

          <input
            type="password"
            name="pat_password"
            class="signin-input-field"
            id="myinput1"
            placeholder="Enter Password"
          />
          <br />
          <br />
          <center>
            <button
              type="submit" //style="outline:none"
              name="pat_login"
              class="signin-submit-btn"
            >
              Patient login
            </button>
          </center>
        </form>

        <form id="login2" class="signin-input-group" autocomplete="off">
          <input
            type="text"
            name="doc_email"
            class="signin-input-field"
            placeholder="Email Id"
            required
          />

          <span class="eye" onclick="doc_eye()">
            <i
              id="hide3"
              class="fa fa-eye"
              //style="margin-bottom: auto;color:#009879;"
            ></i>
            <i
              id="hide4"
              class="fa fa-eye-slash" //style=" margin-bottom: auto;color:#009879;"
            ></i>
          </span>

          <input
            type="password"
            name="doc_password"
            class="signin-input-field"
            id="myinput2"
            placeholder="Enter Password"
          />
          <br />
          <br />
          <center>
            <button
              type="submit" //style="outline:none" name="doc_login"
              class="signin-submit-btn"
            >
              Doctor login
            </button>
          </center>
        </form>
      </div>
    </div>
    // </div>
  );
};

export default StudentStaffLogin;
