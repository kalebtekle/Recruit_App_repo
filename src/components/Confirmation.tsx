import confirmationImage from "../assets/confirmation.svg";

const Confirmation = () => {
  return (
    <div className="bg-[#F0F0F0] p-20 flex">
      <div className="w-[50%] bg-[#003366]">
        <img src={confirmationImage} alt="Sign in" className="p-5" />
      </div>
      <div className="w-[50%] space-y-4 mr-20 p-5">
        <h1 className="text-5xl font-bold">Confirmation</h1>
        <p className="text-gray-500">Confirm your profile information</p>
        <p className="border border-black w-full rounded-lg p-3">
          Username : Username
        </p>
        <p className="border border-black w-full rounded-lg p-3">
          Role : Manager
        </p>
        <div className="mt-4">
          <button className="border border-black bg-white w-full text-black rounded-lg py-3 px-8">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
