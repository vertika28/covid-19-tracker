import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

function Map() {
    return (
        <div className='map'>
            <LeafletMap>
                <TileLayer
                    url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </LeafletMap>
        </div>
    )
}

export default Map;
