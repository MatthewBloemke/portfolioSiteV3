import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { send } from "@emailjs/browser";
import contactImg from "../../public/assets/contact.jpg";
import Alert from "./Alert";
import Error from "./Error";

const initialState = {
  name: "",
  number: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [contactState, setContactState] = useState(initialState);
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleChange = ({ target }: any) => {
    setContactState({
      ...contactState,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    send(
      "service_ne09bab",
      "template_8gnfxp5",
      contactState,
      "O_RJ2i4_VWfnQbVbv"
    ).then(
      (result) => {
        console.log(result.text);
        setAlert(true);
      },
      (error) => {
        setError(true);
        console.log(error.text);
      }
    );
  };

  return (
    <div id="contact" className="w-full lg:h-screen p-8">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#f26901]">
          Contact
        </p>
        <h2 className="py-4">Get in touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:--4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Matthew Bloemke</h2>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  {
                    "I am available for freelance or full-time positions. Contact me and let's talk"
                  }
                </p>
              </div>
              <div>
                <p className="uppercase pt-4">Connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      href="https://linkedin.com/in/matthewbloemke"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="https://github.com/MatthewBloemke" target="_blank">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="mailto: mattbloemke@gmail.com">
                      <AiOutlineMail />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      name="name"
                      value={contactState.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      name="number"
                      value={contactState.number}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    name="email"
                    value={contactState.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    name="subject"
                    value={contactState.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                    name="message"
                    value={contactState.message}
                    onChange={handleChange}
                  />
                </div>
                <button className="w-full p-4 text-gray-100 mt-4 active:scale-95 active:opacity-25 ease-in duration-100">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp size={30} className="text-[#f26901]" />
            </div>
          </Link>
        </div>
      </div>
      <Alert alert={alert} setAlert={setAlert} />
      <Error error={error} setError={setError} />
    </div>
  );
};

export default Contact;
