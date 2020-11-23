import React, { ReactElement } from 'react';
import styled from '../../../utils/styles/styled';
import SearchInputHook, { SearchInputHookType } from './SearchInputHook';

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  margin: 0;
  padding-left: 15px;

  text-align: left;

  border: 0;
  border-radius: 5px;

  background-color: white;
  box-shadow: 0 0 10px grey;
`;

function SearchInputPresenter(): ReactElement {
  const {
    inputText,
    onSearchInputChange,
  }: SearchInputHookType = SearchInputHook();

  return (
    <SearchInput
      value={inputText}
      onChange={onSearchInputChange}
      placeholder="검색할 장소를 입력하세요"
    />
  );
}

export default SearchInputPresenter;
