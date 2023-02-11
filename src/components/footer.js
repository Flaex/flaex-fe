import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/scss/components/footer.scss";

/* eslint-disable */

let faicon = null;
let faprefix = null;

const links = [
  {
    id: 0,
    icon: "twitter",
    prefix: "fab",
    url: "https://twitter.com/Flaex_",
  },
  {
    id: 1,
    icon: "pinterest",
    prefix: "fab",
    url: "https://www.pinterest.com/flaex/",
  },
  {
    id: 2,
    icon: "linkedin-in",
    prefix: "fab",
    url: "https://www.linkedin.com/in/freddypolania/",
  },
  {
    id: 3,
    icon: "instagram",
    prefix: "fab",
    url: "https://www.instagram.com/flaex_",
  },
  {
    id: 4,
    icon: "github",
    prefix: "fab",
    url: "https://github.com/Flaex",
  },
];

const Footer = () => (
  <footer className="footer">
    <p>@flaex.design - {new Date().getFullYear()} | Caracas 🇻🇪</p>
    <div className="footer__rrss">
      {links.reverse().map((link) => (
        <a
          className="footer__link"
          key={link.id}
          href={link.icon}
          rel="noopener noreferrer"
          target="_blank"
          aria-label={`Ir a ${link.titulo}`}
        >
          <FontAwesomeIcon
            icon={[
              (faprefix = link.prefix.replace(/'/g, "")),
              (faicon = link.icon.replace(/'/g, "")),
            ]}
            fixedWidth
            size="xs"
          />
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
