type TVariants = {
  filled: string;
  outline: string;
};

type TSizes = {
  sm: string;
  lg: string;
};

export type TButton = {
  variant?: keyof TVariants;
  size?: keyof TSizes;
  text: string;
};
