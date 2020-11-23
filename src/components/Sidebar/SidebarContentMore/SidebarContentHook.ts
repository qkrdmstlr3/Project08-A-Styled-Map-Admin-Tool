import React, { useState } from 'react';

export interface SidebarContentHookType {
  featureName: string;
  styledFeatureList: any;
  featureClickHandler: (name: string) => void;
}

function SidebarContentHook(): SidebarContentHookType {
  const [featureName, setFeatureName] = useState('');
  const [styledFeatureList, setStyledFeatureList] = useState([]); // 추후 전역 상태로 변경

  const featureClickHandler = (name: string) => {
    if (name !== featureName) {
      setFeatureName(name);
    }
  };

  return {
    featureName,
    styledFeatureList,
    featureClickHandler,
  };
}

export default SidebarContentHook;
