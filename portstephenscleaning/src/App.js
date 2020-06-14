import React, { Fragment } from 'react';
import './App.css';
import Routes from './routes';
import Helmet from 'react-helmet'

function App() {
  return (
    <Fragment>
      <Helmet title="Port Stephens Cleaning" />
      <Routes/>
    </Fragment>
  );
}

export default App;
