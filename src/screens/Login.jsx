import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import BeatLoader from "react-spinners/BeatLoader";

const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const auth = useAuth();

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    console.log(input.username, input.password);

    if (input.username !== "" && input.password !== "") {
      //dispatch action from hooks

      auth.loginAction(input);
      return;
    }
    alert("please provide a valid input");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="mt-44">
      {auth.isLoading ? (
        <BeatLoader />
      ) : (
        <form className="flex flex-col gap-4 " onSubmit={handleSubmitEvent}>
          <div className="flex gap-12">
            <label htmlFor="user-username">Username:</label>
            <input
              className="bg-slate-200 px-4"
              type="text"
              id="user-username"
              name="username"
              placeholder="example@yahoo.com"
              aria-describedby="user-username"
              aria-invalid="false"
              onChange={handleInput}
            />
            <div id="user-username" className="sr-only">
              Please enter a valid username. It must contain at least 6
              characters.
            </div>
          </div>
          <div className="flex gap-4">
            <label htmlFor="password">Password:</label>
            <input
              className="bg-slate-200 px-4"
              type="password"
              id="password"
              name="password"
              aria-describedby="user-password"
              aria-invalid="false"
              onChange={handleInput}
            />
            <div id="user-password" className="sr-only">
              your password should be more than 6 character
            </div>
          </div>
          <button className="bg-green-600 text-white py-2 px-4 rounded-lg w-44">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
