import React from "react";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { GiPhone } from "react-icons/gi";
import { FiYoutube, FiTwitter } from "react-icons/fi";

import { AiOutlineFacebook, AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div className="bg-black" id="contact">
      <div className="container text-center text-white py-5">
        <h1>Contact Information</h1>
        <div className=" row">
          <div className=" col-md-6 col-lg-4 my-4">
            <div className="card bg-dark">
              <div className="card-body text-center">
                <a href="">
                  <GiPhone size={80} color="grey" />
                </a>

                <p className="card-text text-white">
                  +237 674421540 <br /> +237 695770772
                </p>
              </div>
            </div>
          </div>

          <div className=" col-md-6 col-lg-4 my-4">
            <div className="card bg-dark ">
              <div className="card-body text-center">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rholfterence@gmail.com">
                  <AiOutlineMail size={80} color="grey" />
                </a>
                <p className="card-text text-white">rholfterence@gmail.com</p>
                <p></p>
              </div>
            </div>
          </div>
          <div className=" col-md-6 col-lg-4 my-4">
            <div className="card bg-dark ">
              <div className="card-body text-center">
                <a href="https://www.youtube.com/channel/UCdK6i0otVVax4FQ4xgfeZ1w/featured">
                  <FiYoutube size={80} color="grey" />
                </a>
                <p className="card-text text-white">
                  Scratch <br /> Records
                </p>
              </div>
            </div>
          </div>

          <div className=" col-md-6 col-lg-4 my-4">
            <div className="card bg-dark ">
              <div className="card-body text-center">
                <a href="https://www.instagram.com/scratchrecord/?hl=en">
                  <FaInstagram size={80} color="grey" />
                </a>
                <p className="card-text text-white">
                  Scratch <br /> Records
                </p>
              </div>
            </div>
          </div>

          <div className=" col-md-6 col-lg-4 my-4">
            <div className="card bg-dark ">
              <div className="card-body text-center">
                <a href="https://www.facebook.com/Scratch-records-106865681490796">
                  <AiOutlineFacebook size={80} color="grey" />
                </a>
                <p className="card-text text-white">
                  Scratch <br /> Records
                </p>
              </div>
            </div>
          </div>

          <div className=" col-md-6 col-lg-4 my-4">
            <div className="card bg-dark ">
              <div className="card-body text-center">
                <FiTwitter size={80} color="grey" />
                <p className="card-text text-white">
                  Scratch <br /> Records
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
