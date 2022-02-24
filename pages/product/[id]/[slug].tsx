import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

import ProductLayout from '@components/product';

export const getServerSideProps = async (context: GetServerSidePropsContext<{ id: string }>) => {
  const data = await fetch(`http://localhost:8080/api/items/${context.params?.id}`).then((d) =>
    d.json(),
  );

  return {
    props: {
      id: context.params?.id,
      productData: data.data.attributes,
    },
  };
};

const Slug = ({ id, productData }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  return <ProductLayout product={productData} />;
};

export default Slug;
