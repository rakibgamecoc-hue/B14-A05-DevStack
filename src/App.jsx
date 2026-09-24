import './App.css'
import Navbar from './components/navbar'
import Banner from './components/banner'
import { useState } from "react";
import technologies from "./data/technologies.json";
import TechCard from "./components/TechCard";
import StackSidebar from "./components/StackSidebar";

function App() {
  const [selectedStack, setSelectedStack] = useState([]);
  const handleAdd = (tech) => {
    setSelectedStack((prev) => {
    
    if (prev.find((item) => item.id === tech.id)) {
  return prev;
}

        return [...prev, tech];
    });
  };


  const handleRemove = (id) => {
            setSelectedStack((prev) =>
     
     
     
              prev.filter((tech) => tech.id !== id)
    );
  };


         const handleRemoveAll = () => {
       setSelectedStack([]);
  };

  return (
    <>
      <Navbar />
      <Banner />

      <main className="min-h-screen bg-white px-5 py-8 md:px-10">
        <div className="mx-auto max-w-[1440px]">

          {/* Header */}
          <header className="mb-9">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Explore the{" "}
              <span className="bg-gradient-to-r from-orange-500 to-fuchsia-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h1>

            <p className="mt-2 text-sm text-slate-500 md:text-base">
              Pick one technology per category to build your ideal stack.
            </p>
          </header>

          {/* Main Layout */}
          <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[minmax(0,3fr)_280px]">

            {/* Dynamic Technology Cards */}
            <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isSelected={selectedStack.some(
                    (item) => item.id === tech.id
                  )}
                  onAdd={handleAdd}
                />
              ))}
            </section>

            {/* Dynamic Stack Sidebar */}
            <StackSidebar
              selectedStack={selectedStack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />

          </div>
        </div>
      </main>
    </>
  );
}

export default App