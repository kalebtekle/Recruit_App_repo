const Navbar = () => {
  return (
<nav className="bg-white py-3">
  <div className="container mx-auto flex items-center justify-between">
    <a className="flex items-center" href="#">
      <span className="bg-primary rounded-full flex justify-center items-center mr-2 p-2"></span>
      <span className="font-bold text-lg">StarResume</span>
    </a>

    {/* Search input */}
    <div className="flex-grow mx-10">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 border border-gray-300 rounded"
      />
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
    <i className="fa fa-search"></i>
  </span>
    </div>

    <div id="navcol-3" className="hidden md:flex items-center">
      <div
        className="btn btn-primary bg-blue-600 text-white px-4 py-2 rounded-lg">
        Username
      </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
