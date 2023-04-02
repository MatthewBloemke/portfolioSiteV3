import React, { useEffect } from "react";
import { BiErrorCircle } from "react-icons/bi";

interface props {
  error: boolean;
  setError: Function;
}

const Error = ({ error, setError }: props) => {
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }, [error, setError]);

  return (
    <div
      className={
        error
          ? "fixed bg-[#da0000] bottom-[25px] right-[50%] translate-x-[50%] w-[200px] py-2 rounded-md text-white text-center ease-in duration-500"
          : "fixed bg-[#da0000] bottom-[-10%] right-[50%] translate-x-[50%] w-[200px] py-2 rounded-md ease-in duration-500"
      }
    >
      <div className="flex items-center justify-center w-full">
        <div className="flex justify-around items-center ">
          <BiErrorCircle />
          <p className="ml-3">An error occurred</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
