import { useRef, useEffect, useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const services = [
  {
    title: "Development & Management",
    titleAr: "التطوير والإدارة",
    description: "Visionary project planning and execution.",
    descriptionAr: "تخطيط وتنفيذ المشاريع الرؤيوية.",
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
    description: "Comprehensive management for tenant satisfaction.",
    descriptionAr: "إدارة شاملة لرضا المستأجرين.",
  },
  {
    title: "Asset Management / Investment",
    titleAr: "إدارة الأصول / الاستثمار",
    description: "Maximizing asset value and investment growth.",
    descriptionAr: "تعظيم قيمة الأصول ونمو الاستثمار.",
  },
];

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineOffset, setLineOffset] = useState({ top: 0, bottom: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const children = containerRef.current.querySelectorAll(".service-item");
      if (children.length > 0) {
        const first = children[0] as HTMLElement;
        const last = children[children.length - 1] as HTMLElement;
        const top = first.offsetTop + first.offsetHeight / 2;
        const bottom =
          containerRef.current.offsetHeight -
          (last.offsetTop + last.offsetHeight / 2);
        setLineOffset({ top, bottom });
      }
    }
  }, [isMobile]);

  /* -------------------------------------------------------------------------- */
  /*                                 Translation                                */
  /* -------------------------------------------------------------------------- */
  const [t, i18n] = useTranslation();
  const theme1 = useTheme();
  const isMdUp = useMediaQuery(theme1.breakpoints.up("md"));

  return (
    <>
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
                position: "relative", // لاحتواء البوكس الداخلي المتموضع
                minHeight: { md: 400, xs: "auto" }, // حتى يظهر التمركز العمودي
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
                {/* العنوان في الأعلى */}{" "}
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "36px",
                    color: "#193a51",
                    mb: 2,
                    ...(i18n.language === "ar" && {
                      textAlign: {
                        xs: "right", // على الموبايل
                        sm: "left", // على الشاشات الأكبر ترجع للوضع الطبيعي
                      },
                    }),
                  }}
                >
                  {t("services")}
                </Typography>
              </motion.div>
              {/* البوكس الذي يتمركز عمودياً */}
              <div dir={t("dir")}>
                {" "}
                <Box
                  sx={{
                    backgroundColor: "#135a88",
                    color: "white",
                    p: 3,
                    display: "inline-block",
                    maxWidth: "100%",
                    position: { xs: "static", md: "absolute" },
                    top: { md: "50%" },
                    transform: { md: "translateY(-50%)" },
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
              </div>
            </Box>

            {/* Right Side */}
            <Box
              sx={{ flex: 1, position: "relative", pl: 4 }}
              ref={containerRef}
            >
              {/* Vertical line */}
              <Box
                sx={{
                  position: "absolute",
                  left: 10,
                  top: `${lineOffset.top}px`,
                  bottom: `${lineOffset.bottom}px`,
                  width: 2,
                  backgroundColor: "black",
                  marginLeft: "5px",
                  transition: "all 0.3s ease",
                }}
              />

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
                          left: -20,
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      />
                      {/* Content */}
                      <Box
                        sx={{
                          backgroundColor: "rgba(19, 90, 136, 0.54)",
                          color: "white",
                          p: 2,
                          width: "100%",
                          ml: { xs: 0, md: 4 }, // تبعد النص عن الخط بالـ desktop فقط
                          maxWidth: { xs: "100%", md: "80%" }, // تضييق العرض قليلاً بالـ desktop
                        }}
                      >
                        <div dir={t("dir")}>
                          <Typography
                            sx={{ fontSize: "24px", color: "#193a51" }}
                          >
                            {i18n.language === "ar"
                              ? service.titleAr
                              : service.title}
                          </Typography>
                        </div>
                        <div dir={t("dir")}>
                          {" "}
                          <Typography>
                            {" "}
                            {i18n.language === "ar"
                              ? service.descriptionAr
                              : service.description}
                          </Typography>
                        </div>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Services;
