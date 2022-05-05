import React from 'react';
import {
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";

const CustomLink = ({children, to , ...props}) => {
    
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
      style={{ color: match ? "red" : "Black" }}
    //   style={{ borderBottom: match ? "2px solid red" :   #0991B1 "none", padding:"5px 15px ", backgroundColor:match? "black": "transparent" }}
  
      to={to}
      {...props}
    >
      {children}
    </Link>
    );
};

export default CustomLink;