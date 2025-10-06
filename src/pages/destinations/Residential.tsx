// أعلى الملف: استيراداتك …
import {
  Box,
  Typography,
  useMediaQuery,
  CircularProgress,
  IconButton,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import theme from "../../theme";
import promoVideo from "../../assets/promo.mp4";
import posterImg from "../../assets/poster.png";
import { useEffect, useRef, useState } from "react";

const DEV_FORCE_DELAY_MS = 3000;

const Residential = () => {
  const [t, i18n] = useTranslation();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // حالة الصوت

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (DEV_FORCE_DELAY_MS && DEV_FORCE_DELAY_MS > 0) {
              setShouldLoad(true);
              setTimeout(() => {
                const v = videoRef.current;
                if (v && !v.src) {
                  v.src = promoVideo as unknown as string;
                  v.load();
                }
              }, DEV_FORCE_DELAY_MS);
            } else {
              setShouldLoad(true);
            }
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onCanPlay = () => setIsReady(true);
    const onPlaying = () => {
      setIsPlaying(true);
      setIsReady(true);
    };
    const onPause = () => setIsPlaying(false);
    const onError = () => {
      setIsReady(false);
      console.error("Video load error");
    };

    v.addEventListener("canplay", onCanPlay);
    v.addEventListener("playing", onPlaying);
    v.addEventListener("pause", onPause);
    v.addEventListener("error", onError);

    return () => {
      v.removeEventListener("canplay", onCanPlay);
      v.removeEventListener("playing", onPlaying);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("error", onError);
    };
  }, [shouldLoad]);

  const handleManualPlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      if (v.paused) {
        await v.play();
        setIsPlaying(true);
      } else {
        v.pause();
        setIsPlaying(false);
      }
    } catch (e) {
      console.warn("Playback blocked:", e);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  return (
    <div dir={t("dir")}>
      <Box
        sx={{
          width: "90%",
          display: { xs: "block", md: "flex" },
          margin: "100px auto",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Box sx={{ direction: "rtl", width: { xs: "100%", md: "44.6%" } }}>
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
              transition: { delay: 0.2, duration: 0.8 },
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <Box
              ref={wrapperRef}
              sx={{
                width: "100%",
                height: { xs: 200, md: 350 },
                position: "relative",
                overflow: "hidden",
                borderRadius: 1,
                backgroundColor: "#000",
              }}
            >
              {!shouldLoad && (
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${posterImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              )}

              <video
                ref={videoRef}
                poster={posterImg}
                playsInline
                muted={isMuted}
                loop
                autoPlay
                preload="metadata"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              >
                متصفحك لا يدعم عنصر الفيديو.
              </video>

              {!isReady && shouldLoad && (
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.35))",
                  }}
                >
                  <CircularProgress />
                </Box>
              )}

              {/* زر التشغيل/الإيقاف + زر الصوت */}
              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  display: "flex",
                  gap: 1,
                }}
              >
                <IconButton
                  aria-label="Play/Pause video"
                  onClick={handleManualPlay}
                  sx={{
                    bgcolor: "rgba(255,255,255,0.85)",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.95)" },
                  }}
                  size="small"
                >
                  {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                </IconButton>

                <IconButton
                  aria-label="Mute/Unmute video"
                  onClick={toggleMute}
                  sx={{
                    bgcolor: "rgba(255,255,255,0.85)",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.95)" },
                  }}
                  size="small"
                >
                  {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
                </IconButton>
              </Box>
            </Box>
          </motion.div>
        </Box>

        {/* الجانب الأيمن كما عندك */}
        <Box sx={{ width: { xs: "100%", md: "45%" }, alignContent: "center" }}>
          <Box sx={{ color: "193a51", width: "90%", marginBottom: "20px" }}>
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
                transition: { delay: 0.2, duration: 0.8 },
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Typography
                component="h1"
                sx={{ fontSize: "36px", color: "#1D1B56" }}
              >
                {t("dest1")}
              </Typography>
              <Typography
                component="h1"
                sx={{ fontSize: "24px", color: "#1D1B56" }}
              >
                {t("dest2")}
              </Typography>
              <Typography
                component="h1"
                sx={{
                  padding: "30px 0",
                  fontSize: "16px",
                  color: "#1D1B56",
                }}
              >
                {t("dest15")}
              </Typography>
              <Typography
                component="h1"
                sx={{
                  marginTop: "20px",
                  fontSize: "16px",
                  color: "#1D1B56",
                  textAlign: "end",
                }}
              >
                {t("about1")}
              </Typography>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Residential;
