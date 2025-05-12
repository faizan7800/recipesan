import Navbar from "../components/Landing/Navbar";
import Footer from "../components/Landing/Footer";
import { useNavigate } from "react-router-dom";
import useData from "../hooks/useData";
import LoadingSpinner from "../components/LoadingSpinner";
import { useEffect, useRef } from "react";

const Recipe = () => {

  const navigate = useNavigate();
//   const { isLoading } = useLoading();
  const baseUrl = "https://api.edamam.com/api/recipes/v2?";
  const data = useData(undefined, undefined, undefined, baseUrl);
  const randomNumber = Math.floor(Math.random() * 19);

  const recipe = data?.slice(randomNumber, randomNumber+1)[0].recipe;
    
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    const handleMouseEnter = () => {
      button.style.backgroundColor = "#7ADFBB"; 
    };

    const handleMouseLeave = () => {
      button.style.backgroundColor = "#CCFCCE"; 
    };

    if (button) {
      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup
    return () => {
      if (button) {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  if (!recipe) {
    return (
      <LoadingSpinner/>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-l from-[#A6ECE0] to-[#7ADFBB] flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center px-4 pb-12">
        {/* Hero Image */}
        <div className="relative w-full max-w-3xl mt-12 mb-7 mx-auto">
          <img
            src={recipe.image}
            alt={recipe.label}
            className="w-full h-[320px] object-cover rounded-[32px] shadow-xl border-4 border-[#CCFCCE]"
          />
           <button
            ref={buttonRef}
            className="absolute top-4 left-4 text-[#544B3D] rounded-2xl px-4 py-2 font-bold shadow"
            style={{ backgroundColor: "#CCFCCE" }}
            onClick={() => navigate(-1)}
    >
      ← Back
    </button>
        </div>
        {/* Recipe Details */}
        <div className="max-w-3xl w-full bg-white/80 rounded-[24px] shadow-2xl flex flex-col px-8 py-8 gap-8">
          <h1 className="text-[38px] md:text-[48px] font-bold text-[#52423D] mb-2">{recipe.label}</h1>
          {/* Stats Labels */}
          <div className="flex flex-wrap gap-5 mb-6">
            <div className="flex flex-col items-center bg-[#A6ECE0] text-[#52423D] rounded-2xl px-6 py-2 font-semibold">
              {Math.round(recipe.calories)} <span className="font-light text-[14px]">Calories</span>
            </div>
            <div className="flex flex-col items-center bg-[#7ADFBB] text-[#52423D] rounded-2xl px-6 py-2 font-semibold">
              {recipe.totalTime || "—"} <span className="font-light text-[14px]">Minutes</span>
            </div>
            <div className="flex flex-col items-center bg-[#F3F0EF] text-[#544B3D] rounded-2xl px-6 py-2 font-semibold">
              {recipe.ingredients?.length} <span className="font-light text-[14px]">Ingredients</span>
            </div>
          </div>
          {/* Ingredients List */}
          <div>
            <h2 className="font-bold text-[#544B3D] text-2xl mb-2">Ingredients</h2>
            <ul className="list-disc ml-6 text-[#4E6E58]">
              {recipe.ingredients.map((ingr, i) => (
                <li key={i} className="mb-2">{ingr.text}</li>
              ))}
            </ul>
          </div>
          {/* Nutrients (optional) */}
          {recipe.totalNutrients && (
            <div>
              <h2 className="font-bold text-[#544B3D] text-2xl mb-3">Nutritional Information</h2>
              <div className="flex flex-wrap gap-6">
                {["ENERC_KCAL", "PROCNT", "FAT", "CHOCDF"].map(key =>
                  recipe.totalNutrients[key] && (
                    <div key={key} className="bg-[#CCFCCE] rounded-xl p-4 min-w-[110px] text-center">
                      <div className="text-lg font-bold text-[#52423D] mb-1">
                        {Math.round(recipe.totalNutrients[key].quantity)}
                        <span className="text-xs font-light"> {recipe.totalNutrients[key].unit}</span>
                      </div>
                      <div className="text-xs text-[#544B3D]">
                        {recipe.totalNutrients[key].label}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
          {/* Tags */}
          <div className="pt-3 flex flex-wrap gap-3">
            {recipe.dietLabels.map((label, idx) => (
              <span
                key={idx}
                className="bg-[#A18D87] text-white rounded-2xl px-3 py-1 text-xs font-semibold"
              >
                {label}
              </span>
            ))}
            {recipe.healthLabels.slice(0, 4).map((label, idx) => (
              <span
                key={idx}
                className="bg-[#CCFCCE] text-[#52423D] border border-[#544B3D] rounded-2xl px-3 py-1 text-xs font-semibold"
              >
                {label}
              </span>
            ))}
          </div>
          {/* CTA Button */}
          <a
            href={recipe.url}
            className="mt-8 inline-block bg-[#544B3D] hover:bg-[#9f8b6a] text-[#CCFCCE] font-bold text-lg rounded-2xl px-7 py-3 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Recipe & Steps
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Recipe;