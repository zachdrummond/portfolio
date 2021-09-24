import "./Contact.css";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Section from "../../Components/Section/Section";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Section id="Contact" name="Contact">
      {/* Form */}
      <form className="row" id="row2" onSubmit={handleSubmit(onSubmit)}>
        {/* Form - Name */}
        <div className="col-sm-12 pb-2" id="Name">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="username"
              name="name"
              placeholder="Name"
              aria-describedby="Name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Please enter your name",
                },
                maxLength: {
                  value: 30,
                  message: "Please use 30 characters or less",
                },
              })}
            />
            {errors.name && (
              <span className="errorMessage">{errors.name.message}</span>
            )}
            <label htmlFor="username" className="form-label">
              Name
            </label>
          </div>
        </div>
        {/* Form - Email */}
        <div className="col-sm-12 pb-2" id="Email">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="userEmail"
              name="email"
              placeholder="Email"
              aria-describedby="Email"
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />
            {errors.email && (
              <span className="errorMessage">
                Please enter a valid email address
              </span>
            )}
            <label htmlFor="userEmail" className="form-label">
              Email
            </label>
          </div>
        </div>
        {/* Form - Message */}
        <div className="col-sm-12 pb-2" id="Message">
          <div className="form-floating">
            <textarea
              className="form-control"
              id="userMessage"
              name="message"
              placeholder="Message"
              aria-describedby="Message"
              {...register("message", {
                required: true,
              })}
            />
            {errors.message && (
              <span className="errorMessage">Please enter a message</span>
            )}
            <label htmlFor="userMessage">Message</label>
          </div>
        </div>
        {/* Form - Button */}
        <div className="col-sm-12" id="submitButton">
          <button type="submit" className="btn btn-primary color">
            Submit
          </button>
        </div>
      </form>
    </Section>
  );
};

export default Contact;
