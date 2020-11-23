import { useState } from 'react';

interface SidebarDropdownContainerProps {
  isOpened: boolean;
  dropdownToggleHandler: () => void;
}

export interface SidebarDropdownHookType {
  resetClickHandler: () => void;
  importModalToggleHandler: () => void;
  isModalOpened: boolean;
}

function SidebarDropdownContainer({
  isOpened,
  dropdownToggleHandler,
}: SidebarDropdownContainerProps): SidebarDropdownHookType {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const importModalToggleHandler = () => {
    if (isOpened) dropdownToggleHandler();
    setIsModalOpened(!isModalOpened);
  };

  const resetClickHandler = () => {
    // 전역 상태 초기화
  };

  return {
    importModalToggleHandler,
    resetClickHandler,
    isModalOpened,
  };
}

export default SidebarDropdownContainer;
