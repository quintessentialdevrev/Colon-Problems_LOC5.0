import React from 'react'
import Data from "./image_data";
import './maincontainer.css';
import Pin from './Pin';
import { Search2Icon } from '@chakra-ui/icons';

export default function Main_container() {
  return (
    <div className='main_container'>
        <div className="main">
        <main>
        <div className="searchBox">
          <input type="text" placeholder="Search" />
          <div className="search">
            <Search2Icon/>
          </div>
        </div>
        <div className="mainContainer">
          {Data &&
            Data.map((data) => (
              <Pin
                key={data.id}
                pinSize={data.size}
                imgSrc={data.imgSrc}
                name={data.name}
                link={data.link}
              />
            ))}
        </div>
      </main>
        </div>
    </div>
  );
}
