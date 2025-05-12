import Navbar from "../components/Landing/Navbar";
import Footer from "../components/Landing/Footer";

const AboutUs = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 w-screen bg-gradient-to-l from-[#A6ECE0] to-[#7ADFBB] pb-10">
        <Navbar />
        {/* Hero/Mission Section */}
        <div className="max-w-5xl mx-auto mt-16 flex flex-col items-center gap-8 px-6 text-center">
          <h1 className="text-[56px] leading-tight font-bold text-[#52423D] max-[540px]:text-3xl">
            About Cooking Made Fun
          </h1>
          <p className="max-w-2xl text-[#4E6E58] text-lg font-light">
            At <span className="font-bold text-[#544B3D]">Cooking Made Fun</span>, our mission is to empower home cooks and food lovers to discover, learn, and create with ease. 
            We bring together <span className="text-[#544B3D] font-medium">10,000+ curated recipes</span> from around the world, making cooking fun, simple, and rewarding for everyone.
          </p>
        </div>
        {/* Achievements/Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 max-w-4xl mx-auto">
          <div className="bg-[#CCFCCE] rounded-2xl shadow-md p-8 flex flex-col items-center min-w-[160px]">
            <div className="text-4xl font-bold text-[#4E6E58]">10,000+</div>
            <div className="mt-2 text-[#52423D] font-semibold">Recipes</div>
            <div className="text-xs text-[#A18D87]">From all cuisines</div>
          </div>
          <div className="bg-[#CCFCCE] rounded-2xl shadow-md p-8 flex flex-col items-center min-w-[160px]">
            <div className="text-4xl font-bold text-[#4E6E58]">1000s</div>
            <div className="mt-2 text-[#52423D] font-semibold">Happy Users</div>
            <div className="text-xs text-[#A18D87]">Cooking together</div>
          </div>
          <div className="bg-[#CCFCCE] rounded-2xl shadow-md p-8 flex flex-col items-center min-w-[160px]">
            <div className="text-4xl font-bold text-[#4E6E58]">Easy</div>
            <div className="mt-2 text-[#52423D] font-semibold">Step-by-Steps</div>
            <div className="text-xs text-[#A18D87]">For all levels</div>
          </div>
        </div>
        {/* About/Story Section */}
        <div className="mt-20 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 px-8">
          <img 
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" 
            alt="Team cooking" 
            className="rounded-2xl shadow-lg w-80 h-64 object-cover hidden md:block"
          />
          <div className="flex-1 flex flex-col items-start md:items-start gap-6">
            <h2 className="text-3xl font-bold text-[#52423D] mb-1 max-[540px]:text-xl">
              Our Story
            </h2>
            <p className="text-[#4E6E58] font-light text-base">
              Created by a group of passionate foodies and technology enthusiasts, Cooking Made Fun started as a way to make home-cooking more approachable and enjoyable for all. We believe in the joy of sharing a meal and the magic that happens in the kitchen.
            </p>
            <p className="text-[#4E6E58] font-light text-base">
              Every recipe is handpicked, with easy-to-follow instructions, nutritional facts, and beautiful images to inspire your next meal. We continue to grow our community, adding new flavors and cultures every day!
            </p>
          </div>
        </div>
        {/* Features Section */}
        <div className="max-w-5xl mx-auto py-16 px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 ">
          <div className="bg-white rounded-2xl shadow flex flex-col items-center p-6">
            <img
              src="https://img.icons8.com/fluency/48/chef-hat.png"
              alt="Easy to Cook"
              className="w-12 h-12 mb-3"
            />
            <div className="text-[#544B3D] font-bold mb-2">Easy Recipes</div>
            <div className="text-[#A18D87] text-sm text-center">Simple, clear steps with visuals—no chef experience required.</div>
          </div>
          <div className="bg-white rounded-2xl shadow flex flex-col items-center p-6">
            <img
              src="https://img.icons8.com/doodle/48/ingredients.png"
              alt="Ingredient Info"
              className="w-12 h-12 mb-3"
            />
            <div className="text-[#544B3D] font-bold mb-2">Ingredient Insights</div>
            <div className="text-[#A18D87] text-sm text-center">Nutritional values & dietary tags for every dish.</div>
          </div>
          <div className="bg-white rounded-2xl shadow flex flex-col items-center p-6">
            <img
              src="https://img.icons8.com/cotton/64/share--v2.png"
              alt="Community"
              className="w-12 h-12 mb-3"
            />
            <div className="text-[#544B3D] font-bold mb-2">Inclusive Community</div>
            <div className="text-[#A18D87] text-sm text-center">Discover, share, and celebrate recipes together.</div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="w-screen flex items-center justify-center mt-10 mb-20">
          <div className="flex flex-col items-center gap-6 rounded-2xl bg-white/80 px-10 py-8 shadow-lg md:px-20">
            <div className="font-bold text-2xl text-[#52423D]">Ready to get cooking?</div>
            <button
              className="px-6 py-3 rounded-2xl bg-[#544B3D] text-[#CCFCCE] font-bold hover:bg-[#9f8b6a] active:bg-yellow-300 active:text-black text-lg"
              onClick={() => window.location.href = "/search"}
            >
              Explore Recipes
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;