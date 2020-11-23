import { useState } from 'react';

export interface DetailTypeHookType {
  detailName: string;
  detailClickHandler: (name: string) => void;
}

function DetailTypeHook(): DetailTypeHookType {
  const [detailName, setDetailName] = useState(''); // (구역 채우기) 이런 형태
  const detailClickHandler = (name: string) => {
    if (name !== detailName) {
      setDetailName(name);
    }
  };

  return {
    detailName,
    detailClickHandler,
  };
}

export default DetailTypeHook;
