import { Link } from "react-router-dom";

const JobseekerProfile = () => {
  return (
    <div className="w-full relative bg-lavender-100 overflow-hidden flex flex-col items-center justify-start pt-[25px] px-5 pb-0 box-border gap-[19px] tracking-[normal] leading-[normal]">
      <header className="w-[1120px] rounded-3xs bg-snow flex flex-row items-start justify-between pt-[5px] pb-1.5 pr-[102px] pl-[42px] box-border sticky top-0 z-[99] gap-[20px] max-w-full text-left text-xs text-darkslateblue-100 font-dm-sans">
        <div className="h-[45px] w-[1120px] relative rounded-3xs bg-snow hidden max-w-full" />
        <img
          className="h-[34px] w-[170px] relative rounded object-cover z-[1]"
          loading="lazy"
          alt="Logo"
          src="src/images/logo2.png"
        />
        <div className="w-56 flex flex-col items-start justify-start pt-[9px]">
          <div className="flex flex-row items-start justify-between gap-[20px]">
            <Link to="/" className="relative inline-block min-w-[35px] z-[1]">
              HOME
            </Link>
            <Link to="/contact" className="relative inline-block min-w-[76px] shrink-0 z-[1]">
              CONTACT US
            </Link>
            <div className="relative inline-block min-w-[49px] z-[1]">
              LOGOUT
            </div>
          </div>
        </div>
      </header>

      <main className="w-[1120px] flex flex-row items-start justify-start max-w-full text-base text-white font-dm-sans">
        <aside className="h-[935px] w-[272px] flex flex-col items-start justify-start pt-[265px] pb-[46px] pl-[13px] relative gap-[21px]">
          <div className="self-stretch flex flex-row items-start justify-end">
            <div className="relative inline-block z-[1]">unverified</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end px-[45px] pb-[31px]">
            <div className="flex flex-col items-start justify-start gap-[11px]">
              <div className="flex flex-row items-start justify-start px-[15px]">
                <div className="flex-1 relative z-[1]">First Name</div>
              </div>
              <div className="flex flex-row items-start justify-start px-[15px]">
                <div className="relative inline-block z-[1]">Last Name</div>
              </div>
              <div className="relative inline-block z-[1]">Job Category</div>
            </div>
          </div>

          <div className="w-[265px] h-full absolute top-0 left-0">
            <div className="absolute top-0 left-0 rounded-4xs bg-lightsteelblue w-full h-full" />
            <img
              className="absolute top-[25px] left-[25px] rounded-full w-[216px] h-[223px] object-contain z-[1]"
              loading="lazy"
              alt="Profile"
              src="/profile-pic@2x.png"
            />
            <img
              className="absolute top-[260px] left-[60px] w-[31px] h-[34px] object-cover z-[1]"
              loading="lazy"
              alt="Unverified Shield"
              src="/unverifed-shield-1@2x.png"
            />
          </div>

          <div className="flex-1 flex flex-col items-start justify-start gap-[22px]">
            <button className="cursor-pointer py-[13px] px-12 bg-darkslateblue-200 shadow-inner rounded-4xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-cornflowerblue-300">
              <div className="relative text-base text-white">Account Settings</div>
            </button>
            <button className="cursor-pointer py-[13px] pr-[45px] pl-[72px] bg-darkslateblue-200 shadow-inner rounded-4xs overflow-hidden flex flex-row items-start justify-start gap-[8px] z-[1]">
              <div className="relative text-base text-white">View Offers</div>
              <div className="flex flex-col items-start justify-start pt-[3px]">
                <b className="relative text-sm text-white">(1)</b>
              </div>
            </button>
          </div>
          <button className="cursor-pointer py-4 px-5 bg-darkslateblue-200 w-[244px] shadow-inner rounded-4xs overflow-hidden flex flex-row items-start justify-center z-[1] hover:bg-cornflowerblue-300">
            <div className="relative text-base text-white">Log Out</div>
          </button>
        </aside>

        <section className="flex-1 flex flex-col items-start justify-start pt-3 max-w-[calc(100%-272px)]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[77px] text-darkslateblue-100">
            <div className="flex flex-row items-start justify-start px-1">
              <b className="relative text-xl inline-block">PROFILE</b>
            </div>

            <div className="self-stretch rounded-mini bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start pt-[37px] pb-[50px] pl-[9px] gap-[45px]">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px]">
                <div className="flex-1 flex flex-col items-end justify-start gap-[55px] min-w-[234px]">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
                    <div className="flex-[0.8923] shadow rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-2.5 pb-[17px] pr-[18px] pl-9 gap-[10px]">
                      <div className="w-[170px] h-[101px] relative shadow hidden" />
                      <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                        <div className="self-stretch flex flex-row items-start justify-end">
                          <button className="cursor-pointer py-0 px-3.5 bg-royalblue rounded-4xs overflow-hidden flex flex-row items-start justify-start hover:bg-cornflowerblue-100">
                            <div className="relative text-sm text-white">edit</div>
                          </button>
                        </div>
                        <div className="relative inline-block">Availability</div>
                      </div>
                      <div className="flex flex-row items-start justify-start px-[11px] text-black">
                        <div className="relative inline-block">Full-time</div>
                      </div>
                    </div>
                    <div className="flex-1 shadow rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-2.5 pb-[17px] pr-4 pl-6 gap-[13px]">
                      <div className="w-[170px] h-[101px] relative shadow hidden" />
                      <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
                        <div className="self-stretch flex flex-row items-start justify-end">
                          <button className="cursor-pointer py-0 px-3.5 bg-royalblue rounded-4xs overflow-hidden flex flex-row items-start justify-start hover:bg-cornflowerblue-100">
                            <div className="relative text-sm text-white">edit</div>
                          </button>
                        </div>
                        <div className="relative inline-block">Job-category</div>
                      </div>
                      <div className="flex flex-row items-start justify-start px-[23px] text-black">
                        <div className="relative inline-block">Full-time</div>
                      </div>
                    </div>
                  </div>

                  <div className="self-stretch shadow rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-2 pb-[120.8px] pr-4 pl-[21px] gap-[13px]">
                    <div className="w-[358px] h-52 relative shadow hidden" />
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="w-[97px] flex flex-col items-start justify-start">
                        {/* Additional elements can be added here */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
 
