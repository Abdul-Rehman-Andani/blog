import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
          <h1 className='text-center mt-5'><strong>Page not found</strong></h1> 
          <h2 className='text-center mt-4'>Error 404</h2>
          <p className='text-center mt-4'><Link to="/">Go to Home</Link></p>
    </>
  )
}

export default Error;
