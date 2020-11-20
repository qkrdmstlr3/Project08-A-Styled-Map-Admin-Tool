import React from 'react';
import styled from '../../../utils/styles/styled';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
`;

const Button = styled.button`
  position: relative;
  z-index: 10;
  width: 48%;
  background-color: ${(props) => props.theme.LIGHTGREY};
  border: none;
  border-radius: 5px;
  box-shadow: -10px 16px 40px -23px ${(props) => props.theme.BLACK};
  padding: 12px 0;
`;

interface SidebarFooterPresenterProps {
  isAdvanced: boolean;
  clickHandler: () => void;
}

function SidebarFooterPresenter({
  isAdvanced,
  clickHandler,
}: SidebarFooterPresenterProps): React.ReactElement {
  return (
    <FooterWrapper>
      <Button onClick={clickHandler}>
        {isAdvanced ? '돌아가기' : '고급설정'}
      </Button>
      <Button>내보내기</Button>
    </FooterWrapper>
  );
}

export default SidebarFooterPresenter;
