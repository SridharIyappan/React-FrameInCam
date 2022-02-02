import { useState } from "react";
import axios from "axios";

const OtpVerification = (props) => {

  const [otp, setOtp] = useState("");

  const otpChange = (e) => {
    setOtp(e.target.value);
  };

  const verifyOTPSubmit = async (e) => {
    e.preventDefault();
    console.log(otp);
    try {
      const verifyOTP = await axios.post(
        `https://apiv1.frameincam.com/api/transaction/project/confirmotp/${otp}?t=${props.tok}`
      );
      console.log(verifyOTP);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="tab-pane" id="otp">
        <div className="miran-register">
          <div className="register-with-account">
            <span>Enter a OTP</span>
          </div>
          <form onSubmit={verifyOTPSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter a OTP"
                className="form-control"
                onChange={otpChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default OtpVerification;
