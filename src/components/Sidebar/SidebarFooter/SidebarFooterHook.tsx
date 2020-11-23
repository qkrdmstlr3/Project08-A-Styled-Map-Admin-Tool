export interface SidebarFooterHookType {
  clickHandler: () => void;
}

interface SidebarFooterHookProps {
  isAdvanced: boolean;
  setIsAdvanced: (isAdvanced: boolean) => void;
}

function SidebarFooterHook({
  isAdvanced,
  setIsAdvanced,
}: SidebarFooterHookProps): SidebarFooterHookType {
  const clickHandler = () => {
    setIsAdvanced(!isAdvanced);
  };

  return {
    clickHandler,
  };
}

export default SidebarFooterHook;
