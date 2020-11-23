import { useState } from 'react';

export interface SidebarHeaderHookType {
  isOpened: boolean;
  dropdownToggleHandler: () => void;
}

function SidebarHeaderHook(): SidebarHeaderHookType {
  const [isOpened, setIsOpened] = useState(false);
  const dropdownToggleHandler = () => {
    setIsOpened(!isOpened);
  };

  return {
    isOpened,
    dropdownToggleHandler,
  };
}

export default SidebarHeaderHook;
