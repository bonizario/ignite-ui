import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@bonizario-ignite-ui/tokens';
import { createStitches, defaultThemeMap } from '@stitches/react';

export const {
  config,
  theme,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    minHeight: 'space',
    minWidth: 'space',
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
});
