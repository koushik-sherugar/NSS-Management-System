import React, { useState } from "react";
import axios from "axios";
const SendMail = () => {
  const [sent, setSent] = useState(false);
  const [text, setText] = useState("");

  const handlesend = async () => {
    setSent(true);
    try {
      await axios.post("http://localhost:5000/api/send_mail", {
        text,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-96">
      <h1>email</h1>
      {!sent ? (
        <form onSubmit={handlesend}>
          <input
            type="text"
            className="border-4 "
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
      ) : (
        <h1>Email sent</h1>
      )}
    </div>
  );
};

export default SendMail;
