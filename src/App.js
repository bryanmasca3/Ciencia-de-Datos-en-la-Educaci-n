import React from 'react';
import {StaticMap, MapContext, NavigationControl} from 'react-map-gl';
import DeckGL from 'deck.gl';
import {MAPBOX_TOKEN,MAP_STYLE}from "./Constants/variables";
import {NAV_CONTROL_STYLE} from "./utils/control";
//import {GeoLayerCustom} from "./Layers/geoLayer";
//import {ArcLayerCustom} from "./Layers/arcLayer";
import {columnLayerCustom} from "./Layers/columnLayer";
import {lineLayerCustom} from "./Layers/lineLayer";

const INITIAL_VIEW_STATE = {
  latitude: 41.874,
  longitude: -75.789,
  zoom: 5
};
console.log(columnLayerCustom);
const App=()=> {  
  const layers = [
    columnLayerCustom,
    lineLayerCustom
  ];

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
      ContextProvider={MapContext.Provider}>
        <StaticMap mapStyle={MAP_STYLE} mapboxApiAccessToken={MAPBOX_TOKEN} />
        <NavigationControl style={NAV_CONTROL_STYLE} />
    </DeckGL>
  );
}
export default App;
