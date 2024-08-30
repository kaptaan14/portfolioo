import React from "react";

const About = () => {
  return (
    <>
      <div className="text-5xl font-bold mb-10 text-center">About Me</div>
      <div className="text-xl  font-mono ">
        Hello I am{" "}
        <span className="italic underline text-blue-500">Ashish Singh</span>. I
        am a{" "}
        <span className="text-yellow-800 underline dark:text-yellow-400">
          B.Tech Student
        </span>{" "}
        currently studying in{" "}
        <span className="text-yellow-800 underline dark:text-yellow-400">
          G.L. Bajaj Institute of Technology
        </span>
        , Greater Noida. I am constantly developing my skills and expanding my
        knowledge in various areas of technology.
        <br />
        <br />
        I want to develop things that have a tangible impact on people’s lives.
        I believe more in practical than theory. So i try to code regularly and
        learn new things. I'm driven by the belief that technology has the power
        to transform the world for the better.
        <br />
        <br />
        I also love playing chess, reading books which improves my critical
        thinking. I believe in living life to the fullest and finding
        inspiration in every moment.
        <br />
        <br />
        This websites serves as my digital garden where I showcase my projects,
        share my insights, and connect with like-minded individuals who share my
        passion for technology and innovation.
      </div>
    </>
  );
};

export default About;
