import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export type HeadingProps = {
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: ReactNode;
  className?: string;
};

export const Heading: React.FC<HeadingProps> = ({
  size,
  asChild,
  children,
  className,
}) => {
  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp
      className={clsx(
        'text-gray-100 font-bold font-sans',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        },
        className,
      )}
    >
      {children}
    </Comp>
  );
};

Heading.defaultProps = {
  size: 'md',
  asChild: false,
};
