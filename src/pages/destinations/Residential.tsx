import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

const YOUTUBE_URL =
  "https://www.youtube.com/embed/0bjBoulq0aE?autoplay=1&loop=1&playlist=0bjBoulq0aE&controls=0&rel=0&modestbranding=1&playsinline=1";

const Residential = () => {
  const [t] = useTranslation();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  return (
    <div dir={t("dir")}>
      <Box
        sx={{
          width: "90%",
          margin: "50px auto",
          display: "flex",
          gap: 4,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* الفيديو */}
        <Box
          sx={{
            position: "relative",
            flex: 1,
            overflow: "hidden",
          }}
        >
          <iframe
            ref={iframeRef}
            width="90%"
            height="340"
            src={YOUTUBE_URL}
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              display: "flex",
              gap: 1,
            }}
          ></Box>
        </Box>

        {/* النصوص */}
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: 36, color: "#1D1B56" }}>
            {t("dest1")}
          </Typography>
          <Typography sx={{ fontSize: 24, color: "#1D1B56" }}>
            {t("dest2")}
          </Typography>
          <Typography
            sx={{ padding: "30px 0", fontSize: 16, color: "#1D1B56" }}
          >
            {t("dest15")}
          </Typography>
          <Typography sx={{ fontSize: 16, color: "#1D1B56", textAlign: "end" }}>
            {t("about1")}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Residential;
