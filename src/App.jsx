import { Routes, Route } from "react-router-dom";
import RecipeSearch from "./pages/RecipeSearch";
import Instractions from "./pages/Instructions";
import Landing from "./pages/Landing";
import { LoadingProvider } from "./context/loadingContext";
import AboutUs from "./pages/AboutUS";
import Recipe from "./pages/Recipe";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <LoadingProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<RecipeSearch />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/instructions" element={<Instractions />} />
      </Routes>
    </LoadingProvider>
  );
}

export default App;
