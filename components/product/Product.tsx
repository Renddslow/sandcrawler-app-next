import styled from 'styled-components';
import { FC, useState } from 'react';
import Head from 'next/head';

import { Product } from './types';
import { Button } from '@components/shared';

import ProductImage from './ProductImage';
import ProductPrice from './ProductPrice';
import ProductDetails from './ProductDetails';
import ProductContent from './ProductContent';
import ProductSpecs from '@components/product/ProductSpecs';
import { useCart } from '@components/cartProvider';
import { useRouter } from 'next/router';

type Props = {
  product: Product;
};

const Hero = styled.section`
  display: grid;
  max-width: 1100px;
  width: 95%;
  grid-gap: 50px;
  grid-template-columns: 4fr 3fr;
  margin: 0 auto;
  padding: 48px 0;
`;

const DetailsContainer = styled.section`
  width: 100%;
  padding: 48px 0;
  display: block;
  position: relative;
  background: #f3f2f0;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 24px;
  align-items: start;
  max-width: 1100px;
  width: 95%;
  margin: 0 auto;
`;

const ProductLayout: FC<Props> = ({ product }) => {
  const router = useRouter();
  const { cartId, updateCount } = useCart();
  const [addingToCart, setAddingToCart] = useState(false);

  const handleAddToCart = () => {
    setAddingToCart(true);
    fetch(`http://localhost:8080/api/carts/${cartId}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          type: 'cart_item',
          attributes: {
            itemId: parseInt(router.query.id as string, 10),
          },
        },
      }),
    }).then(() => {
      setAddingToCart(false);
      updateCount(cartId);
    });
  };

  return (
    <>
      <Head>
        <title>
          {product.name} by {product.manufacturer} • Sandcrawler
        </title>
      </Head>
      <Hero>
        <ProductImage image={product.image} />
        <div>
          <ProductDetails name={product.name} manufacturer={product.manufacturer} />
          <ProductPrice price={product.pricing?.amount || product.originalPrice} />
          <Button disabled={addingToCart} onClick={handleAddToCart}>
            {addingToCart ? 'Adding...' : 'Add to Cart'}
          </Button>
          <ProductContent title="Product Overview" content={product.overview || ''} />
        </div>
      </Hero>
      <DetailsContainer>
        <Details>
          <div>
            <ProductContent title="Product Description" content={product.description || ''} />
            <ProductContent title="Warranty" content={product.warranty || ''} />
          </div>
          <ProductSpecs specs={product.specs} />
        </Details>
      </DetailsContainer>
    </>
  );
};

export default ProductLayout;
