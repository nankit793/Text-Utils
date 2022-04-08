import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

export default function Navbar(props) {

  return (
    <nav  className={`navbar navbar-expand-lg  text-light navbar-light bg-${props.mode}`}>
      <Link className='text-light'  to="/" ><h5>{props.title}</h5></Link>
      <Link className='ml-3 text-light'  to="/about" ><h6>About</h6></Link>
      <div className="navbar-collapse" id="navbarNav">
        <div className="container colorOptions">
      <div className={`form-check ${props.mode === 'dark'? 'd-none': 'd-block'} `}>
          <input onClick={props.changeColorTwo} className='form-check-input' type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label className="form-check-label"  htmlFor="flexRadioDefault1">
            <div className="container rounded" style={{height: '20px', width: '10px', backgroundColor: 'black'}}></div>
          </label>
        </div>
      <div className={`form-check ${props.mode === 'dark'? 'invisible': 'visible'} `}>
          <input onClick={props.changeColor} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
          <label className="form-check-label" htmlFor="flexRadioDefault2"  >
            <div className="container rounded"style={{height: '20px', width: '10px', backgroundColor: '#e33e5a'}}></div>
          </label>
        </div>
        </div>
        <div>
          <button  onClick={props.toggleMode} className='modebtn' >{props.btntext}</button>
        </div>
      </div>
    </nav>
  )
}
//handlings
Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string }
Navbar.defaultProps = { title: 'YourTitle', aboutText: 'AboutText', mode: 'light' }   