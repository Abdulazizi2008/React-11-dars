import React from "react";

const Projects = () => {
  return (
    <div>
      <main className="pt-[120px]">
        <div className="abcd text-center pt-[178px] pb-[73px]">
          <div className="text-[70px] font-[400] text-white">Our Project</div>
        </div>
        <div className="m-w-[1920px] my-0 mx-[auto] py-0 px-[20px]">
          <section className="pt-[37px] flex justify-center">
            <div className="border-[1px] rounded-[18px] border-[#CDA274] w-[880px]">
              <button className="w-[219px] bg-white text-[#CDA274] duration-[.4s] py-[26px] px-[66px] rounded-[18px] hover:bg-[#CDA274] hover:text-white">
                Bathroom
              </button>
              <button className="w-[219px] bg-white text-[#CDA274] duration-[.4s] py-[26px] px-[66px] rounded-[18px] hover:bg-[#CDA274] hover:text-white">
                Bedroom
              </button>
              <button className="w-[219px] bg-white text-[#CDA274] duration-[.4s] py-[26px] px-[66px] rounded-[18px] hover:bg-[#CDA274] hover:text-white">
                Kitchen
              </button>
              <button className="w-[219px] bg-white text-[#CDA274] duration-[.4s] py-[26px] px-[66px] rounded-[18px] hover:bg-[#CDA274] hover:text-white">
                Living Area
              </button>
            </div>
          </section>
          <section className="pt-[38px] flex items-center justify-center gap-[50px]">
            <div className="flex flex-col justify-center w-[580px] text-start">
              <img src="/Rec.png" alt="" />
              <div>
                <p className="text-[25px] font-[400] text-[#292F36]">
                  Minimal Bedroom
                </p>
                <p className="text-[22px] font-[400] text-[#4D5053]">
                  Decor / Artchitecture
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center w-[580px] text-start">
              <img src="/Rect.png" alt="" />
              <div>
                <p className="text-[25px] font-[400] text-[#292F36]">
                  Minimal Bedroom
                </p>
                <p className="text-[22px] font-[400] text-[#4D5053]">
                  Decor / Artchitecture
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-black py-6 text-center text-white mt-12">
        Copyright @ 2022 | Abdulaziz
      </footer>
    </div>
  );
};

export default Projects;
