import React from "react";
import { GoogleMapsContainer } from "./GoogleMapsElements";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import mapStyle from "../../styles/mapStyle";
import marker from "../../public/images/marker.png";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const markerCenter = {
  lat: 46.25645455194671,
  lng: 14.423717557701904,
};

const options = {
  styles: mapStyle,
  disableDefaultUI: true,
  zoomControl: true,
  scrollwheel: false,
};

const onClickHandler = () => {
  window.open(
    "https://www.google.com/maps/dir//46.2564676,14.4237108/@46.2564239,14.3536792,12z"
  );
};

const GoogleMaps = ({ center }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDFlGBo2PYGfR8K1kXBHrRiDLLxDPYaYdM",
  });

  return (
    isLoaded && (
      <GoogleMapsContainer>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={center}
          options={options}
        >
          <Marker
            key={new Date().toISOString()}
            position={markerCenter}
            onClick={onClickHandler}
            icon={{ url: marker }}
          />
        </GoogleMap>
      </GoogleMapsContainer>
    )
  );
};

export default GoogleMaps;
