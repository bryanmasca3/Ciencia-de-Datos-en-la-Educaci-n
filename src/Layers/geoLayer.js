import {GeoJsonLayer} from 'deck.gl';
import {DATA}from "./../Constants/data";

export const GeoLayerCustom =new GeoJsonLayer({
    id: 'airports',
    data: DATA,      
    filled: true,
    pointRadiusMinPixels: 2,
    pointRadiusScale: 2000,
    getPointRadius: f => 11 - f.properties.scalerank,
    getFillColor: [200, 0, 80, 180],    
    pickable: true,
    autoHighlight: true,      
  })