import { useEffect, useRef, useState } from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import Job from "./components/job";

const sections = [
  { name: "Home", id: "home" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Publications", id: "publications" },
  { name: "Contact", id: "contact" },
];

const jobs = [
  {
    name: "Institute for Quantum Computing",
    role: "Research Assistant",
    start: "January 2025",
    end: "May 2025",
    location: "Waterloo, ON",
    details:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasseac ex volutpat leo eu risus torquent sagittis sodales. Magna semtortor ullamcorper maximus ante praesent.",
    image: "/iqc.png",
  },
  {
    name: "Shediac Tennis Club",
    role: "Senior Coordinator",
    start: "May 2024",
    end: "September 2024",
    location: "Shediac, NB",
    details:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasseac ex volutpat leo eu risus torquent sagittis sodales. Magna semtortor ullamcorper maximus ante praesent.",
    image: "/stc.png",
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

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
        threshold: 0.8,
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
          {sections.map(({ name, id }) => (
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
            <img
              src="/me.JPG"
              alt="Me"
              className="w-96 rounded-xl shadow-lg shadow-black"
            />
          </div>
        </section>

        <section
          id="experience"
          ref={(el) => (sectionRefs.current[1] = el)}
          className="snap-start h-screen flex flex-col items-start justify-start p-6"
        >
          <div className="flex-grow flex items-center justify-around w-full h-screen">
            <div className="max-w-96 h-screen flex flex-col justify-center">
              <h1 className="font-kumbh text-4xl mb-6">Experience</h1>
              <p>
                Here is the work experience I gained since starting my journey
                at Waterloo!
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="border p-2 rounded-xl w-96 h-60 hover:shadow-xl transition-all duration-300 bg-zinc-100"></div>
              {jobs.map(
                ({ name, role, start, end, location, details, image }) => (
                  <Job
                    name={name}
                    role={role}
                    start={start}
                    end={end}
                    location={location}
                    details={details}
                    image={image}
                  />
                ),
              )}
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => (sectionRefs.current[2] = el)}
          className="section"
        >
          <h1 className="font-kumbh text-4xl">Projects</h1>
        </section>

        <section
          id="publications"
          ref={(el) => (sectionRefs.current[3] = el)}
          className="section"
        >
          <h1 className="font-kumbh text-4xl">Publications</h1>
        </section>

        <section
          id="contact"
          ref={(el) => (sectionRefs.current[4] = el)}
          className="snap-start flex h-1/4 bg-zinc-50 rounded-tl-3xl rounded-tr-full items-center w-2/3"
        >
          <h1 className="text-4xl font-kumbh ml-10 min-w-56">Contact</h1>
          <div className="flex flex-row gap-4 w-full">
            <a
              href="mailto:alexandreboutot@icloud.com"
              className="contact-link"
            >
              <div className="flex flex-row pt-2 pb-2">
                <Mail className="mr-2" />
                <p className="font-kumbh">Email</p>
              </div>
            </a>
            <a href="https://github.com/TDC28" className="contact-link">
              <div className="flex flex-row p-2">
                <Github className="mr-2" />
                <p className="font-kumbh">GitHub</p>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/alexandreboutot"
              className="contact-link"
            >
              <div className="flex flex-row p-2">
                <Linkedin className="mr-2" />
                <p className="font-kumbh">LinkedIn</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
