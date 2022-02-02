import axios from "axios";
import { useState } from "react";

const VendorLogin = () => {
  const [loginMobileNo, setLoginMobileNo] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const customerLoginSubmit = async(e) => {
    e.preventDefault();
    const data = {
      username: loginMobileNo,
      password: loginPassword,
      scope: "Vendor",
    };
    try {
      const vendorLogin = await axios.post("https://apiv1.frameincam.com/api/account/connect", data);
      const token = vendorLogin.data.token;
      localStorage.setItem('token', token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    
        <div className="miran-login">
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
          <form onSubmit={customerLoginSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Mobile No"
                className="form-control"
                onChange={e => setLoginMobileNo(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                onChange={e => setLoginPassword(e.target.value)}
              />
            </div>

            <button type="submit">Login</button>
          </form>
          <span className="dont-account">
            Don't have an account? <a href="#">Register Now</a>
          </span>
        </div>
      
  );
};

export default VendorLogin;
