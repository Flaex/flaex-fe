import * as React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ lat, lng, zoom, clase }) => {
  const defaultProps = {
    center: {
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    },
    zoom: zoom,
  };

  return (
    <div className={clase}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.GATSBY_GOOGLE_MAPS_API_KEY}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
