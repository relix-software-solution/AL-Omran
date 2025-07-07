import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import backgroundLanding from "../../assets/image/12.webp";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";

const Landing = () => {
  /* -------------------------------------------------------------------------- */
  /*                                 Translation                                */
  /* -------------------------------------------------------------------------- */
  const [t] = useTranslation();

  return (
    <div dir={t("dir")}>
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
              "linear-gradient(to top, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 100%)",
            zIndex: 1,
          }}
        />

        {/* الكتابة */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            px: { xs: 2, sm: 4, md: 8 },
            pb: { xs: 4, sm: 6, md: 16 },
            maxWidth: "800px",
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: "#FFF", mb: 2, fontSize: { xs: "3rem", md: "5rem" } }}
          >
            {t("dest4")}
          </Typography>
          <Button
            sx={{
              width: { xs: "140px", md: "200px" },
              padding: "10px 20px",
              fontSize: "24px",
              background: "#c09660",
              color: "#fff",
              borderRadius: "40px",
            }}
          >
            {t("dest5")}
          </Button>
          <Button
            sx={{
              width: { xs: "140px", md: "200px" },
              padding: "10px 20px",
              fontSize: "24px",
              background: "#c09660",
              color: "#fff",
              borderRadius: "40px",
              margin: "0 10px",
            }}
          >
            {t("dest6")}
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Landing;
