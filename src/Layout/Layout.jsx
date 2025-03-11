
import React, { useEffect } from "react";
import Header from '../Statics/Header';

const Layout = ({ children }) => {
    useEffect(() => {
        document.title = "From Africa - Connecting African Manufacturers to Global Market";
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
          metaDescription.setAttribute("content", "Explore authentic quality products from verified manufacturers across Africa.");
        } else {
          const meta = document.createElement("meta");
          meta.name = "description";
          meta.content = "Explore authentic quality products from verified manufacturers across Africa.";
          document.head.appendChild(meta);
        }
      }, []);

  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout