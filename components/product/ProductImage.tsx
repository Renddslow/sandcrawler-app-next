import { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

type Props = {
  image: string;
};

const ImageContainer = styled.div`
  width: 100%;
  height: 0;
  position: relative;
  padding-bottom: 100%;
  border-radius: 8px;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

const ProductImage: FC<Props> = ({ image }) => {
  return (
    <ImageContainer>
      <Image src={image} layout="fill" />
    </ImageContainer>
  );
};

export default ProductImage;
