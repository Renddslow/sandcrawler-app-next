import styled from 'styled-components';
import { FC } from 'react';

type Props = {
  name: string;
  manufacturer: string;
};

const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  line-height: 1.1;
`;

const Vendor = styled.p`
  font-size: 18px;
`;

const Column = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: minmax(0, 1fr);
`;

const ProductDetails: FC<Props> = (props) => {
  return (
    <Column>
      <Title>{props.name}</Title>
      <Vendor>{props.manufacturer}</Vendor>
    </Column>
  );
};

export default ProductDetails;
