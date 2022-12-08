import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};
function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!,
  });

  const center = useMemo(
    () => ({
      lat: 31.6080128,
      lng: 34.7602944,
    }),
    []
  );

  const [map, setMap] = React.useState();

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}>
        <MarkerF position={center} />
      </GoogleMap>
    )
  );
}

export default Map;
