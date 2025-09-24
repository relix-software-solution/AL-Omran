import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTranslation } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "motion/react";
import logo1 from "../../assets/logo.png";
import QR from "../../assets/image/QR.jpg";

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
        <Box sx={{ height: "100%", backgroundColor: "#1D1B56" }}>
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
                <Box
                  component="img"
                  src={logo1}
                  sx={{ width: "300px", margin: "auto" }}
                />
                <Typography
                  component="h4"
                  sx={{
                    fontSize: "16px",
                    color: "#BCA966",
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
                    color: "#BCA966",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <a
                    href="https://www.facebook.com/profile.php?id=61578912765891&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon
                      sx={{
                        color: "#ffffff", // اللون الافتراضي أبيض
                        transition:
                          "transform 0.2s ease-in-out, opacity 0.2s ease-in-out",
                        "&:hover": {
                          opacity: 0.7,
                          transform: "scale(0.97)",
                        },
                      }}
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/al.omranrealestate?igsh=MWhoOXg4MzhjZ284Mw=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon
                      sx={{
                        color: "#ffffff",
                        transition:
                          "transform 0.2s ease-in-out, opacity 0.2s ease-in-out",
                        "&:hover": {
                          opacity: 0.7,
                          transform: "scale(0.97)",
                        },
                      }}
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/alomran-salam-66b997379?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon
                      sx={{
                        color: "#ffffff",
                        transition:
                          "transform 0.2s ease-in-out, opacity 0.2s ease-in-out",
                        "&:hover": {
                          opacity: 0.7,
                          transform: "scale(0.97)",
                        },
                      }}
                    />
                  </a>
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
                        color: "#BCA966",
                        margin: "20px 0",
                        "&:hover": {
                          color: "#ffffff",
                        },
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
                        color: "#BCA966",
                        margin: "20px 0",
                        "&:hover": {
                          color: "#ffffff",
                        },
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
                        color: "#BCA966",
                        margin: "20px 0",
                        "&:hover": {
                          color: "#ffffff",
                        },
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
                        color: "#BCA966",
                        margin: "20px 0",
                        "&:hover": {
                          color: "#ffffff",
                        },
                      }}
                    >
                      {t("footer6")}
                    </Typography>
                  </Link>
                  <Typography
                    component="a"
                    href="tel:+963997455600"
                    sx={{
                      fontSize: 16,
                      color: "#BCA966",
                      margin: "20px 0",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    {t("footer7")}
                  </Typography>
                  <Typography
                    component="h5"
                    sx={{ fontSize: "16px", margin: "20px 0", color: "#fff" }}
                  >
                    <Box
                      component="a"
                      href="mailto:info@alomran.sy"
                      sx={{
                        color: "#fff",
                        textDecoration: "none",
                        "&:hover": {
                          color: "#fff",
                          textDecoration: "none",
                        },
                      }}
                    >
                      info@alomran.sy
                    </Box>
                  </Typography>
                </motion.div>
              </Box>
            </Box>
            <Box>
              <Box sx={{ width: "70%" }}>
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
                  <Box component="img" src={QR} sx={{ width: "70%" }} />
                </motion.div>
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: "90%", margin: "auto" }}>
            <Box
              sx={{ width: "100%", height: "2px", backgroundColor: "#BCA966" }}
            ></Box>
          </Box>

          <Box
            sx={{
              width: "90%",
              margin: "auto",
              display: { xs: "block", sm: "flex" },
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
                  sx={{ fontSize: "16", color: "#BCA966", margin: "20px 0" }}
                >
                  {t("footer2")}
                </Typography>
              </motion.div>
            </Box>
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
                  fontSize: "16px",
                  color: "#BCA966",
                  margin: "20px 0 0",
                }}
              >
                {t("footer5")}{" "}
                <a
                  href="https://relix-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#BCA966",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffffff")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#BCA966")
                  }
                >
                  Relix
                </a>
              </Typography>
            </motion.div>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Footer;
