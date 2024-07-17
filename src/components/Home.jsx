import React from "react";

const Home = () => {
  return (
    <main className="pt-[120px]">
      <div className="m-w-[1920px] my-0 mx-[auto] py-0 px-[20px]">
        <section className="pt-[30px] pl-[150px]">
          <div className="all pl-[25px] h-[758px] w-[1210px]  flex flex-col justify-center items-start gap-4 ">
            <div className="text-[65px] font-[400] text-white">
              Let's make your <br /> home beautiful together
            </div>
            <p className="text-[22px] font-[500] text-white">
              There are many variations of the passages <br /> of lorem Ipsum
              fromavailable, majority.
            </p>
            <button className=" bg-[#CDA274] py-[26px] px-[48px]  rounded-[18px] text-white max-w-[227px] w-[100%] duration-[.4s]  hover:bg-white hover:text-[#CDA274] hover:border-[#CDA274]">
              Get starter
            </button>
          </div>
        </section>
        <section className="pt-[95px]">
          <div className="flex items-center justify-center">
            <div className="text-center max-w-[358px] w-[100%] flex flex-col justify-center gap-[26px]">
              <p className="text-[25px] font-[500] text-[#292F36]">
                Project Plan
              </p>
              <p className="text-[22px] font-[400] text-[#292F36]">
                There are many variations of the <br /> passages of lorem Ipsum
                from <br />
                available, majority.
              </p>
              <p className="text-[18px] font-[600] text-[#292F36]">Read More</p>
            </div>
            <div className="text-center max-w-[358px] w-[100%] flex flex-col justify-center gap-[26px]">
              <p className="text-[25px] font-[500] text-[#292F36]">
                Interior Work
              </p>
              <p className="text-[22px] font-[400] text-[#292F36]">
                There are many variations of the <br /> passages of lorem Ipsum
                from <br />
                available, majority.
              </p>
              <p className="text-[18px] font-[600] text-[#292F36]">Read More</p>
            </div>
            <div className="text-center max-w-[358px] w-[100%] flex flex-col justify-center gap-[26px]">
              <p className="text-[25px] font-[500] text-[#292F36]">
                Realization
              </p>
              <p className="text-[22px] font-[400] text-[#292F36]">
                There are many variations of the <br /> passages of lorem Ipsum
                from <br />
                available, majority.
              </p>
              <p className="text-[18px] font-[600] text-[#292F36]">Read More</p>
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-black py-6 text-center text-white mt-12">
        Copyright @ 2022 | Abdulaziz
      </footer>
    </main>
  );
};

export default Home;
