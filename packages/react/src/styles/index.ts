import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@ignite-ui/tokens';
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
