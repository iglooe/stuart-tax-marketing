"use client"

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api"

export function GoogleMapsWidget() {
  const containerStyle = {
    width: "100%",
    height: "400px",
  }

  const mapCenter = {
    lat: 30.18704,
    lng: -97.77946,
  }

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API! as string,
  })

  if (!isLoaded) return null

  return (
    <GoogleMap
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
      mapContainerStyle={containerStyle}
      center={mapCenter}
      zoom={14}
    >
      <MarkerF position={mapCenter} />
    </GoogleMap>
  )
}
