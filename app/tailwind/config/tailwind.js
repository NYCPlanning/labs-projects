import container from 'tailwindcss/plugins/container'
import glhdTailwindcssTransitions from 'glhd-tailwindcss-transitions'

import colors from './colors';
import screens from './screens';
import fonts from './fonts';
import textSizes from './text-sizes';
import fontWeights from './font-weights';
import leading from './line-height';
import tracking from './letter-spacing';
import textColors from './text-colors';
import backgroundColors from './background-colors';
import backgroundSize from './background-size';
import borderWidths from './border-widths';
import borderColors from './border-colors';
import borderRadius from './border-radius';
// import width from './width';
import height from './height';
import minWidth from './min-width';
import minHeight from './min-height';
import maxWidth from './max-width';
import maxHeight from './max-height';
import padding from './padding';
import margin from './margin';
import negativeMargin from './negative-margin';
import shadows from './shadows';
import zIndex from './z-index';
import opacity from './opacity';
import svgFill from './svg-fill';
import svgStroke from './svg-stroke';

export default {
  colors,
  screens,
  fonts,
  textSizes,
  fontWeights,
  leading,
  tracking,
  textColors,
  backgroundColors,
  backgroundSize,
  borderWidths,
  borderColors,
  borderRadius,
  width: {
    'auto': 'auto',
    'px': '1px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
    '1/2': '50%',
    '1/3': '33.33333%',
    '2/3': '66.66667%',
    '1/4': '25%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.66667%',
    '5/6': '83.33333%',
    'full': '100%',
    'screen': '100vw',
  },
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  padding,
  margin,
  negativeMargin,
  shadows,
  zIndex,
  opacity,
  svgFill,
  svgStroke,

  modules: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColors: ['responsive', 'hover'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderColors: ['responsive', 'hover'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidths: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive', 'group-hover'],
    flexbox: ['responsive'],
    float: ['responsive'],
    fonts: ['responsive'],
    fontWeights: ['responsive', 'hover'],
    height: ['responsive'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive', 'hover'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive', 'hover'],
    opacity: ['responsive'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    shadows: ['responsive', 'hover'],
    svgFill: [],
    svgStroke: [],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover'],
    textSizes: ['responsive', 'group-hover', 'hover'],
    textStyle: ['responsive', 'hover'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive']
  },

  /*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */

  plugins: [
    container({
      // center: true,
      // padding: '1rem',
    }),
    glhdTailwindcssTransitions(),
  ],

  /*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

  options: {
    prefix: '',
    important: false,
    separator: ':'
  }
};
