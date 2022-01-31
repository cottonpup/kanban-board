import React from 'react';

const Container = ({ id, children }) => {
  return (
    <ul className="py-5 px-5 h-full w-1/3 space-y-4 bg-white rounded-xl shadow-md">
      {children}
    </ul>
  );
};

export default Container;
