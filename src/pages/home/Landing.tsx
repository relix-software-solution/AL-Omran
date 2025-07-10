import Box from "@mui/material/Box";
import landingVideo from "../../assets/1.mp4";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { TabTitle } from "../../components/Title";

const Landing = () => {
  const [t] = useTranslation();

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
          component="video"
          src={landingVideo}
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
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
    </div>
  );
};

export default Landing;
