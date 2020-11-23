import React from 'react';
import styled from '../../../utils/styles/styled';
import SidebarContentHook, {
  SidebarContentHookType,
} from './SidebarContentHook';

import FeatureTypePresenter from './FeatureTypePresenter';

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

function SidebarContentPresenter(): React.ReactElement {
  const {
    featureClickHandler,
    featureName,
    styledFeatureList,
  }: SidebarContentHookType = SidebarContentHook();

  return (
    <ContentWrapper>
      <FeatureTypePresenter
        featureName={featureName}
        styledFeatureList={styledFeatureList}
        featureClickHandler={featureClickHandler}
      />
    </ContentWrapper>
  );
}

export default SidebarContentPresenter;
