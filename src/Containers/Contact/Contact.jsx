import "./Contact.css";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

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
    <main className="container">
      <div className="row justify-content-center">
        <div className="card col-md-12 mt-5 bg-light">
          <div className="card-body">
            <div className="row" id="row1">
              <div className="col-sm-2">
                {/* Link to Email */}
                <a
                  className="navbar-brand"
                  href="mailto: zachdrummond3@gmail.com"
                >
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 16 16"
                    className="bi bi-envelope"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                    />
                  </svg>
                </a>
                {/* Link to Cell Phone Number */}
                <a href="tel: +4047830028">
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 16 16"
                    className="bi bi-telephone"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>
                </a>
              </div>
              {/* Header - Contact */}
              <div className="col-sm-10" id="Header">
                <h2 id="Contact" className="card-title fw-bold font me-5 pe-5">Contact</h2>
              </div>
            </div>
            <hr />
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
