import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container ">
            <div className="logo">
              {/* <Link> */}
                <span className="text">fiverr</span>
              {/* </Link> */}
                <span className='dot'>.</span>

            </div>
            <div className="links">
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>
                <span>Become a seller</span>
                <button>Join</button>

            </div>
        </div>
        {/* <hr/>
        <div className="menu">
          <span>Test1</span>
          <span>test2</span>
        </div> */}
    </div>
  )
}

export default Navbar