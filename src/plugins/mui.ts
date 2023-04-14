import {
  Breakpoints,
  createTheme,
  Shadows,
  ThemeOptions,
} from "@mui/material/styles";
import chroma from "chroma-js";

import { borderRadius, boxShadow, colors, screens } from "../config/defaults";

const breakpointValues = Object.fromEntries(
  Object.entries(screens).map(([key, val]) => [key, parseInt(val as string)])
);

const shadowValues = [
  ...Object.values(boxShadow),
  ...Array(25 - Object.values(boxShadow).length).fill("none"),
];

const grayAlphaLight = (alpha?: number) =>
  chroma(colors.gray[300])
    .alpha(alpha || 0.75)
    .css();

const grayAlphaDark = (alpha?: number) =>
  chroma(colors.gray[600])
    .alpha(alpha || 0.75)
    .css();

const defaultOptions: Partial<ThemeOptions> = {
  breakpoints: {
    values: { xs: 0, ...breakpointValues } as Breakpoints["values"],
    step: 2,
  },
  shadows: shadowValues as Shadows,
  typography: {
    fontFamily: "'Golos Text', sans-serif",
  },
  shape: {
    borderRadius: parseInt(borderRadius.DEFAULT),
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            backgroundColor:
              theme.palette.mode === "dark"
                ? grayAlphaDark()
                : grayAlphaLight(),
          };
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: "none",
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        fullWidth: true,
        maxWidth: "md",
        PaperProps: {
          elevation: 4,
        },
      },
      styleOverrides: {
        paper: {
          backgroundImage: "none",
        },
      },
    },
    MuiMenu: {
      defaultProps: {
        elevation: 2,
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:hover": {
            backgroundColor:
              theme.palette.mode === "dark"
                ? grayAlphaDark(0.5)
                : grayAlphaLight(0.5),
          },
        }),
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontWeight: 500,
          textTransform: "none",
          ...(ownerState.variant !== "contained" &&
            ownerState.color === "neutral" && {
              color: colors.inherit,
            }),
        }),
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: "inherit",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            "&:not(.Mui-error):hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.light,
            },
          };
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color:
              theme.palette.mode === "dark"
                ? grayAlphaLight(0.75)
                : grayAlphaDark(0.75),
          };
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: ({ ownerState, theme }) =>
          theme.unstable_sx({
            mx: 0,
            fontSize: "0.85rem",
            ...(ownerState.error && {
              "&::before": {
                content: "'⨻'",
                fontSize: "0.9rem",
                fontWeight: 700,
                mr: 0.5,
              },
            }),
          }),
      },
    },
  },
};

// https://mui.com/material-ui/customization/default-theme/
export const lightTheme = createTheme({
  ...defaultOptions,
  palette: {
    mode: "light",
    divider: colors.gray[300],
    primary: {
      main: colors.primary[500],
      light: colors.primary[400],
      dark: colors.primary[600],
      contrastText: colors.white,
    },
    secondary: {
      main: colors.secondary[500],
      light: colors.secondary[400],
      dark: colors.secondary[600],
      contrastText: colors.white,
    },
    neutral: {
      main: colors.gray[200],
      light: colors.gray[100],
      dark: colors.gray[300],
      contrastText: colors.gray[900],
    },
    success: {
      main: colors.success[500],
      light: colors.success[400],
      dark: colors.success[600],
      contrastText: colors.white,
    },
    info: {
      main: colors.info[500],
      light: colors.info[400],
      dark: colors.info[600],
      contrastText: colors.white,
    },
    warning: {
      main: colors.warning[500],
      light: colors.warning[400],
      dark: colors.warning[600],
      contrastText: colors.black,
    },
    error: {
      main: colors.danger[500],
      light: colors.danger[400],
      dark: colors.danger[600],
      contrastText: colors.white,
    },
    text: {
      primary: colors.gray[900],
      secondary: colors.gray[700],
      disabled: colors.gray[500],
    },
    background: {
      default: colors.gray[50],
      paper: colors.white,
    },
  },
});

export const darkTheme = createTheme({
  ...defaultOptions,
  palette: {
    mode: "dark",
    divider: colors.gray[600],
    primary: {
      main: colors.primary[500],
      light: colors.primary[400],
      dark: colors.primary[600],
      contrastText: colors.white,
    },
    secondary: {
      main: colors.secondary[500],
      light: colors.secondary[400],
      dark: colors.secondary[600],
      contrastText: colors.white,
    },
    neutral: {
      main: colors.gray[500],
      light: colors.gray[400],
      dark: colors.gray[600],
      contrastText: colors.white,
    },
    success: {
      main: colors.success[400],
      light: colors.success[300],
      dark: colors.success[500],
      contrastText: colors.white,
    },
    info: {
      main: colors.info[400],
      light: colors.info[300],
      dark: colors.info[500],
      contrastText: colors.white,
    },
    warning: {
      main: colors.warning[400],
      light: colors.warning[300],
      dark: colors.warning[500],
      contrastText: colors.black,
    },
    error: {
      main: colors.danger[400],
      light: colors.danger[300],
      dark: colors.danger[500],
      contrastText: colors.white,
    },
    text: {
      primary: colors.white,
      secondary: colors.gray[200],
      disabled: colors.gray[400],
    },
    background: {
      default: colors.gray[900],
      paper: colors.gray[800],
    },
  },
});
