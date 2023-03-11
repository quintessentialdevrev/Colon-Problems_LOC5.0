import React from 'react'
import Data from "./image_data";
import './maincontainer.css';

export default function Main_container() {
  return (
    <div className='main_container'>
        <div className="main">
        <main>
        <div className="searchBox">
          <input type="text" placeholder="Search" />
          <div className="search">
            {/* <img
              src="https://firebasestorage.googleapis.com/v0/b/codewithvetriapi-c56e3.appspot.com/o/icons8-forward-arrow-100.png?alt=media&token=3f56e775-43c1-41d3-a0c4-90217b31b5be"
              alt=""
            /> */}
          </div>
        </div>
      </main>
        </div>
    </div>
  );
}
