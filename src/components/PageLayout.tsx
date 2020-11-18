import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function PageLayout({children, showSearch}: React.PropsWithChildren<{ showSearch?: boolean; }>) {
  return (
    <>
      <Navbar showSearch={showSearch ?? true}/>
      {children}
      <Footer/>
    </>
  );
}

export default PageLayout;