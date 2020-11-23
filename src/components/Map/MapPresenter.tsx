import React from 'react';
import styled from '../../utils/styles/styled';
import MapHook, { MapHookType } from './MapHook';

import UpperButtonsPresenter from './ButtonGroup/UpperButtonsPresenter';
import LowerButtonsPresenter from './ButtonGroup/LowerButtonsPresenter';

const MapWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  canvas {
    outline: none;
  }
`;

function MapPresenter(): React.ReactElement {
  const {
    mapRef,
    fullscreenHandler,
    smallscreenHandler,
    plusZoom,
    minusZoom,
  }: MapHookType = MapHook();

  return (
    <MapWrapper ref={mapRef}>
      <UpperButtonsPresenter
        fullscreenHandler={fullscreenHandler}
        smallscreenHandler={smallscreenHandler}
      />
      <LowerButtonsPresenter plusZoom={plusZoom} minusZoom={minusZoom} />
    </MapWrapper>
  );
}

export default MapPresenter;
