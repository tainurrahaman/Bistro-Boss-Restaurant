import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const { createNewUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createNewUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photo)
        .then(() => {
          console.log("user profile updated");
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro_Boss || SignUp</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label font-bold text-md">Name</label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Enter your Name"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
                <label className="fieldset-label font-bold text-md">
                  Photo URL
                </label>
                <input
                  {...register("photo", { required: true })}
                  type="text"
                  className="input"
                  placeholder="Enter your Photo URL"
                />
                {errors.photo && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
                <label className="fieldset-label font-bold text-md">
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
                <label className="fieldset-label font-bold text-md">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 6,
                    pattern:
                      /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/,
                  })}
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">Password is required</span>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    {" "}
                    Password have at least one uppercase, one lowercase, one
                    number and one special character
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">
                    {" "}
                    Password have minimum 6 characters
                  </p>
                )}
                <button className="btn bg-[#D1A054] text-slate-800 font-bold text-[20px] btn-neutral mt-4 border-none">
                  SignUp
                </button>
              </fieldset>
            </form>
            <div className="flex justify-center mb-3">
              <p className="text-[#D1A054] font-medium text-[20px]">
                Already registered?{" "}
                <Link to="/login" className="font-bold">
                  Go to Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
