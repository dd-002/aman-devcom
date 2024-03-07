import * as React from "react";

function Coursepage(props) {
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex justify-center items-center self-stretch px-16 py-5 w-full text-xl text-white whitespace-nowrap bg-sky-950 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/334df95dbe63c2a9b204488db52c446d22227446f92b1763e03800823c5df983?"
            className="my-auto aspect-[16.67] w-[500px] max-md:max-w-full"
          />
          <div className="flex gap-5 justify-between items-center max-md:flex-wrap max-md:max-w-full">
            <div className="self-stretch my-auto">Home</div>
            <div className="flex-auto self-stretch my-auto">Department</div>
            <div className="self-stretch my-auto">Statistics</div>
            <img
              loading="lazy"
              srcSet="..."
              className="shrink-0 self-stretch rounded-full aspect-square w-[35px]"
            />
          </div>
        </div>
      </div>
      <div className="px-0.5 mt-24 w-full max-w-[1200px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center text-white max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col items-start px-16 py-6 bg-sky-950 max-md:px-5 max-md:max-w-full">
                <div className="text-4xl font-bold leading-[50px]">
                  Data Structures and <br />
                  Algorithms
                </div>
                <div className="flex gap-2.5 justify-center mt-4 text-2xl tracking-normal leading-8 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/836c85c6867821b63d94a1e1d55eff86adc60a3b9592431478453be22de0080c?"
                    className="shrink-0 max-w-full aspect-[5.26] w-[201px]"
                  />
                  <div className="flex-auto my-auto">(4.5)</div>
                </div>
                <div className="mt-4 text-base tracking-normal leading-8">
                  <span className="font-bold text-white">Rank: </span>
                  <span className="text-white">1</span>
                  <br />
                  <span className="font-bold text-white">Course code:</span> CSE
                  304
                  <br />
                  <span className="font-bold text-white">Department:</span>{" "}
                  Computer science and engineering
                  <br />
                  <span className="font-bold text-white">Type:</span> Theory
                  <br />
                  <span className="font-bold text-white">Credit:</span> 6<br />
                  <span className="font-bold text-white">Offered in:</span>{" "}
                  Spring
                  <br />
                  <span className="font-bold text-white">Instructor:</span>{" "}
                  Prof. James
                  <br />
                  <span className="font-bold text-white">Slot: </span>
                  <span className="text-white">5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-14 py-11 w-full text-base leading-8 text-white border border-solid bg-sky-950 border-black border-opacity-30 max-md:px-5 max-md:mt-10">
              <div className="justify-center items-center px-16 py-12 text-4xl text-black whitespace-nowrap bg-blue-300 border border-black border-solid max-md:px-5">
                CSE
              </div>
              <div className="mt-9 tracking-normal">
                <span className="font-bold text-white">Address: </span>
                <br />
                Kanwal Rekhi Building, Department of Computer Science and
                Engineering, Indian Institute of Technology (IIT) Bombay, Powai,
                Mumbai 400 076.
              </div>
              <div className="mt-9 tracking-normal">
                <span className="font-bold text-white">Contact details:</span>
                <br />
                Phone no. : +91-22-2576 7901/02
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="..."
        className="mt-24 w-full aspect-[3.57] max-w-[1200px] max-md:mt-10 max-md:max-w-full"
      />
      <div className="mt-28 text-4xl font-bold text-black max-md:mt-10 max-md:max-w-full">
        Your review
      </div>
      <div className="items-start pt-5 pr-16 pb-52 pl-6 mt-20 max-w-full text-base tracking-normal text-center whitespace-nowrap bg-white rounded-xl border border-solid shadow-sm border-sky-950 text-zinc-500 w-[584px] max-md:px-5 max-md:pb-10 max-md:mt-10">
        Write your review here
      </div>
      <div className="flex gap-5 justify-between mt-8 max-w-full text-base tracking-normal whitespace-nowrap w-[375px]">
        <div className="flex-1 justify-center px-14 py-2.5 text-black rounded-md border border-solid bg-neutral-200 border-zinc-500 max-md:px-5">
          Clear
        </div>
        <div className="flex-1 justify-center px-12 py-3 text-center text-white bg-cyan-600 rounded-lg max-md:px-5">
          Submit
        </div>
      </div>
      <div className="mt-28 text-4xl font-bold text-black max-md:mt-10 max-md:max-w-full">
        Other Courses
      </div>
      <div className="flex gap-5 justify-between px-5 mt-20 w-full text-white max-w-[1200px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/186ca4408169b2f1dedc0c309c3283d4c97f09aafc16dce95f52909060af52cb?"
          className="shrink-0 my-auto w-2.5 border-2 border-solid aspect-[0.31] border-sky-950 stroke-[2px] stroke-sky-950"
        />
        <div className="flex flex-col flex-1 justify-center">
          <div className="flex flex-col pb-12 pl-7 bg-sky-950 max-md:pl-5">
            <div className="overflow-hidden relative z-10 flex-col self-end pt-px pr-6 pb-20 pl-16 text-5xl whitespace-nowrap aspect-square text-sky-950 max-md:pr-5 max-md:pl-6 max-md:text-4xl">
              <img
                loading="lazy"
                srcSet="..."
                className="object-cover absolute inset-0 size-full"
              />
              3
            </div>
            <div className="mt-0 text-3xl font-bold">
              Robotics and Simulation
            </div>
            <div className="mt-5 text-base leading-6">
              Rating: 4.2
              <br />
              Credit: 6<br />
              Instructor: Prof. Professor’s name
              <br />
              Slot: 3
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center">
          <div className="flex flex-col pb-12 pl-7 bg-sky-950 max-md:pl-5">
            <div className="overflow-hidden relative z-10 flex-col self-end pt-px pr-6 pb-20 pl-16 text-5xl whitespace-nowrap aspect-square text-sky-950 max-md:pr-5 max-md:pl-6 max-md:text-4xl">
              <img
                loading="lazy"
                srcSet="..."
                className="object-cover absolute inset-0 size-full"
              />
              3
            </div>
            <div className="mt-0 text-3xl font-bold">
              Robotics and Simulation
            </div>
            <div className="mt-5 text-base leading-6">
              Rating: 4.2
              <br />
              Credit: 6<br />
              Instructor: Prof. Professor’s name
              <br />
              Slot: 3
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center">
          <div className="flex flex-col pb-12 pl-7 bg-sky-950 max-md:pl-5">
            <div className="overflow-hidden relative z-10 flex-col self-end pt-px pr-6 pb-20 pl-16 text-5xl whitespace-nowrap aspect-square text-sky-950 max-md:pr-5 max-md:pl-6 max-md:text-4xl">
              <img
                loading="lazy"
                srcSet="..."
                className="object-cover absolute inset-0 size-full"
              />
              3
            </div>
            <div className="mt-0 text-3xl font-bold">
              Robotics and Simulation
            </div>
            <div className="mt-5 text-base leading-6">
              Rating: 4.2
              <br />
              Credit: 6<br />
              Instructor: Prof. Professor’s name
              <br />
              Slot: 3
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cba6bc0a6b3e0895b3f69e27225c58127dcff0aaac514d9433c45adbf858a23?"
          className="shrink-0 my-auto w-2.5 border-2 border-solid aspect-[0.31] border-sky-950 stroke-[2px] stroke-sky-950"
        />
      </div>
      <div className="flex flex-col items-center self-stretch px-16 pt-8 pb-20 mt-24 w-full bg-sky-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between pl-20 mb-12 max-w-full w-[1200px] max-md:flex-wrap max-md:pl-5 max-md:mb-10">
          <div className="flex-auto text-sm text-neutral-400">
            IIT Bombay, Maharashtra
          </div>
          <div className="flex-wrap justify-center content-center pl-14 text-base text-center text-white whitespace-nowrap">
            Home
          </div>
        </div>
      </div>
    </div>
  );
}


export default Coursepage;