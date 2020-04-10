import React from 'react';
import {Link} from 'react-router-dom';
import {PATH_SONGS} from '../routes';

const Home = () => {
  return (
    <>
      <h1> Hello World </h1>
      <Link to={PATH_SONGS}>Canciones</Link>
    </>
  )
};

export default Home;
