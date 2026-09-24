import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import { useState, useEffect } from "react";
import TechCard from "./components/TechCard";
import StackSidebar from "./components/StackSidebar";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./components/footer"

function App() {
    const [selectedStack, setSelectedStack] = useState([]);
  const [technologies, setTechnologies] = useState([]);
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("src/data/technologies.json");
      const data = await response.json();

          setTechnologies(data);
      setLoading(false);
    };

             loadData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleAdd = (tech) => {
              if (selectedStack.find((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

             setSelectedStack((prev) => [...prev, tech]);

    toast.success(`${tech.name} added to your stack!`);
  };
          
  const handleRemove = (id) => {
    const tech = selectedStack.find((item) => item.id === id);

    if (!tech) return;
      
        setSelectedStack((prev) =>
      prev.filter((item) => item.id !== id)
    );

    toast.info(`${tech.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
         if (selectedStack.length === 0) {
      toast.warning("Your stack is already empty!");
      return;
    }

    setSelectedStack([]);

             toast.success("All technologies removed from your stack!");
  };

  return (
    <>
      <Navbar />

      <Banner />
 
                 <main className="min-h-screen bg-white px-5 py-8 md:px-10">
             <ToastContainer
          position="top-right"
                    autoClose={2500}
          theme="light"
          newestOnTop
          closeOnClick
          pauseOnHover
        />

                <div className="mx-auto max-w-360">
          <header className="mb-9">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                         Explore the{" "}
              <span className="bg-linear-to-r from-orange-500 to-fuchsia-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h1>

            <p className="mt-2 text-sm text-slate-500 md:text-base">
                        Pick one technology per category to build your ideal stack.
            </p>
          </header>

          <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[minmax(0,3fr)_280px]">
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

                       <StackSidebar
              selectedStack={selectedStack}
                        onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
                 </div>
      </main>

       <Footer />
    </>
  );
}

export default App;