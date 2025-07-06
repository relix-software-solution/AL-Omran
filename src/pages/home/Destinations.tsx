import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PlaceIcon from "@mui/icons-material/Place";
import image1 from "../../assets/image/1.webp";
import image2 from "../../assets/image/2.webp";
import image3 from "../../assets/image/3.webp";
import Button from "@mui/material/Button";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const images = [
  {
    src: image1,
    label:
      "As architects and urban planners engaged in the reconstruction of the city of Homs, we are fully aware of the profound responsibility of shaping spaces that not only restore the physical fabric of the city...",
  },
  {
    src: image2,
    label:
      "It includes more than 4,000 residential units and provides over 10,000 job opportunities.",
  },
  {
    src: image3,
    label: "The project spans a total area of 688,500 square meters",
    hasButton: true, // إشعار بوجود زر بالصورة الثالثة فقط
  },
];

const Destinations = () => {
  return (
    <>
      <Box sx={{ width: "90%", margin: "30px auto" }}>
        <Box sx={{ marginBottom: "30px", textAlign: "center" }}>
          <Typography
            component="span"
            sx={{ fontSize: "36px", color: "#193a51" }}
          >
            Destinations
          </Typography>
        </Box>
        <Box>
          <Typography
            component="span"
            sx={{ fontSize: "28px", color: "#193a51" }}
          >
            Al-Naser Bolivard
          </Typography>
        </Box>
        <Box sx={{ marginBottom: "8px" }}>
          <Typography
            component="span"
            sx={{ fontSize: "20px", color: "#193a51" }}
          >
            <PlaceIcon sx={{ color: "#ff0000", fontSize: "18px" }} /> Syria -
            Homs
          </Typography>
        </Box>
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
                  transform: "scale(1.05)", // تكبير ناعم
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
              {/* الصورة */}
              <Box
                component="img"
                className="image"
                src={img.src}
                alt={`Image ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease", // التكبير الناعم
                }}
                loading="lazy"
              />

              {/* Overlay */}
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

              {/* النص */}
              <Box
                className="text"
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  right: 16,
                  color: "#fff",
                  opacity: index === 2 ? 1 : 0,
                  transform: index === 2 ? "translateY(0)" : "translateY(10px)",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "left", // محاذاة الكتابة لليمين
                      flex: 1,
                    }}
                  >
                    {img.label}
                  </Typography>

                  {img.hasButton && (
                    <Button
                      variant="contained"
                      size="small"
                      href="/project"
                      sx={{
                        backgroundColor: "#135a88",
                        color: "#fff",
                        textTransform: "none",
                        borderRadius: "20px",
                        px: 2,
                        mt: { xs: 1, md: 0 }, // مسافة بسيطة فوق على الجوال
                        "&:hover": {
                          backgroundColor: "#0f4569",
                        },
                      }}
                    >
                      Learn More
                      <ArrowCircleRightIcon
                        sx={{ paddingLeft: "5px", color: "#eadccc" }}
                      />
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Destinations;
