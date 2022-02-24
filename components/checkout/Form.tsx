import styled from 'styled-components';
import { CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { SyntheticEvent, useState } from 'react';

import SectionTitle from '@components/product/SectionTitle';
import Input, { InputStyled } from '@components/shared/Input';
import { Button } from '@components/shared';
import { StripeElements } from '@stripe/stripe-js';

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 32px;
`;

const Panel = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 12px;
  padding-bottom: 50px;

  &:not(:last-child) {
    border-bottom: 1px solid #000;
  }
`;

const Row = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 12px;
  width: 100%;
`;

const StyledCardElement = styled(CardNumberElement)`
  ${InputStyled};
`;

const initialAddressState = {
  addressOne: '',
  addressTwo: '',
  addressThree: '',
  city: '',
  state: '',
  zipCode: '',
};

const Form = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [shipping, setShipping] = useState(initialAddressState);
  const [billing, setBilling] = useState(initialAddressState);

  const update = (state: 'details' | 'shipping' | 'billing', key: string) => (value: string) => {
    const updater = (s: any) => ({ ...s, [key]: value });
    switch (state) {
      case 'details': {
        setDetails(updater);
        break;
      }
      case 'shipping':
        setShipping(updater);
        break;
      case 'billing':
        setBilling(updater);
        break;
    }
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(elements);
    const result = await stripe?.confirmPayment({
      elements: elements as StripeElements,
      confirmParams: {
        return_url: 'https://my-site.com/order/123/complete',
      },
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Panel>
        <SectionTitle>Personal Details</SectionTitle>
        <Row>
          <Input
            label="First Name"
            onChange={update('details', 'firstName')}
            value={details.firstName}
          />
          <Input
            label="Last Name"
            onChange={update('details', 'lastName')}
            value={details.lastName}
          />
        </Row>
        <Input label="Email" onChange={update('details', 'email')} value={details.email} />
      </Panel>
      <Panel>
        <SectionTitle>Shipping</SectionTitle>
        <Input
          label="Address One"
          onChange={update('shipping', 'addressOne')}
          value={shipping.addressOne}
        />
        <Input
          label="Address Two"
          onChange={update('shipping', 'addressTwo')}
          value={shipping.addressTwo}
        />
        <Input
          label="Address Three"
          onChange={update('shipping', 'addressThree')}
          value={shipping.addressThree}
        />
        <Row>
          <Input label="City" onChange={update('shipping', 'city')} value={shipping.city} />
          <Input label="State" onChange={update('shipping', 'state')} value={shipping.state} />
          <Input
            label="Zip Code"
            onChange={update('shipping', 'zipCode')}
            value={shipping.zipCode}
          />
        </Row>
      </Panel>
      <Panel>
        <SectionTitle>Billing</SectionTitle>
        <Input
          label="Address One"
          onChange={update('billing', 'addressOne')}
          value={billing.addressOne}
        />
        <Input
          label="Address Two"
          onChange={update('billing', 'addressTwo')}
          value={billing.addressTwo}
        />
        <Input
          label="Address Three"
          onChange={update('billing', 'addressThree')}
          value={billing.addressThree}
        />
        <Row>
          <Input label="City" onChange={update('billing', 'city')} value={billing.city} />
          <Input label="State" onChange={update('billing', 'state')} value={billing.state} />
          <Input label="Zip Code" onChange={update('billing', 'zipCode')} value={billing.zipCode} />
        </Row>
      </Panel>
      <Panel>
        <SectionTitle>Payment</SectionTitle>
        <StyledCardElement />
      </Panel>
      <Button type="submit">Checkout</Button>
    </StyledForm>
  );
};

export default Form;
