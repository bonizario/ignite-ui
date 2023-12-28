import { colors } from '@ignite-ui/tokens';

import { styled } from './styles';

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  height: '$10',
});

export function App() {
  return <Button style={{ color: colors.white }}>Hello World</Button>;
}
