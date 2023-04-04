import React from 'react'
import"./Featured.scss"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>A whole world of <i>freelance</i> talent at your fingertips </h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt="" />
                        <input type="text" placeholder="Try building mobile App"/>
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Wordpress</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
                    
                </div>
            </div>
            <div className="right">
                <img src="./img/man.png"/>
            </div>
        </div>

    </div>
  )
}

export default Featured