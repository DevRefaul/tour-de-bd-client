import React from "react";
import { Link } from "react-router-dom";

const AboutME = () => {
  return (
    <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 justify-evenly items-center my-8 gap-8">
      <div>
        <h3 className="text-3xl font-semibold text-teal-400 text-center my-4">
          About Me
        </h3>
        <p>
          I am MD.Reaful Islam Rafee. A nature lover. Who travels a lot and
          spends most of the time in the nature. I fell like traveling increases
          many capabilities in a person. You can mix with many people around you
          and know about them.You can explore many traditional foods also that's
          one of the best part.
        </p>
        <br />
        <p>
          As i am a tourer i have gathered a plan to show people what they can't
          see when traveling alone or with some friend but not knowing the
          places well. I have gone through almost every reknown places of
          Bangldesh and many unknown places also. <br /> <br /> So i am the
          guide you need for your next tour to the dream places you want to
          expolre.{" "}
        </p>
        <div className="flex justify-center mt-6">
          <Link to="/services">
            <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Hire Me{" "}
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          className="xl:w-[80%]"
          src="https://i.ibb.co/FbK3Zsr/kalen-emsley-mg-JSkg-Io-JI-unsplash-1.jpg"
          alt="man in the mountains"
        />
      </div>
    </div>
  );
};

export default AboutME;
