import React, { useState } from "react";
import Header from "./Header";
import { ValidData } from "../utils/Validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import{useNavigate} from "react-router-dom";

const Login = () => {
const navigate = useNavigate();
  const [toggle, settoggle] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    password: "",
  });
  const [error, setError] = useState();
  //   const auth = getAuth();
  const handleClick = () => {
    settoggle(!toggle);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const email = formData.email;
    const password = formData.password;
    const message = ValidData(email, password);
    setError(message);
    if (message) return;
    //Sign In and SingUp Logic
    if (!toggle) {
      //   // SignUP Logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    } else {
      //SignIn Logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="image-container">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg"
          alt=""
        />
      </div>
      <form
        className="absolute p-12 bg-black w-3/12 mt-36 mx-auto right-0 left-0 text-white rounded-lg form"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {toggle ? "Sign In" : "Sign UP"}
        </h1>
        <input
          type="text"
          placeholder="Please Enter Email.."
          className="p-3 my-4 w-full bg-gray-700"
          name="email"
          value={formData.name}
          onChange={handleChange}
        />
        {!toggle && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-700"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
          />
        )}
        <input
          type="password"
          placeholder="Please Enter Password.."
          className="p-3 my-4 w-full bg-gray-700"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <p className="text-red-500 font-bold text-lg py-2">{error}</p>
        <button
          className=" py-4 bg-red-700 w-full my-6 rounded-lg"
          onClick={handleSubmit}
        >
          {toggle ? "Sign In" : "Sign UP"}
        </button>
        <p className="p-3 cursor-pointer" onClick={handleClick}>
          {toggle
            ? "New to Netflix? Sign up now."
            : "Already Registerd? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
