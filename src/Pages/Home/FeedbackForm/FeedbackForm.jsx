import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (formData) => {
    fetch("http://localhost:5000/feedbacks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Your toy's data submitted successfully!",
            icon: "success",
          });
        }
      });
    reset();
  };
  return (
    <>
      <div className="mt-16 bg-base-100 font-serif">
        <h1 className="text-2xl text-center font-bold mb-3 text-pink-600">
          Give your Valuable Feedback
        </h1>
        <div className="toyCard-container items-center">
          <div>
            <img
              className=""
              src="https://fluencyfirst93830951.files.wordpress.com/2021/11/your-feedback-matters-placard-with-bokeh-background.jpeg?w=1000"
              alt=""
            />
          </div>
          <div className="text-center ">
            <div className="card  w-3/4 mx-auto shadow-2xl bg-white">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body -mb-2 pt-2"
              >
                {/*  Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Your Name</span>
                  </label>
                  <input
                    {...register("name", {
                      required: true,
                    })}
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <p className="text-red-600 mt-1">Please check your name.</p>
                  )}
                </div>

                {/* image url */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Your Photo URL</span>
                  </label>
                  <input
                    {...register("url", { required: false })}
                    type="photoUrl"
                    placeholder="Your Photo Url"
                    className="input input-bordered"
                  />
                  {/* {errors.url && (
                    <p className="text-red-600 mt-1">
                      Please check the toy image.
                    </p>
                  )} */}
                </div>

                {/* Category */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Profession</span>
                  </label>

                  <select
                    className="select select-bordered"
                    {...register("profession")}
                  >
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Banker">Banker</option>
                    <option value="Govt. Service">Govt. Service</option>
                    <option value="Pvt. Service">Pvt. Service</option>
                    <option value="Others">Others</option>
                  </select>
                  {errors.profession && (
                    <p className="text-red-600 mt-1">Please check the Email.</p>
                  )}
                </div>

                {/* Feedback */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Your Feedback</span>
                  </label>
                  <textarea
                    {...register("feedback", {
                      required: true,
                    })}
                    type="text"
                    placeholder="feedback"
                    className="textarea  textarea-bordered"
                  />
                  {errors.feedback && (
                    <p className="text-red-600 mt-1">
                      Please check the feedback.
                    </p>
                  )}
                </div>

                <span className="text-warning text-center"></span>
                <div className="form-control">
                  <button className="btn btn-success">Submit</button>
                </div>

                {/* <span className="text-success text-center"> success</span> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
