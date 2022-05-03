import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1 className='text-3xl text-blue-800'>1 ) Differences between sql and nosql databases ?</h1>
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

            <div>
                <h1 className='text-3xl text-blue-800'>2 ) When should you use nodejs and when should you use mongodb ?</h1>
                <p>
                    Ans :
                    Nodejs-
                    Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language .So, if i want to write some kind of stand-alone program or server in Javascript, then i can use nodejs for it.
                    MongoDB-
                    If my application needs the ability to persistently store data in a way that you can efficiently query or update it later, then i Use MongoDB or any Other Database If my application needs the ability to persistently store data in a way that you can efficiently query or update it later, then i Use MongoDB or any Other Database
                </p>

            </div>

             <div>
                 <h1 className='text-3xl text-blue-800'> 3) Difference between javascript and nodejs ?</h1>
                 <p>Ans :
Javascript-
a ) It is basically used on the client-side.
b ) Javascript is used in frontend development.
c ) SQL databases are best suited for complex queries.
NodeJS-
a ) It is mostly used on the server-side.
b ) Nodejs is used in server-side development.
c ) Nodejs does not have capability to add HTML tags.</p>
             </div>
        </div>
    );
};

export default Blogs;