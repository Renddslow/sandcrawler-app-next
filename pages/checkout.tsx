import { NextPage } from 'next';
import styled from 'styled-components';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Head from 'next/head';

import Form from '@components/checkout';
import { useEffect, useState } from 'react';
import { useCart } from '@components/cartProvider';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Container = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 50px;
  max-width: 1100px;
  width: 95%;
  margin: 24px auto;
`;

const checkout: NextPage = () => {
  const { cartId } = useCart();
  const [clientSecret, setClientSecret] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/carts/${cartId}/items`)
      .then((d) => d.json())
      .then((d) => setItems(d.data));
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <Container>
      <Head>
        <title>Checkout • Sandcrawler</title>
      </Head>
      <Elements stripe={stripePromise}>
        <Form />
      </Elements>
    </Container>
  );
};

export default checkout;
