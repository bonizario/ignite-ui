import { VariantProps } from '@stitches/react';
import { ComponentProps, ElementRef, forwardRef } from 'react';

import { Input, Prefix, TextInputContainer } from './styles';

export type TextInputProps = Omit<ComponentProps<typeof Input>, 'size'> & {
  prefix?: string;
  size?: VariantProps<typeof TextInputContainer>['size'];
};

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, size, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer size={size}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    );
  },
);

TextInput.displayName = 'TextInput';
