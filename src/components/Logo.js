import React from 'react';
import "./logostyle.css";
const Logo = (props) => {
  return (
    
    <img className="Logo"
      alt="Logo"
      src="/static/botacademialogo.jpg"
      {...props}
    />
  
  );
};

export default Logo;
