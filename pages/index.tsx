import Head from 'next/head';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import styled from 'styled-components';
import Link from 'next/link';

import Listing from '@components/listing';
import { Product } from '@components/product/types';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  max-width: 1100px;
  width: 95%;
  margin: 50px auto 24px;
  grid-gap: 40px;
`;

const StyledLink = styled.a`
  color: #000;
  text-decoration: none;
`;

export const getServerSideProps = async (context: GetServerSidePropsContext<{ id: string }>) => {
  const data = await fetch(`http://localhost:8080/api/items`).then((d) => d.json());

  return {
    props: {
      products: data.data,
    },
  };
};

/**
 * TODO: cart context
 * TODO: checkout
 */

const Home = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <ProductGrid>
      <Head>
        <title>Sandcrawler</title>
      </Head>
      {props.products.map((product: { type: 'item'; id: string; attributes: Product }) => (
        <Link href={`/product/${product.id}/${product.attributes.slug}`} passHref key={product.id}>
          <StyledLink>
            <Listing product={product.attributes} />
          </StyledLink>
        </Link>
      ))}
    </ProductGrid>
  );
};

export default Home;
