import signInImage from "../assets/signin.svg";

const Login = () => {
  return (
    <div className="bg-[#F0F0F0] p-20 flex">
      <div className="w-[50%]">
        <img src={signInImage} alt="Sign in" />
      </div>
      <div className="w-[50%] space-y-4 mr-20 ">
        <h1 className="text-5xl font-bold">Sign in</h1>
        <p className="text-gray-500">Sign in to access your account</p>
        <input
          placeholder="username"
          className="border border-black w-full rounded-lg p-3"
        />
        <input
          placeholder="password"
          className="border border-black w-full rounded-lg p-3"
        />
        <button className="border border-black bg-white text-black rounded-lg py-3 px-8">
          Sign in
        </button>
        <a href="#" className="text-blue-500 underline ml-5">
          Forgot password?
        </a>
      </div>
    </div>
  );
};

export default Login;
