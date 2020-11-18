import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function PageLayout(props: React.PropsWithChildren<{}>) {
  return (
    <>
      <Navbar/>
      {props.children}
      <Footer/>
    </>
  );
}

export default PageLayout;