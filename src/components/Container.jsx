import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="mx-auto max-w-screen-md">{children}</div>
  );
};

export default Container;
