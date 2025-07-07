import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTranslation } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "motion/react";

const Footer = () => {
  /* -------------------------------------------------------------------------- */
  /*                                 Translation                                */
  /* -------------------------------------------------------------------------- */
  const [t, i18n] = useTranslation();
  const theme1 = useTheme();
  const isMdUp = useMediaQuery(theme1.breakpoints.up("md"));

  return (
    <>
      <div dir={t("dir")}>
        {" "}
        <Box sx={{ height: "100%", backgroundColor: "#193a51" }}>
          <Box
            sx={{
              width: "90%",
              margin: "auto",
              padding: { xs: "20px 0", md: "40px 40px 0" },
              display: { xs: "block", md: "flex" },
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
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
                  sx={{ fontSize: "36px", color: "#eadccc" }}
                >
                  {t("title")}
                </Typography>
                <Typography
                  component="h4"
                  sx={{
                    fontSize: "16px",
                    color: "#fff",
                    maxWidth: { xs: "300px", md: "400px" },
                    margin: "20px 0",
                  }}
                >
                  {t("footer1")}
                </Typography>
                <Typography
                  component="h4"
                  sx={{
                    fontSize: "16px",
                    color: "#eadccc",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <XIcon />
                  <FacebookIcon />
                  <InstagramIcon />
                  <WhatsAppIcon />
                </Typography>
              </motion.div>
            </Box>

            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                padding: { xs: "20px 0 0", md: "30px" },
                display: "flex",
              }}
            >
              <Box sx={{ width: "50%" }}>
                {" "}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: isMdUp ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2,
                      duration: 0.8,
                      ease: [0.75, 0.01, 0.31, 1],
                    },
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <Link to="/#home">
                    {" "}
                    <Typography
                      component="h5"
                      sx={{
                        fontSize: "16",
                        color: "#eadccc",
                        margin: "20px 0",
                      }}
                    >
                      {t("home")}
                    </Typography>
                  </Link>
                  <Link to="/#about">
                    {" "}
                    <Typography
                      component="h5"
                      sx={{
                        fontSize: "16",
                        color: "#eadccc",
                        margin: "20px 0",
                      }}
                    >
                      {t("aboutUs")}
                    </Typography>
                  </Link>
                  <Link to="/#services">
                    {" "}
                    <Typography
                      component="h5"
                      sx={{
                        fontSize: "16",
                        color: "#eadccc",
                        margin: "20px 0",
                      }}
                    >
                      {t("services")}
                    </Typography>
                  </Link>
                </motion.div>
              </Box>
              <Box sx={{ width: "50%" }}>
                {" "}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: isMdUp ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2,
                      duration: 0.8,
                      ease: [0.75, 0.01, 0.31, 1],
                    },
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <Link to="/#contact">
                    <Typography
                      component="h5"
                      sx={{
                        fontSize: "16",
                        color: "#eadccc",
                        margin: "20px 0",
                      }}
                    >
                      {t("footer6")}
                    </Typography>
                  </Link>
                  <Typography
                    component="h5"
                    sx={{ fontSize: "16", color: "#eadccc", margin: "20px 0" }}
                  >
                    +963 11 111
                  </Typography>
                  <Typography
                    component="h5"
                    sx={{ fontSize: "16", color: "#eadccc", margin: "20px 0" }}
                  >
                    {t("contact3")}
                  </Typography>
                </motion.div>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "90%", margin: "auto" }}>
            <Box
              sx={{ width: "100%", height: "2px", backgroundColor: "#eadccc" }}
            ></Box>
          </Box>

          <Box
            sx={{
              width: "90%",
              margin: "auto",
              display: { xs: "block", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "40%" } }}>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
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
                  component="h5"
                  sx={{ fontSize: "16", color: "#eadccc", margin: "20px 0" }}
                >
                  {t("footer2")}
                </Typography>
              </motion.div>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "40%" },
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
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
                  component="h5"
                  sx={{
                    fontSize: "16",
                    color: "#eadccc",
                    margin: "20px 0",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  {t("footer3")}
                </Typography>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
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
                  component="h5"
                  sx={{
                    fontSize: "16",
                    color: "#eadccc",
                    margin: "20px 0",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  {t("footer4")}
                </Typography>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
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
                  component="h5"
                  sx={{ fontSize: "16", color: "#eadccc", margin: "20px 0" }}
                >
                  {t("footer5")}
                </Typography>
              </motion.div>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Footer;
