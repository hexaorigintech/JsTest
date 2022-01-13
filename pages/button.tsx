import React, { useState } from 'react';

type IButtonStyle = {
  size: string,
  color: string,
  icon: boolean
}

export default function Button({size = 'h-10', color = 'indigo', icon = true}: IButtonStyle) {

  return (
    <div className="p-4 mx-20">
      <button
        className={`${size} bg-${color}-700 hover:bg-${color}-800 inline-flex items-center px-5 text-indigo-100 transition-colors duration-150 rounded-lg focus:shadow-outline`}>
        {
          icon &&
            <svg className="w-4 h-4 mr-3 fill-current" viewBox="0 0 24 24">
              <path
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
        }
        <span>Click Me</span>
      </button>
    </div>
  );
}
