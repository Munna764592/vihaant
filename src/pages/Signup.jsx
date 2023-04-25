import React, { useState } from "react";
import img991 from "../assets/img991.png";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { registerValidation } from "../components/helper/Validate";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { registerUser } from "../components/helper/helper";

function Signup() {
  // const router = useRouter();

  const navigate = useNavigate();
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let registerPromise = registerUser(values);
      toast.promise(registerPromise, {
        loading: "Creating...",
        success: <b> Register Successfully...! </b>,
        error: <b>Could not Register.</b>
      });

      registerPromise.then(function () {
        navigate("/");
        // router.push('/Login')
      });
    }
  });
  return (
    <div>
      <section className="h-screen bg-black text-white">
        <div className="h-full px-6 text-neutral-800 dark:text-neutral-200">
          <Toaster position="top-center" reverseOrder={false} />
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img src={img991} className="w-full" alt="Sample img" />
            </div>
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="mb-0 mr-4 text-lg text-white">Sign up with</p>
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inlne-block mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white transition duration-150 ease-in-out">
                    {/* <!-- Facebook --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inlne-block mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white transition duration-150 ease-in-out">
                    {/* <!-- Twitter --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inlne-block mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white transition duration-150 ease-in-out">
                    {/* <!-- Linkedin --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </button>
                </div>

                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                    OR
                  </p>
                </div>

                <TextField
                  {...formik.getFieldProps("username")}
                  className="bg-white rounded-md"
                  name="username"
                  label="username"
                  fullWidth
                  style={{ margin: "10px 0px" }}
                />
                <TextField
                  {...formik.getFieldProps("email")}
                  className="bg-white rounded-md"
                  name="email"
                  label="email"
                  fullWidth
                  style={{ margin: "10px 0px" }}
                />
                <TextField
                  {...formik.getFieldProps("password")}
                  className="bg-white rounded-md"
                  name="password"
                  label="password"
                  fullWidth
                  style={{ margin: "10px 0px" }}
                />
                <div className="mb-6 flex items-center justify-between">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"></div>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="btn-s"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Register
                  </button>
                  <p className="mt-2 mb-0 pt-1 text-white text-sm font-semibold">
                    Have an account?
                    <a
                      href="/"
                      className="ml-2 text-blue-400 text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">
                      Login
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
