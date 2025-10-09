import Box from "@mui/material/Box";
import landingPoster from "../../assets/image/Landing.webp";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { TabTitle } from "../../components/Title";
import { Button } from "@mui/material";
import { Link } from "react-router";

const Landing = () => {
  const [t, i18n] = useTranslation();

  const { ref } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  TabTitle(t("title"));

  return (
    <div dir={t("dir")} id="home" ref={ref}>
      <Box
        sx={{
          width: "100%",
          height: {
            xs: "100vh",
            sm: "50vh",
            lg: "100vh",
          },
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
          color: "#fff",
        }}
      >
        <Box
          component="img"
          src={landingPoster}
          alt="Landing"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            backgroundColor: "#000", // لتجنب الوميض الأبيض
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "50%",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))",
            zIndex: 1,
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "5%",
          left: i18n.language === "ar" ? "5%" : "auto",
          right: i18n.language === "en" ? "5%" : "auto",
          zIndex: 2,
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
      </Box>
    </div>
  );
};

export default Landing;
