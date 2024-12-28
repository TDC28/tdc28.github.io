import { useEffect, useRef, useState } from "react";
import { FileUser, Linkedin, Github, Mail } from "lucide-react";
import Job from "./components/job";
import Project from "./components/project";
import resume from "../public/resume.pdf";

const sections = [
  { name: "Home", id: "home" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const jobs = [
  {
    name: "Institute for Quantum Computing",
    role: "Research Assistant",
    start: "Jan",
    end: "May 2025",
    location: "Waterloo, ON",
    details: "",
  },
  {
    name: "UW Physics Tutorial Centre",
    role: "Volunteer Tutor",
    start: "Sep",
    end: "Dec 2024",
    location: "Waterloo, ON",
    details:
      "Provided academic support to University of Waterloo students through one-on-one and group tutoring sessions at the Physics Tutorial Center. Assisted students in mastering concepts across first-year courses in computer science, physics, and mathematics. Empowered students to enhance problem-solving skills and achieve academic success.",
  },
  {
    name: "Shediac Tennis Club",
    role: "Senior Coordinator",
    start: "May",
    end: "Sep 2024",
    location: "Shediac, NB",
    details:
      "Supervised employees at the Shediac Tennis Club, fostering a collaborative and productive work environment. Built programming tools to automate employee tasks, improving efficiency in daily operations. Contributed to the design and launch of the club's new website while ensuring exceptional service delivery to all members.",
  },
];

const projects = [
  {
    name: "Qalendar",
    details: "Calendar generator powered by quantum annealing.",
    link: "https://github.com/TDC28/Qalendar.git",
    tools: ["Python", "Django", "TypeScript", "D-Wave Ocean"],
  },
  {
    name: "QuViz",
    details: "Neutral atom quantum computer compilation visualization tool.",
    link: "https://github.com/RasmitDevkota/QuViz.git",
    tools: ["Python", "Qiskit", "NumPy", "Tkinter"],
  },
];

const publications = [];

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
        <nav className="flex flex-row justify-between items-center bg-white/80 backdrop-blur w-[500px] rounded-2xl border border-black">
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
          className="snap-start h-screen flex items-center bg-gray-100"
        >
          <div className="flex flex-col md:flex-row w-full justify-around items-center px-4">
            <div className="flex flex-col p-4 max-w-full md:max-w-[720px] text-center md:text-left">
              <h1 className="text-4xl md:text-7xl font-kumbh font-bold">
                Alexandre Boutot
              </h1>
              <p className="text-lg md:text-2xl font-kumbh mt-2 md:mt-0">
                Mathematical Physics Student at the University of Waterloo
              </p>
              <p className="pt-4 text-sm md:text-base">
                I’m passionate about exploring physics, mathematics, and
                technology to create practical solutions from theoretical ideas.
                When I’m not immersed in academics, you’ll find me on the tennis
                court or working on projects that combine cutting-edge quantum
                computing concepts with real-world applications. Scroll down to
                see what I’ve been working on!
              </p>
            </div>
            <img
              src="/me.JPG"
              alt="Me"
              className="w-0 md:w-96 rounded-xl shadow-lg shadow-black mt-4 md:mt-0"
            />
          </div>
        </section>

        <section
          id="experience"
          ref={(el) => (sectionRefs.current[1] = el)}
          className="snap-start h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 px-4"
        >
          <div className="flex w-full md:w-1/3 items-center justify-center mb-4 md:mb-0">
            <div className="h-full flex flex-col items-center justify-center p-4 md:p-8">
              <h1 className="font-kumbh text-3xl md:text-4xl mb-2">
                Experience
              </h1>
              <p className="text-center text-sm md:text-base">
                Here is the work experience I gained since I started my journey
                at Waterloo!
              </p>
            </div>
          </div>
          <div
            className="bg-white h-[400px] md:h-[550px] max-w-[750px] rounded-xl flex flex-col gap-2 overflow-y-scroll snap-y snap-mandatory p-4 md:p-6 items-center scrollbar-hide border border-black w-full md:w-2/3"
            style={{ scrollPaddingTop: "1rem" }}
          >
            {jobs.map(({ name, role, start, end, location, details }) => (
              <Job
                key={name + start}
                name={name}
                role={role}
                start={start}
                end={end}
                location={location}
                details={details}
              />
            ))}
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => (sectionRefs.current[2] = el)}
          className="snap-start h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 px-4"
        >
          <div className="flex w-full md:w-1/3 items-center justify-center mb-4 md:mb-0">
            <div className="h-full flex flex-col items-center justify-center p-4 md:p-8">
              <h1 className="font-kumbh text-3xl md:text-4xl mb-2">Projects</h1>
              <p className="text-center text-sm md:text-base">
                Here are some of the things I have been working on recently.
              </p>
            </div>
          </div>

          <div className=" md:w-2/3 flex flex-col gap-4 max-w-[750px]">
            {projects.map(({ name, details, link, tools }) => (
              <Project
                key={name}
                link={link}
                name={name}
                details={details}
                tools={tools}
              />
            ))}
          </div>
        </section>

        <section
          id="contact"
          ref={(el) => (sectionRefs.current[3] = el)}
          className="snap-start flex h-3/5 bg-gray-100 items-center"
        >
          <div className="flex items-center bg-white w-full h-full">
            <h1 className="text-4xl font-kumbh ml-10 min-w-56">Contact</h1>
            <div className="flex flex-col md:flex-row gap-2 w-full mr-2">
              <div className="flex flex-col gap-2">
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
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="https://linkedin.com/in/alexandreboutot"
                  className="contact-link"
                >
                  <div className="flex flex-row p-2">
                    <Linkedin className="mr-2" />
                    <p className="font-kumbh">LinkedIn</p>
                  </div>
                </a>
                <a href={resume} target="_blank" className="contact-link">
                  <div className="flex flex-row p-2">
                    <FileUser className="mr-2" />
                    <p className="font-kumbh">Resume</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
