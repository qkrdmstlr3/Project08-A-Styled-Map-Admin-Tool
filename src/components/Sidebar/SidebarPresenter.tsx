import React from 'react';
import styled from '../../utils/styles/styled';
import SidebarHook, { SidebarHookType } from './SidebarHook';

import SidebarHeader from './SidebarHeader/SidebarHeaderPresenter';
import SidebarContentFewer from './SidebarContentFewer/SidebarContentPresenter';
import SidebarContentMore from './SidebarContentMore/SidebarContentPresenter';
import SidebarFooter from './SidebarFooter/SidebarFooterPresenter';

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 370px;
  height: 100vh;
`;

function SidebarPresenter(): React.ReactElement {
  const { isAdvanced, setIsAdvanced }: SidebarHookType = SidebarHook();

  return (
    <SidebarWrapper>
      <SidebarHeader isAdvanced={isAdvanced} />
      {isAdvanced ? <SidebarContentMore /> : <SidebarContentFewer />}
      <SidebarFooter isAdvanced={isAdvanced} setIsAdvanced={setIsAdvanced} />
    </SidebarWrapper>
  );
}

export default SidebarPresenter;
