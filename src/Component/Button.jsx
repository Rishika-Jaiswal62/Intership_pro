import React from 'react';

const Button = ({ content, className }) => {
  return (
    <button
      className={`bg-gradient-to-b from-blue-500 to-blue-600 text-white font-normal px-8 py-4 rounded-lg text-lg hover:scale-105 hover:from-blue-500 transition-all duration-300 cursor-pointer ${className}`}
    >
      {content}
    </button>
  );
};

export default Button;
