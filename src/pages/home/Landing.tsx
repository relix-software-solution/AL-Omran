import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import backgroundLanding from "../../assets/image/landing.webp";
import { useTranslation } from "react-i18next";
import { motion, cubicBezier } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Landing = () => {
  const [t, i18n] = useTranslation();

  const getDirection = i18n.language === "ar" ? 100 : -100;

  const baseDelay = 0.5; // تأخير 2 ثانية قبل بداية الأنيميشن

  const transition = {
    duration: 0.8,
    ease: cubicBezier(0.75, 0.01, 0.31, 1),
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [mouseEntered, setMouseEntered] = useState(false);

  const showAnimation = inView || mouseEntered;

  return (
    <div
      dir={t("dir")}
      id="home"
      ref={ref}
      onMouseEnter={() => setMouseEntered(true)}
      onMouseLeave={() => setMouseEntered(false)}
    >
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

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            px: { xs: 2, sm: 4, md: 8 },
            pb: { xs: 4, sm: 6, md: 10 },
            maxWidth: "800px",
          }}
        >
          <motion.div
            key={showAnimation ? "visible-0" : "hidden-0"}
            initial={{ opacity: 0, x: getDirection }}
            animate={showAnimation ? { opacity: 1, x: 0 } : {}}
            transition={{ ...transition, delay: baseDelay + 0 }}
          >
            <Typography variant="h3" sx={{ color: "#eadccc", mb: 2 }}>
              {t("title")}
            </Typography>
          </motion.div>

          <motion.div
            key={showAnimation ? "visible-1" : "hidden-1"}
            initial={{ opacity: 0, x: getDirection }}
            animate={showAnimation ? { opacity: 1, x: 0 } : {}}
            transition={{ ...transition, delay: baseDelay + 0.2 }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontSize: { xs: "2rem", sm: "2.5rem" },
              }}
            >
              {t("contentLan")}
            </Typography>
          </motion.div>

          <motion.div
            key={showAnimation ? "visible-2" : "hidden-2"}
            initial={{ opacity: 0, x: getDirection }}
            animate={showAnimation ? { opacity: 1, x: 0 } : {}}
            transition={{ ...transition, delay: baseDelay + 0.4 }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
            >
              {t("contentLan2")}
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </div>
  );
};

export default Landing;
