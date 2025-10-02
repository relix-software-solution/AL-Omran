import { useRef } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const services = [
  {
    title: "Development & Management",
    titleAr: "التطوير والإدارة",
    description: "Planning and implementing successful visionary projects.",
    descriptionAr: "تخطيط وتنفيذ المشاريع ذات الرؤى المستقبلية الناجحة",
  },
  {
    title: "Sales, Lease & Marketing",
    titleAr: "المبيعات والتأجير والتسويق",
    description: "Effective sales, leasing, and marketing solutions.",
    descriptionAr: "حلول فعالة للمبيعات والتأجير والتسويق.",
  },
  {
    title: "Property Management",
    titleAr: "إدارة الممتلكات",
    description: "Comprehensive customer satisfaction management",
    descriptionAr: "إدارة شاملة لرضا العملاء.",
  },
  {
    title: "Asset Management / Investment",
    titleAr: "إدارة الأصول / الاستثمار",
    description: "Investment growth and asset value increase",
    descriptionAr: "نمو الاستثمار وزيادة قيمة الأصول.",
  },
];

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const containerRef = useRef<HTMLDivElement>(null);

  const [t, i18n] = useTranslation();
  const theme1 = useTheme();
  const isMdUp = useMediaQuery(theme1.breakpoints.up("md"));
  const isArabic = i18n.language === "ar";

  return (
    <div id="services">
      <Box sx={{ width: "90%", margin: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 4,
          }}
        >
          {/* Left Side */}
          <Box
            sx={{
              flex: 0.8,
              position: "relative",
              minHeight: { md: 400, xs: "auto" },
              px: 2,
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                x: -50,
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
                variant="h5"
                sx={{
                  fontSize: "36px",
                  color: "#1D1B56",
                  mb: 2,
                  textAlign: isArabic ? "right" : "left",
                }}
              >
                {t("services")}
              </Typography>
            </motion.div>

            {/* النص الجانبي */}
            <Box
              sx={{
                backgroundColor: "#1D1B56",
                color: "white",
                p: 3,
                display: "inline-block",
                maxWidth: "100%",
                position: { xs: "static", md: "absolute" },
                top: { md: "50%" },
                transform: { md: "translateY(-50%)" },
                textAlign: isArabic ? "right" : "left",
              }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  x: -50,
                  y: isMdUp ? 0 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: {
                    delay: 0.8,
                    duration: 0.8,
                    ease: [0.75, 0.01, 0.31, 1],
                  },
                }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <Typography variant="body1">{t("serv1")}</Typography>
              </motion.div>
            </Box>
          </Box>

          {/* Right Side */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              ...(isArabic ? { pr: 4 } : { pl: 4 }),
            }}
            ref={containerRef}
          >
            {/* Service items */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: isMdUp ? 50 : 0,
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
                    className="service-item"
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      position: "relative",
                    }}
                  >
                    {/* Dot */}
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "black",
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        ...(isArabic ? { right: -20 } : { left: -20 }),
                      }}
                    />
                    {/* Content */}
                    <Box
                      sx={{
                        color: "#1D1B56",
                        p: 2,
                        width: "100%",
                        ...(isArabic ? { mr: { md: 4 } } : { ml: { md: 4 } }),
                        textAlign: isArabic ? "right" : "left",
                      }}
                    >
                      <Typography sx={{ fontSize: "24px", color: "#1D1B56" }}>
                        {isArabic ? service.titleAr : service.title}
                      </Typography>
                      <Typography sx={{ color: "#1D1B56" }}>
                        {isArabic ? service.descriptionAr : service.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Services;
