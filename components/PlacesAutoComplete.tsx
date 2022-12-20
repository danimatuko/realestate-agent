import { useState, useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import { Libraries, PlacesProps } from '../types';

const libraries: Libraries = ['places'];

export default function Places({ setAddress }: PlacesProps) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!,
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map setAddress={setAddress} />;
}

function Map({ setAddress }: PlacesProps) {
  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
  const [selected, setSelected] = useState(center);

  return (
    <>
      <div className='places-container'>
        {setAddress && (
          <PlacesAutocomplete
            setSelected={setSelected}
            setAddress={setAddress}
          />
        )}
      </div>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: 500 }}
        zoom={15}
        center={selected}
        mapContainerClassName='map-container'>
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected, setAddress }: PlacesProps) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected?.({ lat, lng });
    setAddress?.(results[0].formatted_address);
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className='select w-full mb-4'
        placeholder='Search an address'
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === 'OK' &&
            data.map(({ place_id, description }) => (
              <ComboboxOption
                key={place_id}
                value={description}
              />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
