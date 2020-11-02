import { DefaultTheme } from 'styled-components';

const fontSizes = [12, 14, 16, 18, 24, 34, 58, 72];

const colors = {
  primary: {
    light: '#48c9b0',
    main: '#1abc9c',
    dark: '#17a98c',
  },
  secondary: {
    light: '#f5a092',
    main: '#f28573',
    dark: '#d86b59',
  },
  danger: {
    light: '#ee8277',
    main: '#e95e50',
    dark: '#d04436',
  },
  success: {
    light: '#6ddb9c',
    main: '#43d17f',
    dark: '#29b866',
  },
  info: {
    light: '#7fe6fc',
    main: '#5adffb',
    dark: '#41c5e2',
  },
  warining: {
    light: '#e0874d',
    main: '#d7651a',
    dark: '#be4c00',
  },
  text: {
    main: '#1b1f26',
    secondary: '#272c36',
  },
  textInverse: {
    main: '#fff',
    secondary: '#e9eaeb',
  },
  bgInverse: '#272c36',
  bg: '#fff',
  borderColor: 'rgba(39,44,54,.3)',
  borderFocus: 'rgba(39,44,54,.8)',
};

const lineHeight = 1.5;
const fontFamily = "'Nato Sans', Helvetica, sans-serif";
const fontWeights = [400, 700];

const Theme: DefaultTheme = {
  colors,
  lineHeight,
  fontFamily,
  fontSizes,
  fontWeights,
  fontSizeBase: fontSizes[2],
  borderRadius: '6px',
};

export default Theme;
