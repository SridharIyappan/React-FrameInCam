import { useState } from "react";
import axios from "axios";

const CustomerLoginForm = (props) => {
  const [loginMobileNo, setLoginMobileNo] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const nameChange = (e) => {
    setLoginMobileNo(e.target.value);
  };
  const passwordChange = (e) => {
    setLoginPassword(e.target.value);
  };

  const loginSubmit = async(e) => {
    e.preventDefault();
    const data = {
      username: loginMobileNo,
      password: loginPassword,
      scope: "Customer",
    };
    try {
      const customerLogin = await axios.post(
        "https://apiv1.frameincam.com/api/account/connect",
        data
      );
      const token = customerLogin.data.token;
      console.log(customerLogin.data);
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login-with-account">
        <span>Login with</span>
        <ul>
          <li>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i> Facebook
            </a>
          </li>
          <li>
            <a
              href="#"
              className="twitter"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img src="/images/google.png" width={25} />{" "}
              <span style={{ color: "#4686f7" }}>G</span>
              <span style={{ color: "#e74137" }}>o</span>
              <span style={{ color: "#f2bb13" }}>o</span>
              <span style={{ color: "#4686f7" }}>g</span>
              <span style={{ color: "#50a856" }}>l</span>
              <span style={{ color: "#e74f40" }}>e</span>
              {/* <i class="bx bxl-google" aria-hidden="true"></i> Google */}
            </a>
          </li>
        </ul>
      </div>
      <span className="sub-title">
        <span>Or login with</span>
      </span>
      <form onSubmit={loginSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Mobile No"
            className="form-control"
            onChange={nameChange}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            onChange={passwordChange}
          />
        </div>

        <button type="submit">Login Now</button>
      </form>
    </>
  );
};

export default CustomerLoginForm;
