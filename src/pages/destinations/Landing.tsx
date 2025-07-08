import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import backgroundLanding from "../../assets/image/12.webp";
import { useTranslation } from "react-i18next";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";
import { useEffect, useState } from "react";
import GetAppIcon from "@mui/icons-material/GetApp";
import { motion } from "motion/react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { TabTitle } from "../../components/Title";

const Landing = () => {
  const [t, i18n] = useTranslation();

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  // Scroll detection state
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  TabTitle(t("title_dest"));
  return (
    <div dir={t("dir")} id="dest">
      {/* الزرين الثابتين */}
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          transform: "translateY(-50%)",
          left: t("dir") === "rtl" ? "20px" : "auto",
          right: t("dir") === "rtl" ? "auto" : "20px",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          startIcon={scrolled ? <GetAppIcon /> : undefined}
          sx={{
            backgroundColor: "#c09660",
            color: "#fff",
            borderRadius: "40px",
            width: scrolled ? "50px" : { xs: "160px", md: "300px" },
            fontSize: { xs: "14px", md: "24px" },
            height: scrolled ? "50px" : "70px",
            minWidth: "unset",
            transition: "all 0.3s ease",
            overflow: "hidden",
            whiteSpace: "nowrap",
            px: scrolled ? 0 : 3,
            justifyContent: "center",
            "& .MuiButton-startIcon": {
              margin: 0, // ✅ هذا يمنع الإزاحة
            },
          }}
        >
          {!scrolled && t("dest13")}
        </Button>

        <Link to="/destinations#res">
          <Button
            variant="contained"
            startIcon={scrolled ? <AssignmentIcon /> : undefined}
            sx={{
              backgroundColor: "#c09660",
              color: "#fff",
              borderRadius: "40px",
              width: scrolled ? "50px" : { xs: "160px", md: "300px" },
              fontSize: { xs: "14px", md: "24px" },
              height: scrolled ? "50px" : "70px",
              minWidth: "unset",
              transition: "all 0.3s ease",
              overflow: "hidden",
              whiteSpace: "nowrap",
              px: scrolled ? 0 : 3,
              justifyContent: "center",
              "& .MuiButton-startIcon": {
                margin: 0, // ✅ هذا يمنع الإزاحة
              },
            }}
          >
            {!scrolled && t("dest14")}
          </Button>
        </Link>
      </Box>

      {/* خلفية الهبوط */}
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

        {/* التدرج السفلي */}
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

        {/* النص والأزرار */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            px: { xs: 2, sm: 4, md: 8 },
            pb: { xs: 4, sm: 6, md: 16 },
            maxWidth: "800px",
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
              variant="h2"
              sx={{
                color: "#FFF",
                mb: 2,
                fontSize: { xs: "2.5rem", md: "5rem" },
              }}
            >
              {t("dest4")}
            </Typography>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
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
            <Link to="/destinations#res">
              <Button
                sx={{
                  width: { xs: "140px", md: "200px" },
                  padding: "10px 20px",
                  fontSize: { xs: "16px", md: "24px" },
                  background: "#c09660",
                  color: "#fff",
                  borderRadius: "40px",
                }}
              >
                {t("dest5")}
              </Button>
            </Link>
            <Link to="/destinations#comm">
              <Button
                sx={{
                  width: { xs: "140px", md: "200px" },
                  padding: "10px 20px",
                  fontSize: { xs: "16px", md: "24px" },
                  background: "#c09660",
                  color: "#fff",
                  borderRadius: "40px",
                  margin: "0 10px",
                }}
              >
                {t("dest6")}
              </Button>
            </Link>
          </motion.div>
        </Box>
      </Box>
    </div>
  );
};

export default Landing;
