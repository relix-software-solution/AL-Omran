import { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  Button,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

// استيراد الصورة من مجلد assets
import popupBg from "../../assets/image/popupBg.webp"; // عدّل المسار واسم الصورة

const PopUp = () => {
  const [t, i18n] = useTranslation();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.hash === "") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [location.pathname, location.hash]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      PaperProps={{
        style: {
          maxWidth: "400px",
          height: "250px",
          backgroundImage: `url(${popupBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "20px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      {/* زر الإغلاق */}
      <IconButton
        onClick={handleClose}
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          color: "#fff",
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* النص في المنتصف */}
      <Box
        sx={{
          textAlign: "center",
          color: "#fff",
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 500, fontSize: { xs: "20px", md: "24px" } }}
        >
          {t("popup")}
        </Typography>
      </Box>

      {/* الزر في الأسفل */}
      <DialogActions
        sx={{
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Link to="/register#reg">
          <Button
            variant="outlined"
            color="primary"
            sx={{
              color: "#fff",
              borderColor: "#BCA966",
              backgroundColor: "#BCA966",
              px: 6,
              py: 1.2,
              fontSize: "16px",
              borderRadius: "50px",
              "&:hover": {
                backgroundColor: "#BCA966C9",
              },
            }}
          >
            {i18n.language === "ar" ? "سجل اهتمامك" : "Register now"}
          </Button>
        </Link>
      </DialogActions>
    </Dialog>
  );
};

export default PopUp;
