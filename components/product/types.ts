export type ItemSpec = {
  label: string;
  value: string;
};

export type Product = {
  name: string;
  slug: string;
  manufacturer: string;
  originalPrice: number;
  overview: string;
  description: string;
  specs: ItemSpec[];
  warranty: string;
  image: string;
  pricing: {
    amount: number;
    validTo: string;
    saleName: string;
  };
};
