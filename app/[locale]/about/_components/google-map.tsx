"use client"

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api"

import { Shell } from "@/components/ui/shell"

export function GoogleMapsWidget() {
  const containerStyle = {
    height: "400px",
    width: "100%",
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
    <Shell>
      <div className="overflow-hidden rounded-md">
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
      </div>
    </Shell>
  )
}
