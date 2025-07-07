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
          backgroundColor: "#193a51",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#102733",
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
            color: "#eadccc",
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
            borderColor: "#eadccc",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#eadccc",
          },
          "& input::placeholder, & textarea::placeholder": {
            color: "#eadccc",
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
