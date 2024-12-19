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
      <header className="fixed top-2 left-0 w-full h-12 flex justify-center z-10">
        <nav className="flex flex-row justify-between items-center bg-zinc-200/50 backdrop-blur w-[520px] rounded-2xl border border-black">
          {sections.map(({ id, name }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-4 py-2 text-gray-600 transition-all duration-200 ${
                activeSection === id ? "font-bold" : "tracking-wide"
              }`}
            >
              {name}
            </a>
          ))}
        </nav>
      </header>
      <div className="pt-14 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide">
        <section
          id="home"
          ref={(el) => (sectionRefs.current[0] = el)}
          className="snap-start h-screen flex items-center"
        >
          <div className="flex flex-row w-full justify-around items-center">
            <div className="flex flex-col p-4 max-w-[720px]">
              <h1 className="text-7xl font-kumbh font-bold">
                Alexandre Boutot
              </h1>
              <p className="text-2xl font-kumbh">
                Mathematical Physics student at the University of Waterloo
              </p>
              <p className="pt-4">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse
                ac ex volutpat leo eu risus torquent sagittis sodales. Magna sem
                tortor ullamcorper maximus ante praesent. Fusce nibh nibh mauris
                aliquet ultrices ultricies; pretium inceptos faucibus. Etiam
                mattis dictum posuere morbi leo nam. Gravida in odio maecenas
                mollis quam urna malesuada augue habitasse. Vitae eros mollis
                ultricies montes magna. Pulvinar tempor volutpat in vitae velit
                arcu taciti. Semper leo curabitur venenatis facilisis cras
                habitant.
              </p>
            </div>
            <div className="min-w-96 min-h-[550px] border rounded-2xl text-center">
              Picture
            </div>
          </div>
        </section>

        <section
          id="experience"
          ref={(el) => (sectionRefs.current[1] = el)}
          className="snap-start h-screen flex flex-col items-start justify-start p-6"
        >
          <h1 className="font-kumbh text-4xl mb-6">Experience</h1>
          <div className="flex-grow flex items-center justify-center w-full">
            <div className="snap-x flex gap-6 overflow-x-scroll w-full max-w-4xl px-4 py-6">
              <div className="snap-center border rounded-xl w-64 h-40 flex items-center justify-center">
                Job 1
              </div>
              <div className="snap-center border rounded-xl w-64 h-40 flex items-center justify-center">
                Job 2
              </div>
              <div className="snap-center border rounded-xl w-64 h-40 flex items-center justify-center">
                Job 3
              </div>
              <div className="snap-center border rounded-xl w-64 h-40 flex items-center justify-center">
                Job 4
              </div>
              <div className="snap-center border rounded-xl w-64 h-40 flex items-center justify-center">
                Job 5
              </div>
              <div className="snap-center border rounded-xl w-64 h-40 flex items-center justify-center">
                Job 6
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => (sectionRefs.current[2] = el)}
          className="section"
        >
          <h1 className="text-4xl">Projects</h1>
        </section>

        <section
          id="publications"
          ref={(el) => (sectionRefs.current[3] = el)}
          className="section"
        >
          <h1 className="text-4xl">Publications</h1>
        </section>

        <section
          id="contact"
          ref={(el) => (sectionRefs.current[4] = el)}
          className="section"
        >
          <h1 className="text-4xl">Contact</h1>
        </section>
      </div>
    </>
  );
}

export default App;
