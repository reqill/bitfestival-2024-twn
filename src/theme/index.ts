import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import { common } from './common';
import { light } from './light';
import { dark } from './dark';

declare module '@mui/material/styles' {
  interface Palette {
    // here we define custom palette
    // basically everything
  }

  interface Theme {
    palette: Palette;
  }

  interface PaletteOptions {
    // here we define custom palette options (basically everything from above but as optional)
  }

  interface ThemeOptions {
    palette?: PaletteOptions;
  }
}

export const lightTheme = createTheme(deepmerge(common, light));
export const darkTheme = createTheme(deepmerge(common, dark));
