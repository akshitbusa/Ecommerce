import React from 'react'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import { BrowserRouter } from 'react-router-dom'
import Loop from './components/Loop'
import './style.css'

const App = () => {
  // window.onbeforeunload = function () {
  //   localStorage.clear();
  //   return '';
  // };
  return (
    <>

      <BrowserRouter>
        <Loop />
      </BrowserRouter>
    </>
  )
}

export default App
