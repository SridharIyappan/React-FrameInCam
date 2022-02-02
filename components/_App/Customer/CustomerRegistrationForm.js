import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

const Tabs = dynamic(
  import("react-tabs").then((mod) => mod.Tabs),
  { ssr: false }
);
import { resetIdCounter, Tab, TabList, TabPanel } from "react-tabs";

const CustoemrRegistrationForm = () => {

  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerMobile, setRegisterMobile] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [customerRegisterError, setCustomerRegisterError] = useState([]);

  const [displaypopupotp, setDisplayPopupOtp] = useState(false);

  const [token, setToken] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(customerRegisterError);
  }, [customerRegisterError]);

  const registerFullNameChange = (e) => {
    setRegisterName(e.target.value);
  };
  const registerEmailChange = (e) => {
    setRegisterEmail(e.target.value);
  };
  const registerNumberChange = (e) => {
    setRegisterMobile(e.target.value);
  };
  const registerPasswordChange = (e) => {
    setRegisterPassword(e.target.value);
  };

  const togglePopupOtp = () => {
    setDisplayPopupOtp(!displaypopupotp);
    console.log(displaypopupotp);
  };

  const customerRegisterSubmit = async (e) => {
    e.preventDefault();
    const data = {
      addressLine1: null,
      addressLine2: null,
      alternateMobile: null,
      city: null,
      cityGeoId: 0,
      code: 0,
      email: registerEmail,
      name: registerName,
      id: 0,
      isactive: 0,
      mobile: registerMobile,
      password: registerPassword,
      pincode: null,
      state: null,
      stateGeoId: 0,
    };
    try {
      const customerRegistration = await axios.post(
        "https://apiv1.frameincam.com/api/account/register-vendor",
        data
      );
      if (customerRegistration.data.token !== null) {
        setDisplayPopupOtp(!displaypopupotp);
        console.log("token error otp");
        setToken(vendorRegistration.data.token);
        try {
          const sendOTP = await axios.post(
            `https://apiv1.frameincam.com/api/transaction/project/sendotp?t=${customerRegistration.data.token}`
          );
          console.log(sendOTP);
          console.log(token);
        } catch (error) {
          console.log(err);
        }
      } else {
        setCustomerRegisterError(customerRegistration.data.errorMsgs);
        setIsOpen(!isOpen);
      }
      console.log(customerRegistration.data);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOTPSubmit = async (e) => {
    e.preventDefault();
    console.log(otp);
    try {
      const verifyOTP = await axios.post(
        `https://apiv1.frameincam.com/api/transaction/project/confirmotp/${otp}?t=${token}`
      );
      console.log(verifyOTP.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Otp pup new view */}
      <div
        className={
          displaypopupotp
            ? "modal loginRegisterModal show"
            : "modal loginRegisterModal"
        }
        id="loginRegisterModal"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <Tabs>
              <button type="button" className="close" onClick={togglePopupOtp}>
                <i className="bx bx-x"></i>
              </button>
              <div className="tab-content" id="myTabContent">
                <TabPanel>
                  <div className="tab-pane fade show active" id="c">
                    <div className="miran-login">
                      <div className="login-with-account">
                        {/* <span>Enter OTP</span> */}
                      </div>
                      <form onSubmit={verifyOTPSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Enter a OTP"
                            className="form-control"
                            onChange={e => setOtp(e.target.value)}
                          />
                        </div>
                        <button type="submit">Submit</button>
                      </form>
                    </div>
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="tab-pane" id="register">
        <div className="miran-register">
          <div className="register-with-account">
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
          <span className="popup-opt">
            <span>Or Register with</span>
          </span>
          <form onSubmit={customerRegisterSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="User Name"
                className="form-control"
                onChange={registerFullNameChange}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                onChange={registerEmailChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Mobile number"
                className="form-control"
                onChange={registerNumberChange}
                minLength={10}
                maxLength={10}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                onChange={registerPasswordChange}
              />
            </div>
            {/* Error Showing Start */}
            <h4>{isOpen && customerRegisterError}</h4>
            {/* ErrorEnd */}

            <button type="submit">Register Now</button>
          </form>
          <span className="already-account">
            Already have an account? <a href="#">Login Now</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default CustoemrRegistrationForm;
