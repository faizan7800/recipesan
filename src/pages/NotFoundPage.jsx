import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    const handleMouseEnter = () => {
      button.style.backgroundColor = "#7ADFBB";
    };

    const handleMouseLeave = () => {
      button.style.backgroundColor = "#CCFCCE";
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-l from-[#A6ECE0] to-[#7ADFBB] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-[96px] font-extrabold text-[#544B3D] drop-shadow-lg">404</h1>
      <h2 className="text-[28px] font-semibold text-[#52423D] mb-6">Page Not Found</h2>
      <p className="text-[#4E6E58] mb-10 max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <button
        ref={buttonRef}
        className="text-[#544B3D] rounded-2xl px-6 py-3 font-bold shadow"
        style={{ backgroundColor: "#CCFCCE" }}
        onClick={() => navigate(-1)}
      >
        ← Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
