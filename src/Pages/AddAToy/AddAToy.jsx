import { useForm } from "react-hook-form";
import Banner from "../../Shared/Banner";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const AddAToy = () => {
  const { user } = useContext(AuthContext);

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
      <div className="card  w-full shadow-2xl bg-base-200 border-2 border-orange-400">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body -mb-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Toy's Name</span>
            </label>
            <input
              {...register("toyName", {
                required: true,
              })}
              type="text"
              placeholder="Toy's Name"
              className="input input-bordered"
            />
            {errors.toyName && (
              <p className="text-red-600 mt-1">Please check the toy name.</p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Toy image URL</span>
            </label>
            <input
              {...register("url", { required: true })}
              type="url"
              placeholder="Toy Image Url"
              className="input input-bordered"
            />
            {errors.url && (
              <p className="text-red-600 mt-1">Please check the toy image.</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold"> Seller Name</span>
            </label>
            <input
              {...register("name", {
                required: true,
              })}
              type="text"
              placeholder="Name"
              className="input input-bordered"
              defaultValue={user?.displayName}
            />
            {errors.email && (
              <p className="text-red-600 mt-1">Please check the Name.</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Seller Email</span>
            </label>
            <input
              {...register("email", {
                required: true,
              })}
              type="email"
              placeholder="email"
              className="input input-bordered"
              defaultValue={user.email}
            />
            {errors.email && (
              <p className="text-red-600 mt-1">Please check the Email.</p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Seller Email</span>
            </label>

            <select
              className="text-input input-bordered"
              {...register("category")}
            >
              <option value="Engineering">engineering</option>
              <option value="Editor">Editor</option>
              <option value="writer">Writer</option>
              <option value="Developer">Developer</option>
            </select>

            {/* <input
              {...register("email", {
                required: true,
              })}
              type="email"
              placeholder="email"
              className="input input-bordered"
              defaultValue={user.email}
            /> */}
            {errors.email && (
              <p className="text-red-600 mt-1">Please check the Email.</p>
            )}
          </div>

          <span className="text-warning text-center"></span>
          <div className="form-control">
            <button className="btn btn-warning text-lg mb-6 mt-2">
              Submit
            </button>
          </div>
          {/* <span className="text-success text-center"> success</span> */}
        </form>
      </div>
    </div>
  );
};

export default AddAToy;
