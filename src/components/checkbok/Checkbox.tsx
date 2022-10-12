import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export type CheckboxProps = RadixCheckbox.CheckboxProps;

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <RadixCheckbox.Root
      className="w-6 h-6 p-[2px] bg-gray-800 rounded"
      {...props}
    >
      <RadixCheckbox.Indicator asChild>
        <Check weight="bold" className="w-5 h-5 text-cyan-500" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
};
