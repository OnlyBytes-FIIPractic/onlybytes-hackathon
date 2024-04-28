import React, {useEffect, useState} from "react";
import {GoogleMap, LoadScriptNext, Marker} from "@react-google-maps/api";
import {Button, Dialog, DialogBody, DialogFooter, DialogHeader} from "@material-tailwind/react";

export function MapsLocation({setMarker}) {
  const [showModal, setShowModal] = useState(false);
  const [pin, setPin] = useState(null);
  const [center, setCenter] = useState({
    lat: 40.712776,
    lng: -74.005974
  });

  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setCenter(pos);
          setPin(pos);
        },
        function () {
          console.error("Error: The Geolocation service failed");
        }
      );
    } else {
      console.error("Error: Your browser doesn't support geolocation.");
    }
  }, []);

  const onMapClick = (event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    setPin(newMarker);
  };

  const onSave = () => {
    setMarker(pin);
    setShowModal(false);
  };

  return <>
    <i className={"fas fa-map-marker-alt cursor-pointer"}
      onClick={() => setShowModal(true)}
    />

    <Dialog open={showModal}>
      <DialogHeader>
        <span>Select a location</span>
        <i className={"fas fa-xmark ml-auto cursor-pointer"} onClick={() => setShowModal(false)}/>
      </DialogHeader>
      <DialogBody>
        <LoadScriptNext googleMapsApiKey={import.meta.env.VITE_APP_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onClick={onMapClick}
          >
            {pin && <Marker position={pin} />}
          </GoogleMap>
        </LoadScriptNext>
      </DialogBody>
      <DialogFooter>
        <Button className="shadow-md bg-secondary hover:bg-primary"
                ripple
                onClick={onSave}>Select</Button>
      </DialogFooter>
    </Dialog>
  </>
}