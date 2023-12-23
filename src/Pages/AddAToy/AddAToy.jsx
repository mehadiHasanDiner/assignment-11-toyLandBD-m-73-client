import { useForm } from "react-hook-form";
import Banner from "../../Shared/Banner";
import { Link } from "react-router-dom";

const AddAToy = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <Banner>Add a Toy</Banner>
      <p className="text-center text-2xl font-bold mt-10 mb-4 text-red-800 bg-orange-200 p-2 rounded-md shadow-md">
        {" "}
        Submit your toy's details{" "}
      </p>
      <div className="card  w-full shadow-2xl bg-base-200 border-2 border-gray-400">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body -mb-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              {...register("name", {
                required: true,
              })}
              type="text"
              placeholder="Name"
              className="input input-bordered"
            />
            {errors.email && (
              <p className="text-red-600 mt-1">Please check the Name.</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              {...register("email", {
                required: true,
              })}
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email && (
              <p className="text-red-600 mt-1">Please check the Email.</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password && (
              <p className="text-red-600 mt-1">Please check the Password.</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              {...register("url", { required: true })}
              type="url"
              placeholder="Photo Url"
              className="input input-bordered"
            />
            {/* {errors.password && (
                <p className="text-red-600 mt-1">Please check the Password.</p>
              )}             */}
          </div>
          <span className="text-warning text-center"></span>
          <div className="form-control">
            <button className="btn btn-active capitalize text-lg">
              Sign Up
            </button>
          </div>
          {/* <span className="text-success text-center"> success</span> */}

          <label className="label">
            <span>
              Already have an account?
              <Link
                to="/signIn"
                className="text-center label-text-alt link link-hover hover:font-bold text-lg text-pink-700"
              >
                {" "}
                Sign In!
              </Link>
            </span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default AddAToy;
