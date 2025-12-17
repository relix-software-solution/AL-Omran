import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";
import Footer from "../home/Footer";
import Preloader from "../../components/Preloader";

const Register = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <Preloader />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* خلفية الفيديو */}
        <Box
          component="video"
          src="/3.mp4"
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />

        {/* المحتوى */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
            gap: 3,
          }}
        >
          {/* اللوجو */}
          <Box sx={{ width: { xs: "300px", md: "450px" }, maxWidth: "80%" }}>
            <motion.img
              src="/alnaserLogo.png"
              alt="Victory Boulevard"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ width: "100%" }}
            />
          </Box>
          <Typography sx={{ color: "#1D1B56", fontSize: "20px" }}>
            {t("footer8")}
          </Typography>

          {/* الأزرار */}
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Link to="/residential">
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  px: 8,
                  py: 1.2,
                  fontSize: "18px",
                  borderRadius: "50px",
                }}
              >
                {t("dest5")}
              </Button>
            </Link>
            <Link to="/commercial">
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  px: 8,
                  py: 1.2,
                  fontSize: "18px",
                  borderRadius: "50px",
                }}
              >
                {t("dest6")}
              </Button>
            </Link>
          </Box>
        </Box>

        {/* زر تحميل الكتيب */}
        <Box
          sx={{
            position: "absolute",
            bottom: "5%",
            left: i18n.language === "ar" ? "5%" : "auto",
            right: i18n.language === "en" ? "5%" : "auto",
            zIndex: 2,
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            sx={{
              color: "#fff",
              borderColor: "#1D1B56",
              backgroundColor: "#1D1B56",
              px: 6,
              py: 1.2,
              fontSize: "16px",
              borderRadius: "50px",
              "&:hover": {
                backgroundColor: "#1d1b56ce",
              },
            }}
          >
            {t("dest13")}
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Register;
