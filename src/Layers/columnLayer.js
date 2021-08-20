import {JSONLoader} from '@loaders.gl/json';
import {load} from '@loaders.gl/core';
import {ColumnLayer} from '@deck.gl/layers';
import {DATA2}from "./../Constants/data";

const batches =async()=> await load('../dataset/ColumnLayerData.json', JSONLoader);
console.log(batches);
export const columnLayerCustom = new ColumnLayer({
    id: 'column-layer',
    data:batches,
    diskResolution: 12,
    radius: 50,
    extruded: true,
    pickable: true,
    elevationScale: 5000,
    getPosition: d => d.centroid,
    getFillColor: d => [48, 128, d.value * 255, 255],
    getLineColor: [0, 0, 0],
    getElevation: d => d.value
  });

