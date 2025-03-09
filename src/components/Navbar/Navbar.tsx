import { useEffect, useState } from "react";
import Modal from "../Modal";
import Countdown from "../Countdown";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClassAborted, setIsClassAborted] = useState(false);
  const [otherReason, setOtherReason] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEndClass, setIsEndClass] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="relative w-full flex justify-between h-12 px-4">
        {/* dropdown for sm devices */}

        <div
          className={
            "z-20 absolute top-full  px-3 border-2 border-gray-200 flex flex-col gap-3 justify-start items-center right-4 left-4  shadow-lg rounded-lg  transition-all duration-500 ease-in-out overflow-hidden sm:hidden bg-white  " +
            (isDropdownOpen
              ? "max-h-62 opacity-100 py-8"
              : "max-h-0 p-0 opacity-0")
          }
        >
          <div className="flex justify-center w-full">
            <span className="text-xl font-semibold text-gray-500  ">
              Trial Lesson [Grade 1-3]
            </span>
          </div>
          <div className="border-t border-gray-300 w-full pb-5"></div>

          <div className="flex flex-row gap-8 w-full justify-center">
            <div className="text-2xl font-bold text-gray-500 ">
              <Countdown isPauseCountdown={isEndClass} />
            </div>

            <div
              className="bg-[#F35742] text-white text-lg rounded-sm h-10 w-32 font-thin flex justify-center items-center cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <span>End class</span>
            </div>
          </div>
          <div className="w-full pt-4 ">
            <Link
              className="bg-gray-200 rounded-lg  py-3 w-full  text-xl font-semibold text-gray-500 flex justify-center"
              to={"/posts"}
            >
              <span>Posts</span>
            </Link>
          </div>

          {/* <div className="border-t border-gray-300 w-full pb-5"></div>

          <span>Trial Lesson [Grade 1-3]</span>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-1">
              <Countdown isPauseCountdown={isEndClass} />
              <button
                className="bg-[#F35742] text-white rounded-sm py-0.5 w-20 font-thin flex justify-center items-center cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <span>End class</span>
              </button>
            </div>
            <Link to={"/posts"}>Posts</Link>
          </div> */}
        </div>

        <div>
          <div className="flex h-full items-center gap-2">
              <div className="h-full sm:px-2 p-1.5">
            <Link className=" " to={"/"}>
                <img
                  src="/codingal_logo.jpg"
                  className="h-full object-contain"
                  alt="codingal_logo"
                />
            </Link>
              </div>

            <div className="border-l border-gray-300 hidden sm:block h-full"></div>

            <div className=" hidden sm:block">
              <span className="text-gray-600">Trial Lesson [Grade 1-3]</span>
            </div>
            <div className="flex justify-center items-center sm:pl-4 sm:hidden">
              <span className="font-bold text-lg">Codingal</span>
            </div>
          </div>
        </div>

        <div className="sm:hidden  flex justify-end items-center">
          <GiHamburgerMenu
            size={32}
            onClick={() => {
              setIsDropdownOpen((prev) => !prev);
            }}
          />
        </div>

        <div className="hidden sm:flex justify-end w-1/2 gap-5 sm:pr-3 items-center flex-row ">
          <div className="flex justify-center items-center gap-4 cursor-pointer">
            <Link className="font-semibold text-gray-600 " to={"/posts"}>
              <span>Posts</span>
            </Link>
            <div className="border-l border-gray-300   h-7"></div>
          </div>

          <div className="flex justify-center items-center w-8">
            <Countdown isPauseCountdown={isEndClass} />
          </div>

          <div
            className="bg-[#F35742] text-white rounded-sm h-2/3 w-20 font-thin flex justify-center items-center cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <span>End class</span>
          </div>
        </div>
      </div>

      {/* Modal Component */}

      <Modal isOpen={isModalOpen}>
        <div className="z-10 flex flex-col justify-end mt-4 px-4  transition-all duration-1000 ">
          <span className="text-lg font-semibold pb-4">
            Select a reason to end class
          </span>

          <div className="flex flex-col">
            <label className="flex items-center cursor-pointer gap-2">
              <input
                type="radio"
                name="classStatus"
                checked={isClassAborted === false}
                onChange={() => setIsClassAborted(false)}
                className="peer hidden"
              />
              <div className="size-4 text-xs rounded-full border-2 border-gray-500 flex items-center justify-center peer-checked:bg-orange-500 text-transparent peer-checked:text-white peer-checked:border-orange-500 font-bold">
                &#10003;
              </div>
              <span>Class completed</span>
            </label>

            <label className="flex items-center cursor-pointer gap-2">
              <input
                type="radio"
                name="classStatus"
                checked={isClassAborted === true}
                onChange={() => setIsClassAborted(true)}
                className="peer hidden"
              />
              <div className="size-4 text-xs rounded-full border-2 border-gray-500 flex items-center justify-center peer-checked:bg-orange-500 text-transparent peer-checked:text-white peer-checked:border-orange-500 font-bold">
                &#10003;
              </div>
              <span>Class interrupted/aborted</span>
            </label>

            <div
              className={
                !isClassAborted
                  ? "pl-5 transition-all duration-300 overflow-hidden max-h-0"
                  : "pl-5 transition-all duration-300 overflow-hidden max-h-44"
              }
            >
              <label className="flex items-center cursor-pointer gap-2">
                <input
                  type="radio"
                  name="Class_interrupted_aborted"
                  onChange={() => setOtherReason(false)}
                  className="peer hidden"
                />
                <div className="size-4 text-xs rounded-full border-2 border-gray-500 flex items-center justify-center peer-checked:bg-orange-500 text-transparent peer-checked:text-white peer-checked:border-orange-500 font-bold">
                  &#10003;
                </div>
                <span>Student didn,t show up for the class.</span>
              </label>

              <label className="flex items-center cursor-pointer gap-2">
                <input
                  type="radio"
                  name="Class_interrupted_aborted"
                  onChange={() => setOtherReason(false)}
                  className="peer hidden"
                />
                <div className="size-4 text-xs rounded-full border-2 border-gray-500 flex items-center justify-center peer-checked:bg-orange-500 text-transparent peer-checked:text-white peer-checked:border-orange-500 font-bold">
                  &#10003;
                </div>
                <span>Student didn,t show any interest</span>
              </label>

              <label className="flex items-center cursor-pointer gap-2">
                <input
                  type="radio"
                  name="Class_interrupted_aborted"
                  onChange={() => setOtherReason(false)}
                  className="peer hidden"
                />
                <div className="size-4 text-xs rounded-full border-2 border-gray-500 flex items-center justify-center peer-checked:bg-orange-500 text-transparent peer-checked:text-white peer-checked:border-orange-500 font-bold">
                  &#10003;
                </div>
                <span>Student got disconnected</span>
              </label>

              <label className="flex items-center cursor-pointer gap-2">
                <input
                  type="radio"
                  name="Class_interrupted_aborted"
                  onChange={() => setOtherReason(false)}
                  className="peer hidden"
                />
                <div className="size-4 text-xs rounded-full border-2 border-gray-500 flex items-center justify-center peer-checked:bg-orange-500 text-transparent peer-checked:text-white peer-checked:border-orange-500 font-bold">
                  &#10003;
                </div>
                <span>I got disconnected</span>
              </label>

              <label className="flex items-center cursor-pointer gap-2">
                <input
                  type="radio"
                  name="Class_interrupted_aborted"
                  checked={otherReason}
                  onChange={() => setOtherReason((prev) => !prev)}
                  className="peer hidden"
                />
                <div className="size-4 text-xs rounded-full border-2 border-gray-500 flex items-center justify-center peer-checked:bg-orange-500 text-transparent peer-checked:text-white peer-checked:border-orange-500 font-bold">
                  &#10003;
                </div>
                <span>Other reason</span>
              </label>

              <div
                className={
                  !otherReason
                    ? "transition-all duration-500 overflow-hidden max-h-0"
                    : "transition-all duration-500 overflow-hidden max-h-32"
                }
              >
                <textarea
                  className="border-gray-300 border-2 rounded-sm pb-5 pt-1 px-3 outline-none resize-none w-full "
                  rows={1}
                  cols={19}
                  placeholder="Type here"
                  name=""
                  id=""
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex mt-3 ">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setIsEndClass(true);
              }}
              className="px-8 py-1.5 bg-[#F35742] text-white rounded cursor-pointer"
            >
              End Class
            </button>
            <button
              className="px-5 py-1.5 text-gray-600 rounded ml-2 cursor-pointer"
              onClick={() => {
                setIsModalOpen(false);
                setIsEndClass(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
