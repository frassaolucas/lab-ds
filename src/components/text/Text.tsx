import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export type TextProps = {
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: ReactNode;
  className?: string;
};

export const Text: React.FC<TextProps> = ({
  size,
  asChild,
  children,
  className,
}) => {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        className,
      )}
    >
      {children}
    </Comp>
  );
};

Text.defaultProps = {
  size: 'md',
  asChild: false,
};
