import React, { useState } from 'react';

export interface ImportModalHookType {
  onClickClose: (e: React.MouseEvent) => void;
  text: string;
  changeText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClickOK: (e: React.MouseEvent) => void;
}

interface ImportModalHookProps {
  importModalToggleHandler: () => void;
}

function ImportModalHook({
  importModalToggleHandler,
}: ImportModalHookProps): ImportModalHookType {
  const [text, setText] = useState('');

  const onClickClose = () => {
    setText('');
    importModalToggleHandler();
  };

  const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const onClickOK = (e: React.MouseEvent) => {
    importModalToggleHandler();
  };

  return {
    onClickClose,
    text,
    changeText,
    onClickOK,
  };
}

export default ImportModalHook;
