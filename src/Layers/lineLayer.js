import {LineLayer} from '@deck.gl/layers';
import {DATA3}from "./../Constants/data";

export const lineLayerCustom = new LineLayer({
    id: 'line-layer',
    data:DATA3,
    pickable: true,
    getWidth: 50,
    getSourcePosition: d => d.from.coordinates,
    getTargetPosition: d => d.to.coordinates,
    getColor: d => [Math.sqrt(d.inbound + d.outbound), 140, 0]
  });
