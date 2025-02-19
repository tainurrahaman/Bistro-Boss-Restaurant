import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const refCaptcha = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleValidateCaptcha = () => {
    const userCaptchaValue = refCaptcha.current.value;
    if (validateCaptcha(userCaptchaValue)) {
      setDisabled(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro_Boss || Login</title>
      </Helmet>{" "}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div className="mb-3">
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <label className="h-[40px]">
                  {" "}
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  ref={refCaptcha}
                  className="input mt-2"
                  placeholder="Type above captcha"
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-sm"
                >
                  Validate
                </button>
                <button
                  disabled={disabled}
                  className="btn bg-[#D1A054] font-bold text-[20px] btn-neutral mt-4 border-none"
                >
                  Login
                </button>
              </fieldset>
            </form>
            <div className="flex justify-center mb-3">
              <p className="text-[#D1A054] font-medium text-[20px]">
                New here?{" "}
                <Link to="/signup" className="font-bold">
                  Create New Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
