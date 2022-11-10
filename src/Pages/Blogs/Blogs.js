import React from 'react';
import { Helmet } from 'react-helmet';

const Blogs = () => {
    return (
        <div>
            <div className='bg-white text-left p-4 mb-8'>
                <h1 className='text-2xl'>Difference between SQL and NoSQL?</h1>
                <p className='text-xl'>
                    The five critical differences between SQL vs NoSQL are:

                    1. SQL databases are relational, NoSQL databases are non-relational.
                    2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for  unstructured data.
                    3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                    4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                    5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>
            </div>
            <div className='bg-white text-left p-4 mb-8'>
                <h1 className='text-2xl'>What is JWT, and how does it work?</h1>
                <p className='text-xl'>
                    For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML. <br />
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                </p>
            </div>
            <div className='bg-white text-left p-4 mb-8'>
                <h1 className='text-2xl'>What is the difference between javascript and NodeJS?</h1>
                <p className='text-xl'>
                    1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

                    As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. <br />

                    2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful. <br />

                    3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported. <br />

                    4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.

                    Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.
                </p>
            </div>
            <div className='bg-white text-left p-4 mb-8'>
                <h1 className='text-2xl'>How does NodeJS handle multiple requests at the same time?</h1>
                <p className='text-xl'>
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                </p>
            </div>
            <Helmet>
                <title>DHEKUR: BLOGS</title>
            </Helmet>
        </div>
    );
};

export default Blogs;