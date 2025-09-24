import { createTheme } from "@mui/material/styles";
import i18n from "./components/i18n";

const theme = createTheme({
  typography: {
    // في الـ MUI theme
    fontFamily: i18n.language === "ar" ? "Janna LT" : "Future Now",

    allVariants: {
      color: "#fff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          textTransform: "none",
          borderRadius: "8px",
        },
        contained: {
          backgroundColor: "#BCA966",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#BCA966C9",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#fff",
          "&.Mui-focused": {
            color: "#BCA966",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#BCA966",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#BCA966",
          },
          "& input::placeholder, & textarea::placeholder": {
            color: "#BCA966",
            opacity: 1,
          },
          // إضافة لون النص داخل الحقول
          "& input, & textarea": {
            color: "#fff",
          },
        },
      },
    },
  },
});

export default theme;
