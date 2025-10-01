import { HashLink as Link } from "react-router-hash-link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PlaceIcon from "@mui/icons-material/Place";
import image1 from "../../assets/image/1.webp";
import image2 from "../../assets/image/2.webp";
import image3 from "../../assets/image/3.webp";
import Button from "@mui/material/Button";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useTranslation } from "react-i18next";
import { useMediaQuery, useTheme } from "@mui/material";
import { motion } from "motion/react";

const images = [
  {
    type: "image",
    src: image1,
    label:
      "As architects and urban planners engaged in the reconstruction of the city of Homs, we are fully aware of the profound responsibility of shaping spaces that not only restore the physical fabric of the city...",
    labelAr:
      "باعتبارنا مهندسين معماريين ومخططين حضريين مشاركين في إعادة بناء مدينة حمص، فإننا ندرك تمامًا المسؤولية العميقة المتمثلة في تشكيل المساحات التي لا تعمل فقط على استعادة النسيج المادي للمدينة...",
  },
  {
    type: "image",
    src: image2,
    label:
      "It includes more than 4,000 residential units and provides over 10,000 job opportunities.",
    labelAr: "يضم أكثر من 4000 وحدة سكنية ويوفر أكثر من 10000 فرصة عمل.",
  },
  {
    type: "image",
    src: image3,
    label: "The project spans a total area of 688,500 square meters",
    labelAr: "يبلغ إجمالي مساحة المشروع 688,500 متر مربع",
  },
];

const Destinations = () => {
  const [t, i18n] = useTranslation();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div dir={t("dir")} id="dest">
      <Box sx={{ width: "90%", margin: "100px auto" }}>
        <Box sx={{ marginBottom: "30px", textAlign: "center" }}>
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
              component="span"
              sx={{ fontSize: "36px", color: "#1D1B56" }}
            >
              {t("destination")}
            </Typography>
          </motion.div>
        </Box>

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
          <Box>
            <Typography
              component="span"
              sx={{ fontSize: "28px", color: "#1D1B56" }}
            >
              {t("dest1")}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "8px" }}>
            <Typography
              component="span"
              sx={{ fontSize: "20px", color: "#1D1B56" }}
            >
              <PlaceIcon sx={{ color: "#ff0000", fontSize: "18px" }} />{" "}
              {t("dest2")}
            </Typography>
          </Box>
        </motion.div>

        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          {images.map((img, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                width: { xs: "100%", md: "30%" },
                height: { xs: 200, md: 400 },
                marginBottom: "20px",
                overflow: "hidden",
                cursor: "pointer",
                "&:hover .image": {
                  transform: "scale(1.05)",
                },
                "&:hover .overlay": {
                  opacity: 0.5,
                },
                "&:hover .text": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              }}
            >
              {img.type === "video" ? (
                <Box
                  component="video"
                  className="image"
                  src={img.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                    backgroundColor: "#000", // لتجنب الفلاش الأبيض
                  }}
                />
              ) : (
                <Box
                  component="img"
                  className="image"
                  src={img.src}
                  alt={`Image ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  loading="lazy"
                />
              )}

              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#000",
                  opacity: 0.3,
                  transition: "opacity 0.3s ease-in-out",
                }}
              />

              {/* <Box
                className="text"
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  right: 16,
                  color: "#fff",
                  opacity: 0,
                  transform: "translateY(10px)",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <Typography variant="body1">
                  {i18n.language === "ar" ? img.labelAr : img.label}
                </Typography>
              </Box> */}
            </Box>
          ))}
        </Box>

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
          <Link to="/destinations#dest">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1d1b56",
                color: "#fff",
                textTransform: "none",
                borderRadius: "20px",
                width: { xs: "100%", md: "400px" },
                fontSize: { xs: "18px", md: "24px" },
                px: 2,
                mt: { xs: 1, md: 0 },
                "&:hover": {
                  backgroundColor: "#1d1b56e2",
                },
              }}
            >
              {t("dest3")}
              {i18n.language === "ar" ? (
                <ArrowCircleLeftIcon
                  sx={{ padding: "0 5px", color: "#BCA966" }}
                />
              ) : (
                <ArrowCircleRightIcon
                  sx={{ padding: "0 5px", color: "#BCA966" }}
                />
              )}
            </Button>
          </Link>
        </motion.div>
      </Box>
    </div>
  );
};

export default Destinations;
