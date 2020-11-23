import React, { MouseEvent, useState } from 'react';

const compareButtonClickHandler = (e: MouseEvent<HTMLElement>) => {
  alert('비교 버튼 클릭!');
};

export interface UpperButtonsHookProps {
  fullscreenHandler: () => void;
  smallscreenHandler: () => void;
}

interface UpperButtonsPropsInterface {
  compareButtonClickHandler?: (
    e: React.MouseEvent<HTMLElement, globalThis.MouseEvent>
  ) => void;
  fullScreenButtonClickHandler?: () => void;
  smallScreenButtonClickHandler?: () => void;
  isFullscreen: boolean;
}

function UpperButtonsHook({
  fullscreenHandler,
  smallscreenHandler,
}: UpperButtonsHookProps): UpperButtonsPropsInterface {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const fullScreenButtonClickHandler = () => {
    fullscreenHandler();
    setIsFullscreen(!isFullscreen);
  };

  const smallScreenButtonClickHandler = () => {
    smallscreenHandler();
    setIsFullscreen(!isFullscreen);
  };

  return {
    isFullscreen,
    fullScreenButtonClickHandler,
    smallScreenButtonClickHandler,
    compareButtonClickHandler,
  };
}

export default UpperButtonsHook;
