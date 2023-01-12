import React from "react";

const Blog = () => {
  document.title = "Blog-Tour DE Bangladesh";
  return (
    <div className="w-[80%] mx-auto my-8">
      <h2 className="text-3xl font-bold text-teal-400 text-center underline">
        Welcome to my Blog Page
      </h2>
      {/* questions and asnwers */}
      <div className="my-20">
        {/* no 1 */}
        <div className="my-4 pb-4 border-b border-teal-400">
          <div className="flex justify-center lg:float-left lg:p-8">
            <img
              src="https://i.ibb.co/FV0rYL2/sql-vs-nosql.jpg"
              alt="Difference between SQL and NoSQL"
              className="h-32"
            />
          </div>
          <h4 className="text-2xl font-bold text-teal-400 mb-6">
            Difference between SQL and NoSQL
          </h4>
          <p>
            <span className="text-xl font-semibold text-teal-400 underline">
              Ans :
            </span>
            There are some main differences between SQL database and NoSQL
            database.Some of them are written below. <br />
          </p>
          {/* sql database */}
          <p className="text-xl font-bold mt-4"> SQL Database</p>
          <ul className="list-disc">
            <li className="list-inside">
              On SQL database datas are stored in a rows of table with logical
              links between them
            </li>
            <li className="list-inside">
              On SQL database datas can not be big. It only can store a short
              amount of data in a single row section.
            </li>
            <li className="list-inside">
              On SQL database we can not store complex data in a single table
              row.
            </li>
            <li className="list-inside">
              SQL database is used where systems consistency is critical.
            </li>
          </ul>
          {/* nosql database */}
          <p className="text-xl font-bold mt-4"> NoSQL Database</p>
          <ul className="list-disc">
            <li className="list-inside">
              On NoSQL database datas are stored in a pair of keys and values
              format.
            </li>
            <li className="list-inside">
              On NoSQL database we can store as much data we need in a single
              pair.
            </li>
            <li className="list-inside">
              On NoSQL database we can store many complex data.
            </li>
            <li className="list-inside">
              On NoSQL database is used where Businesses growing extremely fast
              but lacking data schemata.
            </li>
          </ul>
        </div>

        {/* no 2 */}
        <div className="my-4 pb-4 border-b border-teal-400">
          <div className="flex justify-center  lg:float-left lg:p-8">
            <img
              src="https://i.ibb.co/cDMc700/JWT-blogpost.png"
              alt="Difference between SQL and NoSQL"
              className="h-32"
            />
          </div>
          {/* image end */}
          <h4 className="text-2xl font-bold text-teal-400 mb-6">
            What is JWT, and how does it work?
          </h4>
          <p>
            <span className="text-xl font-semibold text-teal-400 underline">
              Ans :
            </span>
            The full form of JWT is JSON Web Token.It is an open standard (RFC
            7519) that defines a compact and self-contained way for securely
            transmitting information between two parties as a JSON object.{" "}
            <br />
            When a user login or register authentication server verifies the
            credentials and issues a jwt signed using either a secret salt or a
            private key. When the user try to get some private rosources the
            server get the jwt token and verify if the user is valid or right
            person or not. If the server match the token then the server let the
            user get the resources. Otherwise it won't let the user get the
            rosources.
          </p>
        </div>

        {/* np 3 */}
        <div className="my-4 pb-4 border-b border-teal-400">
          <div className="flex justify-center  lg:float-left lg:p-8">
            <img
              src="https://i.ibb.co/RvcH4TV/Know-the-difference-between-javascript-and-node-js-1-1-1.jpg"
              alt="Difference between SQL and NoSQL"
              className="h-32"
            />
          </div>
          {/* image end */}
          <h4 className="text-2xl font-bold text-teal-400 mb-6">
            What is the difference between javascript and NodeJS?
          </h4>
          <p>
            <span className="text-xl font-semibold text-teal-400 underline">
              Ans :
            </span>
            <span className="text-2xl font-bold">Javacript</span> is a
            programming language that is used for writing scripts on the
            website. Javascriptcan only be run in the browsers.It is basically
            used on the client-side. Javascript is basically used in frontend
            development.It is the upgraded version of ECMA script that uses
            Chrome's V8 engine written in C++. <br />
            on the other hand -<br />
            <span className="text-2xl font-bold">Node.js</span>is a Javascript
            runtime environment that helps to run Javascript on browser.We can
            run Javascript outside the browser with the help of NodeJS.V8 is the
            Javascript engine inside of node.js that parses and runs Javascript.
            It is mostly used on the server-side.It is used in server-side
            development.Nodejs is written in C, C++ and Javascript.
          </p>
        </div>

        {/* no 4 */}
        <div className="my-4">
          <div className="flex justify-center  lg:float-left lg:p-8">
            <img
              src="https://i.ibb.co/6DwtYq2/NWAGFGdrawio-660x284.png"
              alt="Difference between SQL and NoSQL"
              className="h-32"
            />
          </div>
          {/* image end */}
          <h4 className="text-2xl font-bold text-teal-400 mb-6">
            How does NodeJS handle multiple requests at the same time?
          </h4>
          <p>
            <span className="text-xl font-semibold text-teal-400 underline">
              Ans :
            </span>
            We know that Node.js is a singel threaded appliation.But the entire
            NodeJS architecture is not single-threaded.When NodeJS receives
            multiple client requests then it places them into EventQueue. NodeJS
            is built with the concept of event-driven architecture. NodeJS has
            its own EventLoop which is an infinite loop that receives requests
            and processes them. EventLoop is the listener for the EventQueue.
          </p>
        </div>
        {/* finished */}
      </div>
    </div>
  );
};

export default Blog;
