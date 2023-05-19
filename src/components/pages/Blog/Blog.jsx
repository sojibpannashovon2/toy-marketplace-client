import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold my-5 border border-success w-48 mx-auto rounded-md '>My Question Blog</h1>

            <div className=' border border-primary p-5 m-8 '>
                <div >
                    <h1>Question-1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                    <br />

                    <p>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.</p>
                    <p>You can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code. This is also known as the backend for frontend (BFF) proxy.</p>
                </div>
                <br /><br />
                <div>
                    <h1>Question-2: Compare SQL and NoSQL databases?</h1>
                    <br />
                    <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
                <br /><br />
                <div>
                    <h1>Question-3: What is express js? What is Nest JS ?</h1>
                    <br />
                    <p>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>
                </div>
                <br />
                <br />
                <div>
                    <h1>Question-4: What is MongoDB aggregate and how does it work?</h1>
                    <br />
                    <p > Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                    <br />
                    <br />
                </div>
            </div>


        </div>
    );
};

export default Blog;