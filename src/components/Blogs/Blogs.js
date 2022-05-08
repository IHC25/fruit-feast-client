import React from "react";

const Blogs = () => {
  return (
    <div style={{ height: "470px" }} className="Container">
      <div className="my-5">
        <h2 className="my-3">Blogs</h2>
        <h4 className="my-2">Difference between javascript and nodejs</h4>
        <p>
          JavaScript is a simple programming language that runs in any browser
          with the help of JavaScript Engine. And Node.js is a cross-platform
          and open-source JavaScript runtime environment. JavaScript can only be
          run in the browser, but Node.js helps to run JavaScript outside the
          browser. JavaScript is basically used in the client side, but Node.js
          is mostly used in the server side.
        </p>
        <h4 className="my-2">
          When should you use nodejs and when should you use mongodb?
        </h4>
        <p>
          Node.js is primarily used for non-blocking, event driven servers due
          to its single threaded nature. It is best suited for real time
          applications. NoSQL databases like MongoDB are a good choice when your
          data is document-centric and doesn't fit well into the schema of a
          relational database, when you need to accommodate massive scale, when
          you are rapidly prototyping, and a few other use cases.
        </p>
        <h4 className="my-2">
          What is the purpose of jwt and how does it work?
        </h4>
        <p>
          JWT, or JSON Web Token, is an open standard used to share security
          information between client side and server side. A JSON Web Token
          consists of 3 parts separated by a period
          i.e.,header.payload.signature. Basically the identity provider(IdP)
          generates a JWT certifying user identity and Resource server decodes
          and verifies the authenticity of the token using public key.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
