import React from "react";

export default function GetStarted() {
  return (
    <div className=" mt-10 flex justify-center gap-48">
      <div className="">
        <img
          src="/images/callus.png"
          className="mx-auto flex w-2/4 justify-center"
          alt="Lima Charlie Logo"
        />
        <div className="text-center">
          <p className="mt-5 text-3xl font-bold">Call us</p>
          <p className="text-xl">(808) 123-4567</p>
        </div>
      </div>
      <div>
        <div className="text-center">
          <img
            src="/images/emailus.png"
            className="mx-auto flex w-2/4 justify-center"
            alt="Lima Charlie Logo"
          />
          <p className="mt-3 text-3xl font-bold">Email us</p>
          <p className="text-lg">operations@limacharlie.com</p>
        </div>
      </div>
      <div>
        <div className="text-center">
          <img
            src="/images/signoutform.png"
            className="mx-auto flex w-2/3 justify-center"
            alt="Lima Charlie Logo"
          />

          <p className="font-bold">Or fill out the form below</p>
          <p>Our team will get in touch soon.</p>
        </div>
      </div>
    </div>
  );
}
