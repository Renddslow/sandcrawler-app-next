import styled from 'styled-components';
import { FC } from 'react';

import ProductImage from '@components/product/ProductImage';
import { Product } from '@components/product/types';
import ProductPrice from '@components/product/ProductPrice';

const Container = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: minmax(0, 1fr);
  color: #000;
  text-decoration: none;
`;

const Price = styled(ProductPrice)`
  padding: 0;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  display: block;
`;

const Listing: FC<{ product: Product }> = ({ product }) => {
  return (
    <Container>
      <ProductImage image={product.image} />
      <Name>
        {product.name} by {product.manufacturer}
      </Name>
      <Price price={product.pricing?.amount || product.originalPrice} />
    </Container>
  );
};

export default Listing;
