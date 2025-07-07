import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import backgroundLanding from "../../assets/image/landing.webp";
import { useTranslation } from "react-i18next";

const Landing = () => {
  /* -------------------------------------------------------------------------- */
  /*                                 Translation                                */
  /* -------------------------------------------------------------------------- */
  const [t] = useTranslation();

  return (
    <div dir={t("dir")} id="home">
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
        {/* الخلفية */}
        <Box
          component="img"
          src={backgroundLanding}
          alt="Landing Background"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
          loading="lazy"
        />

        {/* overlay gradient من الأسفل */}
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

        {/* الكتابة */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            px: { xs: 2, sm: 4, md: 8 },
            pb: { xs: 4, sm: 6, md: 10 },
            maxWidth: "800px",
          }}
        >
          <Typography variant="h3" sx={{ color: "#eadccc", mb: 2 }}>
            {t("title")}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              // fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2rem", sm: "2.5rem" },
            }}
          >
            {t("contentLan")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
          >
            {t("contentLan2")}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Landing;
