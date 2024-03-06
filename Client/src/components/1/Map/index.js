import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { useEffect } from 'react';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';

const MapDemo = () => {
  const Search = (props) => {
    const map = useMap() 
    const { provider } = props
  
    useEffect(() => {
        const searchControl = new GeoSearchControl({
            provider,
        })
  
        map.addControl(searchControl)
        return () => map.removeControl(searchControl)
    }, [map, props, provider])
  
    return null
  }

  const position = [21.036898, 105.8322851];

  return (
    <div style={{margin: '30px auto', width: '90%'}}>
      <MapContainer
        center={position}
        zoom={20}
        style={{ height: '500px', width: '800px' }}
      >
        <div style={{width: '90%', margin: 'auto'}}>
          <Search provider={new OpenStreetMapProvider()} />
        </div>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default MapDemo;
