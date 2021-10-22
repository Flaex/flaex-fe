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
        <PinterestIcon size={32} round={true} />
      </PinterestShareButton>
      <TwitterShareButton
        children="a"
        url={url}
        title={titulo}
        related={["@Flaex_"]}
      >
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <LinkedinShareButton children="a" url={url} title={titulo}>
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>
      <FacebookShareButton children="a" url={url}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <WhatsappShareButton
        children="a"
        url={url}
        title={titulo}
        separator=" | "
      >
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
      <TelegramShareButton children="a" url={url} title={titulo}>
        <TelegramIcon size={32} round={true} />
      </TelegramShareButton>
    </div>
  );
};

export default Share;
