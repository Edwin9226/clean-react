import { type FC } from "react";

type GeolocationProps = {
  latitude: number | null;
  longitude: number | null;
};

const Geolocation: FC<GeolocationProps> = ({ latitude, longitude }) => (
  <div>
    <h1>Geolocation:</h1>
    <div>Latitude: {latitude}</div>
    <div>Longitude: {longitude}</div>
  </div>
);

export default Geolocation;
