import React from 'react';
import Navbar2 from '../Navbar2/Navbar2';

const Blogs = () => {
    return (
        <div className='md:w-3/4  md:ml-32 mt-6'>
         

                 

                 <div className="accordion" id="accordionExample">
         <div className="accordion-item bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="headingOne">
      <button className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
        aria-controls="collapseOne">
      <h1 className='text-2xl text-blue-800'> Differences between sql and nosql databases ?</h1>

      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
      <p className='text-xl'> Ans :
                    SQL-
                    <p>  a ) SQL databases have fixed or static or predefined schema.</p>
                    <p>  b ) SQL databases are vertically scalable.</p>
                    <p>  c ) SQL databases are best suited for complex queries.</p>
                    NOSQL-
                    <p> a ) NoSQL databases have dynamic schema.</p>
                    <p>  b ) NoSQL databases are horizontally scalable.</p>
                    <p> c ) Javascript is capable enough to add HTML and play with the DOM.</p>
                </p>
      </div>
    </div>
  </div>
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="headingTwo">
      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
        aria-controls="collapseTwo">
        <h1 className='text-2xl text-blue-800'> When should you use nodejs and when should you use mongodb ?</h1>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
      <p>
                    Ans :
                    Nodejs-
                    Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language .So, if i want to write some kind of stand-alone program or server in Javascript, then i can use nodejs for it.
                    MongoDB-
                    If my application needs the ability to persistently store data in a way that you can efficiently query or update it later, then i Use MongoDB or any Other Database If my application needs the ability to persistently store data in a way that you can efficiently query or update it later, then i Use MongoDB or any Other Database
                </p>
      </div>
    </div>
  </div>
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="headingThree">
      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
        aria-controls="collapseThree">
        <h1 className='text-2xl text-blue-800'>  Difference between javascript and nodejs ?</h1>

      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
      <p>Ans :
                    Javascript-
                     <p> a ) It is basically used on the client-side.</p>
                     <p>                    b ) Javascript is used in frontend development.</p>
                     <p> c ) SQL databases are best suited for complex queries.</p>
                     <p> NodeJS-</p>
                     <p> a ) It is mostly used on the server-side.</p>
                     <p> b ) Nodejs is used in server-side development.</p>
                     <p> c ) Nodejs does not have capability to add HTML tags.</p>
                     </p>
                   
      </div>
    </div>
  </div>
</div>

                 
        

        </div>
    );
};

export default Blogs;