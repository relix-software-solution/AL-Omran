import { useRef, useEffect, useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const services = [
  {
    title: "Development & Management",
    description: "Visionary project planning and execution.",
  },
  {
    title: "Sales, Lease & Marketing",
    description: "Effective sales, leasing, and marketing solutions.",
  },
  {
    title: "Property Management",
    description: "Comprehensive management for tenant satisfaction.",
  },
  {
    title: "Asset Management / Investment",
    description: "Maximizing asset value and investment growth.",
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

  return (
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
          {/* العنوان في الأعلى */}
          <Typography
            variant="h5"
            sx={{
              fontSize: "36px",
              color: "#193a51",
              mb: 2,
            }}
          >
            Services
          </Typography>

          {/* البوكس الذي يتمركز عمودياً */}
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
            <Typography variant="body1">
              Our strategy encompasses all aspects of the real estate sector as
              outlined in the regulatory and legislative frameworks related to
              the industry. It focuses on future cities, urban development,
              smart cities, and sustainability, aiming to enhance the quality
              and safety of construction technologies as well as the quality of
              life in real estate development financing.
            </Typography>
          </Box>
        </Box>

        {/* Right Side */}
        <Box sx={{ flex: 1, position: "relative", pl: 4 }} ref={containerRef}>
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
              <Box
                key={index}
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
                  <Typography sx={{ fontSize: "24px", color: "#193a51" }}>
                    {service.title}
                  </Typography>
                  <Typography>{service.description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
