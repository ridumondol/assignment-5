import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TechCard from "./components/TechCard";
import SidebarStack from "./components/SidebarStack";
import Footer from "./components/Footer";

import type { Technology } from "./data/technologies";
import { TECHNOLOGIES } from "./data/technologies";

function App() {
  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Load technologies with a simulated loading state
  useEffect(() => {
    let isMounted = true;
    
    const fetchTechnologies = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 400));
        if (isMounted) {
          setTechnologies(TECHNOLOGIES);
        }
      } catch (error) {
        console.error("Error loading technologies:", error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchTechnologies();

    return () => {
      isMounted = false;
    };
  }, []);

  // Explore button
  const handleExploreClick = () => {
    const techSection = document.getElementById("technologies");

    techSection?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Add / Remove technology (Fixed: side-effect kept outside state setter)
  const handleToggleTech = (tech: Technology) => {
    const alreadySelected = selectedTechs.some(
      (item) => item.id === tech.id
    );

    if (alreadySelected) {
      setSelectedTechs((prev) => prev.filter((item) => item.id !== tech.id));
      toast.success(`${tech.name} removed from your stack!`, {
        toastId: `tech-${tech.id}`,
      });
    } else {
      setSelectedTechs((prev) => [...prev, tech]);
      toast.success(`${tech.name} added to your stack!`, {
        toastId: `tech-${tech.id}`,
      });
    }
  };

  // Remove one technology from Sidebar (Fixed)
  const handleRemoveTech = (id: string) => {
    const tech = selectedTechs.find(
      (item) => item.id === id
    );

    if (tech) {
      setSelectedTechs((prev) =>
        prev.filter((item) => item.id !== id)
      );
      toast.success(`${tech.name} removed from your stack!`, {
        toastId: `tech-${tech.id}`,
      });
    }
  };

  // Remove all
  const handleClearAll = () => {
    if (selectedTechs.length === 0) {
      toast.warning("Your stack is already empty!", {
        toastId: "clear-empty",
      });
      return;
    }

    setSelectedTechs([]);

    toast.success("All technologies removed from your stack!", {
      toastId: "clear-all",
    });
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-16">
        <HeroSection
          onExploreClick={handleExploreClick}
          onLearnMoreClick={() => console.log("Learn More")}
        />

        <section
          id="technologies"
          className="max-w-7xl mx-auto px-6 py-12 border-t border-base-200"
        >
          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Explore{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-base-content/60 mt-1">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Technology Cards / Loading State */}
            {isLoading ? (
              <div className="lg:col-span-8 flex flex-col items-center justify-center py-24">
                <span className="loading loading-spinner loading-lg text-pink-500"></span>
                <p className="text-xs sm:text-sm text-base-content/60 mt-3 animate-pulse">
                  Loading technologies...
                </p>
              </div>
            ) : (
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {technologies.map((tech) => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    isSelected={selectedTechs.some(
                      (item) => item.id === tech.id
                    )}
                    onToggleSelect={handleToggleTech}
                  />
                ))}
              </div>
            )}

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <SidebarStack
                selectedTechs={selectedTechs}
                onRemoveTech={handleRemoveTech}
                onClearAll={handleClearAll}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* React Toastify */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
}

export default App;