export type Benefit = {
  id: string;
  title: string;
  description: string;
};

export type WhyUsContent = {
  heading: string;
  benefits: Benefit[];
};
