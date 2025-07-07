import Box from "@mui/material/Box";
import aboutImage from "../../assets/image/AboutUs.webp";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  /* -------------------------------------------------------------------------- */
  /*                                 Translation                                */
  /* -------------------------------------------------------------------------- */
  const [t] = useTranslation();
  return (
    <>
      <div dir={t("dir")} id="about">
        <Box
          sx={{
            width: "90%",
            margin: "100px auto 30px",
            alignContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography
            component="span"
            sx={{ fontSize: "36px", color: "#193a51" }}
          >
            {t("aboutUs")}
          </Typography>
        </Box>
      </div>
      <div dir={t("dir")}>
        <Box
          sx={{
            width: "90%",
            display: { xs: "block", md: "flex" },
            margin: "auto",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "47%" } }}>
            <Box
              component="img"
              src={aboutImage}
              alt="About Us"
              sx={{
                width: "100%",
                height: { xs: 200, md: 400 },
                objectFit: "cover",
              }}
              loading="lazy"
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "45%" },
              alignContent: "center",
            }}
          >
            <Box
              sx={{
                color: "#000",
                p: 2,
                width: "90%",
                marginBottom: "20px",
                textAlign: { xs: "left", md: "center" },
              }}
            >
              <Typography
                component="h1"
                sx={{
                  fontSize: "32px",
                  color: "#000",
                }}
              >
                {t("about1")}
              </Typography>{" "}
              <Typography
                component="span"
                sx={{
                  fontSize: "16px",
                  color: "#000",
                }}
              >
                {t("about2")}
              </Typography>{" "}
            </Box>
          </Box>
        </Box>
      </div>
      <Box
        sx={{
          width: "90%",
          margin: "auto",
          display: { xs: "block", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(19, 90, 136)",
            backdropFilter: "blur(24px)",
            color: "#fff",
            p: { xs: 4, md: 4 },
            width: { xs: "80%", md: "40%" },
            margin: { xs: "0px auto 20px", md: "20px 0 20px 0" },
            textAlign: "center",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: "28px",
              color: "#eadccc",
            }}
          >
            {t("vision")}
          </Typography>{" "}
          {t("vision1")}
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(19, 90, 136)",
            backdropFilter: "blur(24px)",
            color: "#fff",
            p: { xs: 4, md: 4 },
            width: { xs: "80%", md: "40%" },
            margin: { xs: "0px auto 20px", md: "20px 0 20px 0" },
            textAlign: "center",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: "28px",
              color: "#eadccc",
            }}
          >
            {t("mission")}
          </Typography>{" "}
          {t("mission1")}
        </Box>
      </Box>
      <div dir={t("dir")}>
        <Box
          sx={{
            height: { xs: "300px", md: "100px" },
            backgroundColor: "#193a51",
            margin: "30px 0",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: "90%",
              margin: "auto",
              display: { xs: "block", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: "28px",
                color: "#eadccc",
                alignContent: "center",
              }}
            >
              {t("about3")}
            </Typography>
            <Button
              variant="contained"
              startIcon={<ArrowCircleDownIcon sx={{ padding: "0 10px" }} />}
              href="/company-profile.pdf" // حط رابط ملف PDF الحقيقي هون
              download
              sx={{
                backgroundColor: "#135a88",
                color: "#fff",
                borderRadius: "0px",
                textTransform: "none",
                margin: { xs: "20px 0", md: "0" },
                px: 4,
                py: 1.5,
                fontWeight: 500,
                fontSize: "16px",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#164052", // لون أغمق شوي عند الهوفر
                },
              }}
            >
              {t("about4")}
            </Button>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default AboutUs;
