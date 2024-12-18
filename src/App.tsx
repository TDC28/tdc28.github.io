import { useEffect, useRef, useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const sections = [
    { name: "Home", id: "home" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Publications", id: "publications" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      },
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-12 flex justify-center z-10 bg-white">
        <nav className="flex flex-row justify-between items-center bg-zinc-200/50 w-[520px] rounded-2xl">
          {sections.map(({ id, name }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-4 py-2 text-gray-600 ${
                activeSection === id ? "font-bold" : "tracking-wide"
              }`}
            >
              {name}
            </a>
          ))}
        </nav>
      </header>

      <div className="pt-14">
        {sections.map(({ id, name }, index) => (
          <section
            id={id}
            key={id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="min-h-screen flex items-center justify-center border-b-2"
          >
            <h1 className="text-4xl">{name}</h1>
          </section>
        ))}
      </div>
    </>
  );
}

export default App;
