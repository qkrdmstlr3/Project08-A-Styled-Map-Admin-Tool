import React from 'react';
import styled from '../utils/styles/styled';
import Sidebar from '../components/Sidebar/SidebarPresenter';
import Map from '../components/Map/MapPresenter';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

function Main(): React.ReactElement {
  return (
    <Container>
      <Sidebar />
      <Map />
    </Container>
  );
}

export default Main;
