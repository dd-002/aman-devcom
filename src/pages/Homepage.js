import * as React from "react";
import CourseList from "../Components/HomepageCourseList";
import logo from "../assets/Title.png"
import iitblogo from "../assets/iitblogo.png"
function Home(props) {
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex justify-center items-center self-stretch px-16 py-5 w-full text-xl text-white whitespace-nowrap bg-sky-950 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src={logo}
            className="my-auto  w-[500px] max-md:max-w-full"
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
      <div className="justify-center self-start py-3 mt-20 ml-32 text-4xl font-bold text-black whitespace-nowrap max-md:mt-10 max-md:ml-2.5">
        Review
      </div>
      <div className="justify-center mt-12 max-w-full w-[1200px] max-md:pr-5 max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base tracking-normal max-md:mt-10">
              <div className="text-center text-black">Department</div>
              <div className="flex flex-col justify-center px-2.5 py-3 mt-2 w-full text-center rounded-md border border-solid bg-neutral-200 border-zinc-500 text-zinc-500">
                <div className="flex gap-5 justify-between">
                  <div className="flex-auto">Select the department</div>
                  <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.91626 1.39905L9.20094 6.60091L16 1.39905" stroke="#A6A6A6" stroke-width="2" stroke-linecap="round" />
                  </svg>

                </div>
              </div>
              <div className="mt-12 text-center text-black max-md:mt-10">
                Course
              </div>
              <div className="flex flex-col justify-center px-2.5 py-3 mt-2 w-full text-center rounded-md border border-solid bg-neutral-200 border-zinc-500 text-zinc-500">
                <div className="flex gap-5 justify-between">
                  <div className="flex-auto">Select the course</div>
                  <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.91626 1.39905L9.20094 6.60091L16 1.39905" stroke="#A6A6A6" stroke-width="2" stroke-linecap="round" />
                  </svg>

                </div>
              </div>
              <div className="flex gap-5 justify-between mt-12 whitespace-nowrap max-md:mt-10">
                <div className="grow justify-center px-14 py-3 text-black rounded-md border border-solid bg-neutral-200 border-zinc-500 max-md:px-5">
                  Clear
                </div>
                <div className="grow justify-center px-12 py-3.5 text-center text-white bg-cyan-600 rounded-lg max-md:px-5">
                  Submit
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center text-base tracking-normal text-center text-black max-md:mt-10 max-md:max-w-full">
              <div className="leading-6 max-md:max-w-full">
                “The instructor's clear explanations and practical examples
                helped me grasp complex concepts easily. The hands-on approach,
                with coding exercises and projects, solidified my understanding
                and boosted my confidence in implementing these concepts. I
                highly recommend this course to anyone looking to strengthen
                their programming skills.&quot;
              </div>
              <div className="mt-5 font-light leading-[156%] max-md:max-w-full">
                Course: Data structure and algorithms
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center self-start py-3 mt-28 ml-32 text-4xl font-bold text-black whitespace-nowrap max-md:mt-10 max-md:ml-2.5">
        Top rated courses
      </div>
      <div class="flex flex-col justify-center p-5 mt-6 w-full text-black rounded-none shadow-sm  max-w-[1200px] max-md:max-w-full border-l-4 border-sky-950">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray dark:bg-sky-950 dark:text-gray-100" >
            <tr>
              <th scope="col" class="px-6 py-3">
                Rank
              </th>
              <th scope="col" class="px-6 py-3">
                Course
              </th>
              <th scope="col" class="px-6 py-3">
                Type
              </th>
              <th scope="col" class="px-6 py-3">
                Credits
              </th>
              <th scope="col" class="px-6 py-3">
                Instructor
              </th>
              <th scope="col" class="px-6 py-3">
                Rating
              </th>
            </tr>
          </thead>
        </table>
        <CourseList Num="1" Name="Data Structure and Algorithm" Dept="CS" Credit="6" Rating="4.5" Prof="Animesh" Type="Theory" />
        <CourseList Num="1" Name="Data Structure and Algorithm" Dept="CS" Credit="6" Rating="4.5" Prof="Animesh" Type="Theory" />
        <CourseList Num="1" Name="Data Structure and Algorithm" Dept="CS" Credit="6" Rating="4.5" Prof="Animesh" Type="Theory" />
        <CourseList Num="1" Name="Data Structure and Algorithm" Dept="CS" Credit="6" Rating="4.5" Prof="Animesh" Type="Theory" />
        <CourseList Num="1" Name="Data Structure and Algorithm" Dept="CS" Credit="6" Rating="4.5" Prof="Animesh" Type="Theory" />
        <CourseList Num="1" Name="Data Structure and Algorithm" Dept="CS" Credit="6" Rating="4.5" Prof="Animesh" Type="Theory" />
        <CourseList Num="1" Name="Data Structure and Algorithm" Dept="CS" Credit="6" Rating="4.5" Prof="Animesh" Type="Theory" />
        <CourseList Num="1" Name="Data Structure and Algorithm" Dept="CS" Credit="6" Rating="4.5" Prof="Animesh" Type="Theory" />
        <CourseList Num="1" Name="Data Structure and Algorithm" Dept="CS" Credit="6" Rating="4.5" Prof="Animesh" Type="Theory" />
      </div>


      <div className="flex flex-row items-center items-stretch self-stretch px-16 pt-8 pb-20 mt-20 w-full bg-sky-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-row "  >
          <div class="mr-2"><img src={iitblogo}></img></div>
          <div className="flex flex-col text-white">
            <div>Course</div>
            <div>Review</div>
            <div>System</div>
          </div>
        </div>
        <div class=" text-white">Thank you for visiting, we value your feedback</div>
      </div>
    </div>
  );
}

export default Home;