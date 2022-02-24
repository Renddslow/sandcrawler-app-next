import styled from 'styled-components';
import { FC } from 'react';
import snarkdown from 'snarkdown';

import { Paragraph } from '@components/shared';

import SectionTitle from './SectionTitle';

type Props = {
  title: string;
  content: string;
};

const Column = styled.div`
  margin-top: 40px;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: minmax(0, 1fr);
`;

const ProductContent: FC<Props> = (props) => {
  const rendered = snarkdown(props.content);
  return (
    <Column>
      <SectionTitle>{props.title}</SectionTitle>
      <Paragraph dangerouslySetInnerHTML={{ __html: rendered }} />
    </Column>
  );
};

export default ProductContent;
