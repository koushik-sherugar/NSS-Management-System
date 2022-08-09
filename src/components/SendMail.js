import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const SendMail = () => {
  // const [msg, setMsg] = useState("");
  const [user, setUser] = useState({
    to: "",
  });

  const { to } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/send-mail", user)
      .then((response) => toast.success("email sent")
      // setMsg(response.data.respMesg)
      );
  };
  return (
    <div className="container">
      <h3 className="text-center text-success mb-2 mt-4">Email Send</h3>
      <h6 className="text-secondary text-center mb-4 mt-1">Enter email</h6>
      <div class="row">
        <div className="col-sm-4 mx-auto shadow p-5">
          <h4 className="text-center mb-2">Send E Mail </h4>
          {/* <p class="mb-3 mt-2" style={{ color: "green", marginLeft: "57px" }}>
            <b>{msg}</b>
          </p> */}
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="To"
              name="to"
              onChange={onInputChange}
              value={user.to}
            />
          </div>

          <button
            onClick={onSubmit}
            className="btn btn-primary btn-block "
            style={{ marginLeft: "100px" }}
          >
            Send Mail
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMail;

// const SendMail = () => {
//   const [sent, setSent] = useState(false);
//   const [text, setText] = useState("");

//   const handlesend = async () => {
//     setSent(true);
//     try {
//       await axios.post("http://localhost:5000/api/send_mail", {
//         text,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div className="h-96">
//       <h1>email</h1>
//       {!sent ? (
//         <form onSubmit={handlesend}>
//           <input
//             type="text"
//             className="border-4 "
//             onChange={(e) => setText(e.target.value)}
//           />
//           <button type="submit">submit</button>
//         </form>
//       ) : (
//         <h1>Email sent</h1>
//       )}
//     </div>
//   );
// };

// export default SendMail;
