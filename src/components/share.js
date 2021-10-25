import React from "react";
import {
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

const Share = ({ objeto, url, titulo, imagen }) => {
  return (
    <div className="share">
      <p className="share__texto">Comparte este {objeto} </p>
      <PinterestShareButton children="a" url={url} media={imagen}>
        <PinterestIcon className="share__icon" round={true} />
      </PinterestShareButton>
      <TwitterShareButton
        children="a"
        url={url}
        title={titulo}
        related={["@Flaex_"]}
      >
        <TwitterIcon className="share__icon" round={true} />
      </TwitterShareButton>
      <LinkedinShareButton children="a" url={url} title={titulo}>
        <LinkedinIcon className="share__icon" round={true} />
      </LinkedinShareButton>
      <FacebookShareButton children="a" url={url}>
        <FacebookIcon className="share__icon" round={true} />
      </FacebookShareButton>
      <WhatsappShareButton
        children="a"
        url={url}
        title={titulo}
        separator=" | "
      >
        <WhatsappIcon className="share__icon" round={true} />
      </WhatsappShareButton>
      <TelegramShareButton children="a" url={url} title={titulo}>
        <TelegramIcon className="share__icon" round={true} />
      </TelegramShareButton>
    </div>
  );
};

export default Share;
