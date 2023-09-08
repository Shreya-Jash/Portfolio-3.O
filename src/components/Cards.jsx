import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Cards(props) {
  return (
    <div className="cardsContainer">
      <div className="Cards group relative cursor-pointer overflow-hidden rounded-md transition-shadow hover:shadow-xl hover:shadow-black/30">
        <img
          src={props.img}
          className="h-full  transition-transform duration-500 group-hover:scale-125"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        {/* <div className='projectLinks'>
              <a href={props.source_code} target="_blank" rel='noreferrer' className="sourcelink">Source code</a>
              <a href={props.demo} target="_blank" rel='noreferrer'>Demo</a>
            </div>      */}
        <div class="absolute inset-0 flex translate-y-[40%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <div className="title text-center text-lg text-white bg-slate-900 rounded-md h-7 w-48 ">
            {props.title}
          </div>

          <a
            href={props.source_code}
            class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
