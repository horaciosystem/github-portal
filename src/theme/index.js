import defaultTheme from "reakit-theme-default"

const theme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    black: "#2C2C2C",
    black10: "#e5e5e5",
    text: "#2C2C2C",
    text75: "#616161",
    text50: "#959595",
    text25: "#CACACA",
    error: "#d32f2f"
  },
  pageWidth: "1200px",
  spacing: {
    normal: "1.6rem",
    small: "0.8rem"
  },
  fontWeight: {
    regular: 400,
    semibold: 600,
    bold: 700
  }
}

export default theme
