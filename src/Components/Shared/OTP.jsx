import React from 'react'

function OTP() {

    const phone = 1
    const otp = 1234
    const countdown = 30

    function handleResend () {
        
    }

  return (

    <section className="container-fluid bg-body-tertiary d-block" style={{ height: '100vh' }}>
    <div className="row justify-content-center" style={{ display: 'flex', alignContent: 'center' }}>
      <div className="col-12 col-md-6 col-lg-4" style={{ minWidth: '500px', marginTop: '100px' }}>
        <div className="card bg-white mb-1 mt-5" style={{ boxShadow: '0 12px 15px rgba(0, 0, 0, 0.02)', display: 'flex', alignItems: 'center' }}>
          <div className="card-body p-5 text-center">
            <h4>Verify</h4>
            <p>Your code was sent to <span>{phone}</span></p>
            <form action={`/user/otp/${phone}`} method="post">
              <div className="otp-field mb-4">
                <input
                  type="number"
                  name="digit1"
                  maxLength="1"
                  style={{ border: '2px solid grey' }}
                  className="otp_input"
                  value={otp.digit1}
                  onChange={(e) => handleChange(e, 'digit1')}
                />
                <input
                  type="number"
                  name="digit2"
                  maxLength="1"
                  style={{ border: '2px solid grey' }}
                  className="otp_input"
                  value={otp.digit2}
                  onChange={(e) => handleChange(e, 'digit2')}
                />
                <input
                  type="number"
                  name="digit3"
                  maxLength="1"
                  style={{ border: '2px solid grey' }}
                  className="otp_input"
                  value={otp.digit3}
                  onChange={(e) => handleChange(e, 'digit3')}
                />
                <input
                  type="number"
                  name="digit4"
                  maxLength="1"
                  style={{ border: '2px solid grey' }}
                  className="otp_input"
                  value={otp.digit4}
                  onChange={(e) => handleChange(e, 'digit4')}
                />
              </div>
              <button type="submit" className="btn mb-3" style={{ backgroundColor: '#00224e', color: 'white' }}>
                Verify
              </button>
            </form>

            <div className="otp-timer mb-3" id="otp-timer">
              Resend OTP in {countdown}s
            </div>
            <form action="/resendOTP" method="post">
              <input type="hidden" name="userid" value="" />
              <input type="hidden" name="email" value="" />
              <button
                className="btn mb-3"
                id="resend"
                style={{ backgroundColor: '#00224e', color: 'white' }}
                type="button"
                onClick={handleResend}
                disabled={countdown > 0}
              >
                Resend OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>)
}

export default OTP