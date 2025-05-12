export type TSize = 'md' | 'lg' | 'xl' | 'xxl';

export type TVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'link-color'
  | 'link-gray'
  | 'destructive';

export type TLink = {
  label: string;
  path: string;
  size: TSize;
  variant: TVariant;
};

export type TCtaButton = {
  label: string;
  path: string;
  size: TSize;
  variant: TVariant;
};
