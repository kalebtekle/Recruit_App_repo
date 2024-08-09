import registerImage from "../assets/register.svg";

const Register = () => {
    return (
        <div className="bg-[#F0F0F0] p-20 flex">
      <div className="w-[50%] bg-[#003366]">
        <img src={registerImage} alt="Sign in" className="p-5" />
      </div>
      <div className="w-[50%] space-y-4 mr-20 p-4">
        <h1 className="text-5xl font-bold">Sign Up</h1>
        <p className="text-gray-500">Sign up to make your account</p>
        <input
          placeholder="Username"
          className="border border-black w-full rounded-lg p-3"
        />
        <input
          placeholder="Password"
          className="border border-black w-full rounded-lg p-3"
        />
          <input
          placeholder="Confirm Password"
          className="border border-black w-full rounded-lg p-3"
        />
        <button className="border border-black bg-white text-black rounded-lg w-full py-3 px-8">
          Account Info
        </button>
        
      </div>
    </div>
    )
}

export default Register