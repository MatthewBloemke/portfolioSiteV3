import React, { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";

interface props {
  alert: boolean;
  setAlert: Function;
}

const Alert = ({ alert, setAlert }: props) => {
  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false);
      }, 5000);
    }
  }, [alert, setAlert]);

  return (
    <div
      className={
        alert
          ? "fixed bg-[#12ab00] bottom-[25px] right-[50%] translate-x-[50%] w-[200px] py-2 rounded-md text-white text-center ease-in duration-500"
          : "fixed bg-[#12ab00] bottom-[-10%] right-[50%] translate-x-[50%] w-[200px] py-2 rounded-md ease-in duration-500"
      }
    >
      <div className="flex items-center justify-center w-full">
        <div className="flex justify-around items-center ">
          <BsCheckCircle />
          <p className="ml-3">Message sent</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
