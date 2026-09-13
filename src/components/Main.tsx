import { useState, useEffect } from "react";
import { toast } from "react-toastify";

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

function Technologies() {
  const [techList, setTechList] = useState<Technology[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  // Load JSON data from public directory
  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechList(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  // Helper to resolve images directly from src/assets/
  const getIconPath = (iconName: string) => {
    return new URL(`../assets/${iconName}`, import.meta.url).href;
  };

  const handleAddToStack = (tech: Technology) => {
    const alreadyExists = selectedStack.some((item) => item.id === tech.id);
    if (alreadyExists) {
      toast.warn(`${tech.name} is already added in your stack!`);
      return;
    }
    setSelectedStack([...selectedStack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveItem = (id: string) => {
    const filtered = selectedStack.filter((item) => item.id !== id);
    setSelectedStack(filtered);
    toast.info("Item removed from stack");
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error("All items cleared from stack");
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Explore the <span className="text-pink-600">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Layout: Grid + Sidebar */}
        <div className="flex items-start gap-8">
          
          {/* 3-Column Technology Grid */}
          <div className="flex-1 grid grid-cols-3 gap-6">
            {techList.map((tech) => {
              const isAdded = selectedStack.some((item) => item.id === tech.id);

              return (
                <div
                  key={tech.id}
                  className="border border-slate-200/90 rounded-2xl p-6 bg-white flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      {/* Dynamically resolved local image */}
                      <img 
                        src={getIconPath(tech.icon)} 
                        alt={tech.name} 
                        className="w-8 h-8 object-contain" 
                      />
                      <span className="text-[11px] font-medium border border-blue-200 bg-blue-50 text-blue-500 px-2.5 py-0.5 rounded-full">
                        {tech.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mt-4">{tech.name}</h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center justify-between text-xs text-slate-500 pb-4 border-b border-slate-100">
                      <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                        {tech.category}
                      </span>
                      <span className="text-slate-500">{tech.difficulty}</span>
                      <span className="flex items-center gap-1 font-semibold text-slate-700">
                        <span className="text-amber-400">★</span> {tech.rating}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddToStack(tech)}
                      disabled={isAdded}
                      className={`w-full mt-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        isAdded
                          ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                          : "bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 shadow-sm"
                      }`}
                    >
                      {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Your Stack Sidebar */}
          <div className="w-80 sticky top-28 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {selectedStack.length === 0
                ? "No technologies selected yet."
                : `${selectedStack.length} Technology Selected`}
            </p>

            {/* Empty State */}
            {selectedStack.length === 0 ? (
              <div className="mt-6 border border-dashed border-slate-200 rounded-xl py-10 text-center">
                <p className="text-xs text-slate-400 font-medium">Your stack is empty.</p>
              </div>
            ) : (
              /* Selected Items List */
              <div className="mt-6 space-y-3">
                <div className="space-y-2.5 max-h-[440px] overflow-y-auto pr-1">
                  {selectedStack.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3 border border-slate-200 rounded-xl bg-white"
                    >
                      <div className="flex items-center gap-3">
                        <img 
                          src={getIconPath(item.icon)} 
                          alt={item.name} 
                          className="w-7 h-7 object-contain" 
                        />
                        <div>
                          <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                          <span className="text-[10px] text-slate-400">{item.category}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-slate-400 hover:text-slate-600 p-1 text-sm font-semibold"
                        title="Remove"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleRemoveAll}
                  className="w-full mt-4 py-2 border border-red-200 text-red-500 hover:bg-red-50 text-xs font-semibold rounded-xl transition-colors"
                >
                  Remove All
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Technologies;