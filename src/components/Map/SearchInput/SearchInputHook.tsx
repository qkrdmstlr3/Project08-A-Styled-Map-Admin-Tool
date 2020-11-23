import { useState, ChangeEvent } from 'react';

export interface SearchInputHookType {
  inputText: string;
  onSearchInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchInputHook(): SearchInputHookType {
  const [inputText, setInputText] = useState<string>('');
  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newInputText = e.target.value;
    setInputText(newInputText);
  };

  return {
    inputText,
    onSearchInputChange,
  };
}

export default SearchInputHook;
