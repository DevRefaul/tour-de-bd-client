import React from "react";
import SingleBlogsCard from "./SingleBlogsCard";

const ReadBlogs = () => {
  const blogs = [
    {
      name: "Difference between SQL and NoSQL",
      des: "There are some main differences between SQL database and NoSQL database...",
      img: "https://i.ibb.co/FV0rYL2/sql-vs-nosql.jpg",
    },
    {
      name: "What is JWT, and how does it work?",
      des: "The full form of JWT is JSON Web Token.It is an open standard (RFC 7519) that defines a compact...",
      img: "https://i.ibb.co/cDMc700/JWT-blogpost.png",
    },
    {
      name: "What is the difference between javascript and NodeJS?",
      des: "Javacript is a programming language that is used for writing scripts on the website... ",
      img: "https://i.ibb.co/RvcH4TV/Know-the-difference-between-javascript-and-node-js-1-1-1.jpg",
    },
    {
      name: "How does NodeJS handle multiple requests at the same time?",
      des: "We know that Node.js is a singel threaded appliation.But the entire NodeJS architecture is not single-threaded...",
      img: "https://i.ibb.co/6DwtYq2/NWAGFGdrawio-660x284.png",
    },
  ];

  return (
    <div className="my-16 w-[80%] mx-auto">
      <h2 className="text-3xl font-bold text-teal-400 text-center">
        Read My Recent Blog's
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-6">
        {blogs.map((blog, idx) => (
          <SingleBlogsCard key={idx} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default ReadBlogs;
