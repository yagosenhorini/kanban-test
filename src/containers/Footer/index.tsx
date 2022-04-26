import React from 'react';

import * as S from './styled';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <S.Footer>&copy;&nbsp;Senhorini Consultoria e Serviços -&nbsp;{year}</S.Footer>
  )
}

export default Footer;