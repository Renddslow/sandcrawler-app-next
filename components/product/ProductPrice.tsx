import styled from 'styled-components';
import { FC } from 'react';

const Container = styled.div`
  display: block;
  position: relative;
  padding: 24px 0;
`;

const Dollar = styled.span`
  font-size: 32px;
  font-weight: 600;
`;

const Cents = styled.span`
  position: relative;
  margin-left: 2px;
  bottom: 14px;
  font-weight: 600;
`;

const ProductPrice: FC<{ price: number; className?: string }> = ({ price, className }) => {
  const dollars = new Intl.NumberFormat().format(Math.floor(price / 100));
  const cents = price % 100;
  return (
    <Container className={className}>
      <Dollar>${dollars}</Dollar>
      <Cents>{cents}</Cents>
    </Container>
  );
};

export default ProductPrice;
