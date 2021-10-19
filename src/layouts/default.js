import React from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
// add fas and fab to the library
library.add(fab, fas);

// Internal pages main component

const Layout = ({ children }) => (
  <div className="page">
    <div className="menu">
      <Header />
      <Navigation />
    </div>
    <main className="main"> {children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
