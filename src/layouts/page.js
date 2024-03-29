import React from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import Footer from "../components/footer";
import "../assets/scss/layouts/default.scss";

// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
// add fas and fab to the library
library.add(fab, fas);

// Internal pages main component

const Default = ({ children }) => (
  <div className="page">
    <Header />
    <main className="main">{children}</main>
    <Footer />
  </div>
);

Default.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Default;
