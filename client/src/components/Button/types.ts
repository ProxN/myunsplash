export type Status = 'primary' | 'default' | 'danger';

export type Size = 'small' | 'default' | 'large';

export type Vairant = 'default' | 'primary' | 'danger';

export interface ButtonStylesProps {
  variant?: Vairant;
  Size?: Size;
  rounded?: boolean;
}
