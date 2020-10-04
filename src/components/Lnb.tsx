import React from 'react';
import styled from 'styled-components';

function Lnb() {
  return (
    <LnbContainer>
      <LnbLinkWrapper>
        <LnbLink href="#">AirMug Pro</LnbLink>
        <LnbLink href="#">개요</LnbLink>
        <LnbLink href="#">제품사양</LnbLink>
        <LnbLink href="#">구입하기</LnbLink>
      </LnbLinkWrapper>
    </LnbContainer>
  );
}

const LnbContainer = styled.nav``;
const LnbLinkWrapper = styled.div``;
const LnbLink = styled.a``;

export default Lnb;
