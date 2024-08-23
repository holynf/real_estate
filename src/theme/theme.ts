import rtlPlugin from 'stylis-plugin-rtl';
import { createTheme } from '@mui/material/styles';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: "#ff5a5f",
    },
  },
  typography: {
    fontFamily: [
      'yekanBakh',
    ].join(','),
  },
});