import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <>
        <h1>404 Page</h1>
        <p>This url is not present</p>
        <Link to="/*">Go to home page</Link>
    </>
  );
};

export default Page404
