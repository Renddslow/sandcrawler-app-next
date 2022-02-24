import styled from 'styled-components';
import { FC } from 'react';
import { ItemSpec } from '@components/product/types';
import SectionTitle from '@components/product/SectionTitle';

type Props = {
  specs: ItemSpec[];
};

const Container = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 12px;
`;

const Cell = styled.div`
  padding: 12px 24px;
`;

const LabelCell = styled(Cell)`
  font-weight: 600;
  text-align: right;
  background: #c3c4c2;
`;

const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 175px) 1fr;

  &:not(:last-child) {
    border-bottom: 1px solid #000;
  }

  &:first-child ${LabelCell} {
    border-top-left-radius: 12px;
  }

  &:last-child ${LabelCell} {
    border-bottom-left-radius: 12px;
  }
`;

const ProductSpecs: FC<Props> = (props) => {
  return (
    <Container>
      <SectionTitle>Specifications</SectionTitle>
      <div>
        {props.specs.map((spec) => (
          <Row key={spec.label}>
            <LabelCell>{spec.label}</LabelCell>
            <Cell>{spec.value}</Cell>
          </Row>
        ))}
      </div>
    </Container>
  );
};

export default ProductSpecs;
