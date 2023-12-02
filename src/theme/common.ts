import { ThemeOptions } from '@mui/material';

export const common = {
  shape: {
    borderRadius: 8
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingLeft: theme.spacing(1),
          paddingRight: theme.spacing(1)
        })
      }
    }
  },
  typography: {
    fontFamily: 'Inter, Helvetica, Arial, sans-serif'
  }
} as const satisfies ThemeOptions;
