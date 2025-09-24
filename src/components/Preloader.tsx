import { useEffect, useRef, useState } from "react";
import logo1 from "../assets/logo1.webp";
import gsap from "gsap";
import { Box } from "@mui/material";

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // نسحب الشاشة لفوق
        gsap.to(preloaderRef.current, {
          y: "-100%",
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => setShow(false),
        });
      },
    });

    // أنيميشن الحروف
    tl.fromTo(
      Array.from(textRef.current!.children),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "power3.out",
      }
    );

    // تأخير قبل السحب للأعلى
    tl.to({}, { duration: 1 });
  }, []);

  if (!show) return null;

  return (
    <div
      ref={preloaderRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#1d1b56c9",
        backdropFilter: "blur(24px)",
        color: "#BCA966",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        fontFamily: "Future Now, sans-serif",
        fontSize: "42px",
        fontWeight: 600,
        letterSpacing: "4px",
      }}
    >
      <div ref={textRef} style={{ display: "flex", gap: "6px" }}>
        <Box component="img" src={logo1} sx={{ width: "300px" }} />
      </div>
    </div>
  );
};

export default Preloader;
