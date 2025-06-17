import { Link } from "react-router";
import { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Authentication/firebase.init";
import Swal from "sweetalert2";
import { useContext } from "react";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { signInUser, SignInWithGoogle, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setErrorMessage("");

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must have one lowercase, one uppercase, one digit, and be 6 characters or longer."
      );
      return;
    }

    // Sign in user
    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        Swal.fire({
          icon: "success",
          title: "Logged In!",
          text: `${loggedUser.displayName} you are successfully logged In`,
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          // Navigate after alert closes
          navigate("/");
        });

        // Fetch user profile from database
        fetch(`https://room-hatch-server.vercel.app/${email}`)
          .then((res) => res.json())
          .then((userDataFromDb) => {
            // Update Firebase displayName and photoURL
            return updateProfile(auth.currentUser, {
              displayName: userDataFromDb.name,
              photoURL: userDataFromDb.photoURL,
            }).then(() => {
              // Set enriched user to context
              const enrichedUser = {
                ...loggedUser,
                displayName: userDataFromDb.name,
                photoURL: userDataFromDb.photoURL,
              };
              setUser(enrichedUser);
            });
          });
      })
      .catch((error) => setErrorMessage(error.message));
  };

  const handleGoogleSignup = () => {
    SignInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((err) => setErrorMessage(err.message));
  };

  return (
    <div className="mx-auto max-w-7xl my-10 flex justify-center px-6 md:px-20">
      <div className="card bg-base-100 w-full max-w-sm shadow-sm border border-red-600">
        <div className="card-body">
          <h2 className="text-2xl text-center">Login</h2>
          <form onSubmit={handleLogin}>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />

            <div className="relative">
              <label className="label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-6 top-6 btn btn-xs"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {errorMessage && <p className="text-red-600">{errorMessage}</p>}

            <button type="submit" className="btn btn-neutral mt-4 w-full">
              Login
            </button>
          </form>

          <p className="text-center text-lg font-bold my-2">or</p>

          <div>
            <button
              onClick={handleGoogleSignup}
              className="cursor-pointer py-2 bg-base-200 w-full rounded flex items-center justify-center gap-2"
            >
              <FcGoogle size={25} />
              Sign Up with Google
            </button>
          </div>

          <p className="text-center mt-4">
            New user? Please{" "}
            <Link className="text-blue-500 underline" to="/signUp">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
