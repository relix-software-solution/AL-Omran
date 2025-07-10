import Box from "@mui/material/Box";
import aboutImage from "../../assets/image/AboutUs.webp";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { useMediaQuery, useTheme } from "@mui/material";

const AboutUs = () => {
  /* -------------------------------------------------------------------------- */
  /*                                 Translation                                */
  /* -------------------------------------------------------------------------- */
  const [t, i18n] = useTranslation();

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
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
          <motion.div
            initial={{
              opacity: 0,
              x: isMdUp ? (i18n.language === "ar" ? 50 : -50) : 0,
              y: isMdUp ? 0 : 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: {
                delay: 0.2,
                duration: 0.8,
                ease: [0.75, 0.01, 0.31, 1],
              },
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <Typography
              component="span"
              sx={{ fontSize: "36px", color: "#193a51" }}
            >
              {t("aboutUs")}
            </Typography>
          </motion.div>
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
            <motion.div
              initial={{
                opacity: 0,
                x: isMdUp ? (i18n.language === "ar" ? 50 : -50) : 0,
                y: isMdUp ? 0 : 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.8,
                  ease: [0.75, 0.01, 0.31, 1],
                },
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
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
            </motion.div>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "45%" },
              alignContent: "center",
            }}
          >
            <Box
              sx={{
                color: "193a51",
                p: 2,
                width: "90%",
                marginBottom: "20px",
                textAlign: {
                  xs: i18n.language === "ar" ? "right" : "left",
                  md: "center",
                },
              }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  x: isMdUp ? (i18n.language === "ar" ? -50 : 50) : 0,
                  y: isMdUp ? 0 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.8,
                    ease: [0.75, 0.01, 0.31, 1],
                  },
                }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <Typography
                  component="h1"
                  sx={{
                    fontSize: "32px",
                    color: "#193a51",
                  }}
                >
                  {t("about1")}
                </Typography>{" "}
                <Typography
                  component="span"
                  sx={{
                    fontSize: "16px",
                    color: "#193a51",
                  }}
                >
                  {t("about2")}
                </Typography>
              </motion.div>
            </Box>
          </Box>
        </Box>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.6,
            duration: 0.8,
            ease: [0.75, 0.01, 0.31, 1],
          },
        }}
        viewport={{ once: false, amount: 0.5 }}
      >
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
        </Box>{" "}
      </motion.div>
      <div dir={t("dir")}>
        <Box
          sx={{
            height: { xs: "300px", md: "150px" },
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
