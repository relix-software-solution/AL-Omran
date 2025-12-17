import { useState, useEffect } from "react";
import { Dialog, Typography, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

// استيراد الصورة من مجلد assets
import popupBg from "../../assets/image/popupBg.webp"; // عدّل المسار واسم الصورة

const PopUp = () => {
  const [t] = useTranslation();
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
          width: "250px",
          height: "120px",
          backgroundImage: `url(${popupBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "20px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          position: "fixed",
          bottom: "40px",
          right: "4%",
          margin: 0,
          borderRadius: "0px",
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
          alignContent: "center",
          textAlign: "end",
          color: "#fff",
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            marginTop: "5px",
            fontWeight: 500,
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          {t("popup1")}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            marginTop: "5px",
            fontWeight: 500,
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          {t("popup")}
        </Typography>
      </Box>
    </Dialog>
  );
};

export default PopUp;
