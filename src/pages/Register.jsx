import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useNavigate } from "react-router-dom";
import { register as registerApi } from "../api/authApi";
import registerSchema from "../validators/validate-register";

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(registerSchema),
  });

  const onSubmit = (formData) => {
    registerApi(formData)
      .then((rs) => {
        console.log(rs.data);
        navigate("/login");
      })
      .catch((err) => console.log(err.response?.data.error || err.message));
  };

  return (
    <div>
      <div className="bg-white w-full flex justify-center items-center  h-[calc(100vh-200px)]">
        <div className="bg-gray-100 p-20 flex justify-center flex-col rounded-2xl w-full lg:max-w-2xl shadow-sm border-none">
          <h1 className="text-graynav font-semibold text-3xl mb-12 flex justify-center">
            Sign up
          </h1>
          <div className="flex flex-col justify-center items-center">
            <form
              className="w-96 text-graynav"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                placeholder="First Name"
                className="block rounded-md border py-3.5 focus:ring-1 w-full max-w-md bg-white text-sm pl-6 "
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-red-500 font-light text-xs max-w-md">
                  {errors.firstName.message}
                </p>
              )}
              <input
                type="text"
                placeholder="Last Name"
                className="block rounded-md border py-3.5 focus:ring-1 w-full max-w-md bg-white mt-3 text-sm pl-6"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-red-500 font-light text-xs max-w-md">
                  {errors.lastName.message}
                </p>
              )}
              <input
                type="text"
                placeholder="E-mail"
                className="block rounded-md border py-3.5 focus:ring-1 w-full max-w-md bg-white mt-3 text-sm pl-6"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 font-light text-xs max-w-md">
                  {errors.email.message}
                </p>
              )}
              <input
                type="password"
                placeholder="Password"
                className="block rounded-md border py-3.5 focus:ring-1 w-full max-w-md bg-white mt-3 text-sm pl-6"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 font-light text-xs max-w-md ">
                  {errors.password.message}
                </p>
              )}
              <input
                type="password"
                placeholder="Confirm password"
                className="block rounded-md border py-3.5 focus:ring-1 w-full max-w-md bg-white mt-3 text-sm pl-6"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 font-light text-xs max-w-md">
                  {errors.confirmPassword.message}
                </p>
              )}
              <button
                className="btn btn-active mt-10 rounded-full text-white w-full max-w-md bg-graynav"
                type="submit"
              >
                Create account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
