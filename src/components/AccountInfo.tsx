import accountInfo from "../assets/accountInfo.svg";

const AccountInfo = () => {
  return (
    <div className="bg-[#F0F0F0] p-20 flex">
      <div className="w-[50%] bg-[#003366]">
        <img src={accountInfo} alt="Sign in" className="p-5" />
      </div>
      <div className="w-[50%] space-y-4 mr-20 p-4">
        <h1 className="text-5xl font-bold">Account Info</h1>
        <p className="text-gray-500">What is your profession?</p>
        <div className="space-y-4">
  <label className="flex items-center border border-black w-full rounded-lg p-3">
    <input type="checkbox" className="mr-2" />
    Admin
  </label>
  <label className="flex items-center border border-black w-full rounded-lg p-3">
    <input type="checkbox" className="mr-2" />
    Recruiter
  </label>
  <label className="flex items-center border border-black w-full rounded-lg p-3">
    <input type="checkbox" className="mr-2" />
    Manager
  </label>
</div>
        <button className="border border-black bg-white text-black rounded-lg w-full py-3 px-8">
          Account Info
        </button>
      </div>
    </div>
  );
};

export default AccountInfo;
