import { InputHTMLAttributes, ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export type TextInputRoot = {
  children: ReactNode;
};

const TextInputRoot: React.FC<TextInputRoot> = ({ children }) => {
  return (
    <div
      className={clsx(
        'w-full h-12 flex items-center gap-3 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300',
      )}
    >
      {children}
    </div>
  );
};

TextInputRoot.displayName = 'TextInput.Root';

export type TextInputIconProps = {
  children: ReactNode;
};

const TextInputIcon: React.FC<TextInputIconProps> = ({ children }) => {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
};

TextInputIcon.displayName = 'TextInput.Icon';

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>;

const TextInputInput: React.FC<TextInputInputProps> = (props) => {
  return (
    <input
      className="flex-1 outline-none bg-transparent text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    />
  );
};

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
};
