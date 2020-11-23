import React, { ReactElement } from 'react';
import styled from '../../../utils/styles/styled';
import UpperButtonsHook, { UpperButtonsHookProps } from './UpperButtonsHook';

import SearchInput from '../SearchInput/SearchInputPresenter';
import Button from '../Button/ButtonPresenter';
import FullScreenIcon from '../../Icon/FullScreen';
import SmallScreenIcon from '../../Icon/SmallScreen';

const UpperButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 10;

  width: 300px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

function UpperButtonsPresenter({
  fullscreenHandler,
  smallscreenHandler,
}: UpperButtonsHookProps): ReactElement {
  const {
    isFullscreen,
    fullScreenButtonClickHandler,
    smallScreenButtonClickHandler,
    compareButtonClickHandler,
  } = UpperButtonsHook({ fullscreenHandler, smallscreenHandler });

  return (
    <UpperButtonsWrapper>
      <SearchInput />
      <ButtonsWrapper>
        <Button width="40px" height="40px" onClick={compareButtonClickHandler}>
          비교하기
        </Button>
        <Button
          width="40px"
          height="40px"
          onClick={
            isFullscreen
              ? smallScreenButtonClickHandler
              : fullScreenButtonClickHandler
          }
        >
          {isFullscreen ? <SmallScreenIcon /> : <FullScreenIcon />}
        </Button>
      </ButtonsWrapper>
    </UpperButtonsWrapper>
  );
}

export default UpperButtonsPresenter;
