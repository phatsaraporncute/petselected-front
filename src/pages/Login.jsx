import { Link } from "react-router-dom";

import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { login, getMe } from "../api/authApi";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const { user, setUser } = useAuth();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = (e) => {
    e.preventDefault();
    // validation

    login(input)
      .then((rs) => {
        // console.log(rs.data.token)
        localStorage.setItem("token", rs.data.token);
        let token = localStorage.getItem("token");
        return getMe(token);
      })
      .then((rs) => {
        // console.log(rs.data)
        setUser(rs.data);
        navigate("/");
      })
      .catch((err) => alert(err.response.data.error || err.message));
  };

  return (
    <div>
      <div className="bg-white w-full flex justify-center items-center  h-[calc(100vh-300px)]">
        <div className="bg-gray-100 p-20 flex justify-center flex-col rounded-2xl w-full lg:max-w-2xl shadow-sm border-none">
          <h1 className="text-graynav font-semibold text-3xl mb-12 flex justify-center">
            Login
          </h1>
          <div className="flex flex-col justify-center items-center">
            <form className="w-96 text-graynav" onSubmit={hdlSubmit}>
              <input
                type="text"
                placeholder="E-mail"
                name="email"
                value={input.email}
                className="block rounded-md border py-3.5 focus:ring-1 w-full max-w-md bg-white mt-3 text-sm pl-6"
                onChange={hdlChangeInput}
                // {...register("email")}
              />
              {/* {errors.email && (
                <p className="text-red-500 font-light text-xs max-w-md">
                  {errors.email.message}
                </p>
              )} */}
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={input.password}
                className="block rounded-md border py-3.5 focus:ring-1 w-full max-w-md bg-white mt-3 text-sm pl-6"
                onChange={hdlChangeInput}
                // {...register("password")}
              />
              {/* {errors.password && (
                <p className="text-red-500 font-light text-xs max-w-md ">
                  {errors.password.message}
                </p>
              )} */}
              <button
                className="btn btn-active mt-10 rounded-full text-white w-full max-w-md bg-graynav"
                type="submit"
              >
                Login
              </button>
            </form>

            <button className="mt-7 text-graynav underline w-full max-w-md">
              <Link
                to="/register"
                className="mt-7 text-graynav underline w-full max-w-md"
              >
                Sign up
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
