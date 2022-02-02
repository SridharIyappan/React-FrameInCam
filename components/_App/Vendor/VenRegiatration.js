import axios from "axios";
import { useState } from "react";
import { Tabs, TabPanel } from "react-tabs";

const VendorRegistration = () => {
  const [vendorName, setVendorName] = useState('');
  const [vendorType, setVendorType] = useState('');
  const [vendorEmail, setVendorEmail] = useState('');
  const [vendorMobileNo, setVendorMobileNo] = useState('');
  const [vendorPassword, setVendorPassword] = useState('');

  const [otp, setOtp] = useState("");
  const [token, setToken] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [displaypopupotp, setDisplayPopupOtp] = useState(false);

  const [vendorRegisterError, setVendorRegisterError] = useState([]);

  const togglePopupOtp = () =>{
    setDisplayPopupOtp(!displaypopupotp);
    console.log(displaypopupotp);
  }

  const vendorRegistrationSubmit = async(e) => {
    e.preventDefault();
    
    const data = {
        id: 0,
        name: vendorName,
        typeId: 1,
        email: vendorEmail,
        mobile: vendorMobileNo,
        description: null,
        description: null,
        paymentTerms: null,
        additionalCost: null,
        experienceLovId: 0,
        siteUrl: null,
        fbUrl: null,
        instagramUrl: null,
        youtubeUrl: null,
        isactive: 0,
        password: vendorPassword
    }
      try {
          const vendorRegistration = await axios.post('https://apiv1.frameincam.com/api/account/register-vendor', data);
          if(vendorRegistration.data.token !== null) {  
            setDisplayPopupOtp(!displaypopupotp);
            console.log('token error otp')
            setToken(vendorRegistration.data.token)
            try {
              const sendOTP = await axios.post(
                `https://apiv1.frameincam.com/api/transaction/project/sendotp?t=${vendorRegistration.data.token}`
              );
              console.log(sendOTP);
              console.log(token);
            } catch (error) {
              console.log(err);
            }
          } else {
            setVendorRegisterError(vendorRegistration.data.errorMsgs);
            setIsOpen(!isOpen);
          }
          console.log(vendorRegistration.data);
      } catch (error) {
          console.log(error);
      }
  }

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
            ? 'modal loginRegisterModal show'
            : 'modal loginRegisterModal'
        }
        id='loginRegisterModal'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <Tabs>
              <button type='button' className='close' onClick={togglePopupOtp}>
                <i className='bx bx-x'></i>
              </button>
              <div className='tab-content' id='myTabContent'>
                <TabPanel>
                  <div className='tab-pane fade show active' id='c'>
                    <div className='miran-login'>
                      <div className='login-with-account'>
                        {/* <span>Enter OTP</span> */}
                      </div>                     
                      <form onSubmit={verifyOTPSubmit}>
                        <div className='form-group'>
                          <input
                            type='text'
                            placeholder='Enter a OTP'
                            className='form-control'
                            onChange={e => setOtp(e.target.value)}
                          />
                        </div>
                        <button type='submit'>Submit</button>
                      </form>
                    </div>
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>


    <div className="miran-register">
      <div className="register-with-account">
        {/* <span>Register with</span> */}
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
      <form onSubmit={vendorRegistrationSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Vendor Name"
            className="form-control"
            onChange={e => setVendorName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <select
            className="dashbaord-category-select"
            className="form-control"
            onChange={e => setVendorType(e.target.value)}
            required
          >
            <option>Select Vendor Type</option>
            <option>Photographer</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            className="form-control"
            onChange={e => setVendorEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            placeholder="Mobile Number"
            className="form-control"
            onChange={e => setVendorMobileNo(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            onChange={e => setVendorPassword(e.target.value)}
            required
          />
        </div>
        <h4>{isOpen && vendorRegisterError[0]}</h4>
        <button type="submit">Register Now</button>
      </form>
    </div>
    </>
  );
};

export default VendorRegistration;
