import {ArcLayer} from 'deck.gl';
import {DATA}from "./../Constants/data";

export const ArcLayerCustom=new ArcLayer({
    id: 'arcs',
    data: DATA,
    dataTransform: d => d.features.filter(f => f.properties.scalerank < 4),      
    getSourcePosition: f => [-0.4531566, 51.4709959], 
    getTargetPosition: f => f.geometry.coordinates,
    getSourceColor: [0, 128, 200],
    getTargetColor: [200, 0, 80],
    getWidth: 1
  })