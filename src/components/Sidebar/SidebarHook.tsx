import { useState, Dispatch, SetStateAction } from 'react';

export interface SidebarHookType {
  isAdvanced: boolean;
  setIsAdvanced: Dispatch<SetStateAction<boolean>>;
}

function SidebarHook(): SidebarHookType {
  const [isAdvanced, setIsAdvanced] = useState(false);

  return {
    isAdvanced,
    setIsAdvanced,
  };
}

export default SidebarHook;
