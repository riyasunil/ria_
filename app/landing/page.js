"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const CurvedScrollableNavigation = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const sectionsRef = useRef({});
  const rightSideRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


   const socialLinks = [
     {
       name: "GitHub",
       icon: FaGithub,
       url: "https://github.com/riyasunil",
       color: "hover:text-gray-400",
     },
     {
       name: "LinkedIn",
       icon: FaLinkedin,
       url: "https://linkedin.com/in/riyasunil",
       color: "hover:text-blue-400",
     },
     {
       name: "Twitter",
       icon: FaTwitter,
       url: "https://twitter.com/riamisuu",
       color: "hover:text-blue-500",
     },
     {
       name: "Instagram",
       icon: FaInstagram,
       url: "https://instagram.com/riasunil_",
       color: "hover:text-pink-500",
     },
     {
       name: "Email",
       icon: FaEnvelope,
       url: "mailto:riyasunil2025@gmail.com",
       color: "hover:text-red-400",
     },
  ];
  
  const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const emailParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  emailjs
    .send(
      process.env.NEXT_PUBLIC_SERVICE_KEY,
      process.env.NEXT_PUBLIC_TEMPLATE_KEY,
      emailParams,
      process.env.NEXT_PUBLIC_EMAILJS_KEY,
    )
    .then(() => {
      toast.success("Message sent successfully!");
      e.target.reset();
    })
    .catch((error) => {
      toast.error("Error sending email:", error);
      // alert("Failed to send message. Please try again.");
    });
};


  const projectsData = [
    {
      id: 1,
      title: "Dr. Jai Reddy's Portfolio",
      imageUrl: "/jaireddy.png",
      description:
        "A minimalist and sleek portfolio showcasing the dental work of Dr. Jai Reddy.",
      linkURL: "https://www.jaireddy.uk",
    },
    {
      id: 2,
      title: "Help Now",
      imageUrl: "/helpnow.png",
      description:
        "This project was created as the dashboard for a temperature and crash detection system, to prevent and report accidents, fires and other hazardous incidents. Helpnow secured !st at IBeto-2023",
      linkURL: "https://github.com/jamaljm/HelpNow",
    },
    {
      id: 3,
      title: "Petfolio",
      imageUrl: "/petfolio.jpg",
      description:
        "Petfolio was made at HFT 2022, with the intention of creating a low-tech product to keep your sweet pets safe.",
      linkURL: "https://github.com/riyasunil/PETFOLIO",
    },
    {
      id: 4,
      title: "The Social Network",
      imageUrl: "/social-network.png",
      description:
        "Just a silly invite only social media app for my friends and family.",
      linkURL: "https://social-network-vert-iota.vercel.app/",
    },
  ];

  const navItems = [
    {
      id: "about",
      label: (
        <>
          about me<em>!</em>
        </>
      ),
    },
    { id: "jobs", label: "experience" },
    { id: "projects", label: "projects" },
    { id: "contact", label: "text me" },
  ];

  useEffect(() => {
    const handleRightScroll = () => {
      if (!rightSideRef.current) return;

      const windowHeight = window.innerHeight;
      let maxVisibleSection = navItems[0].id;
      let maxVisibleAmount = 0;

      navItems.forEach(({ id }) => {
        if (!sectionsRef.current[id]) return;
        const rect = sectionsRef.current[id].getBoundingClientRect();
        const visibleHeight =
          Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        if (visibleHeight > maxVisibleAmount) {
          maxVisibleAmount = visibleHeight;
          maxVisibleSection = id;
        }
      });

      if (maxVisibleSection !== activeSection) {
        setActiveSection(maxVisibleSection);
      }
    };

    const rightSide = rightSideRef.current;
    if (rightSide) {
      rightSide.addEventListener("scroll", handleRightScroll);
      return () => rightSide.removeEventListener("scroll", handleRightScroll);
    }
  }, [activeSection, navItems]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    if (sectionsRef.current[sectionId] && rightSideRef.current) {
      rightSideRef.current.scrollTo({
        top: sectionsRef.current[sectionId].offsetTop,
        behavior: "smooth",
      });
    }
  };

  const getNavItemStyles = (index, isActive) => {
    const activeIndex = navItems.findIndex((item) => item.id === activeSection);
    const distanceFromActive = index - activeIndex;
    const horizontalOffset = Math.abs(distanceFromActive) * 2;

    return {
      transform: isActive
        ? `translateX(0px) scale(${window.innerWidth < 768 ? "1.1" : "1.2"})`
        : `translateX(-${
            window.innerWidth < 768 ? horizontalOffset / 2 : horizontalOffset
          }vh) scale(${window.innerWidth < 768 ? "0.9" : "0.8"})`,
      marginTop: window.innerWidth < 768 ? "10px" : "20px",
      marginBottom: window.innerWidth < 768 ? "10px" : "20px",
      opacity: isActive ? 1 : 0.5,
      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      transformOrigin: "left center",
      position: "relative",
      zIndex: isActive ? 10 : 5 - Math.abs(distanceFromActive),
    };
  };

  return (
    <div className="h-screen flex flex-col md:flex-row bg-[#0c102998] text-white overflow-hidden">
      <div>
        <Toaster />
      </div>

      <button
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-gray-800 rounded-full"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
          <FaTimes className="w-6 h-6" />
        ) : (
          <FaBars className="w-6 h-6" />
        )}
      </button>

      {/* left */}
      <div
        className={`left w-full md:w-1/2 ${
          isMobileMenuOpen
            ? "fixed inset-0 z-40 bg-[#0c1029f8]"
            : "hidden md:block"
        }`}
      >
        <div className="h-full py-10 md:py-20 px-6 md:pl-20 md:pr-4 flex flex-col justify-center">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsMobileMenuOpen(false);
              }}
              className="text-left py-2 md:py-3 focus:outline-none relative"
              style={getNavItemStyles(index, activeSection === item.id)}
            >
              <span className="text-4xl md:text-8xl font-bold transition-all duration-300 inline-block whitespace-nowrap font-mono">
                {item.label}
              </span>
              {activeSection === item.id && (
                <span className="hidden md:absolute -left-4 md:-left-8 top-1/2 transform -translate-y-1/2 text-base md:text-xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* right  */}
      <div
        ref={rightSideRef}
        className="right w-full md:w-1/2 overflow-y-auto snap-y snap-mandatory scroll-smooth"
      >
        <section
          ref={(el) => (sectionsRef.current.about = el)}
          className="min-h-screen flex flex-col justify-center items-start p-8 md:p-16 snap-start"
          id="about"
        >
          <TypingHeader />
          <div className="mt-6 max-w-md text-left flex flex-col gap-2 text-gray-500">
            <p className="text-base ">
              I'm currently a <strong>Computer Science</strong> major at{" "}
              <strong>Model Engineering College, Kerala</strong>.
            </p>
            <p>
              I build websites and such, mostly with the goal to revive the
              indie web.
            </p>
            <p>
              My frontend development journey began with watching my dad make rc
              planes from foam and taking my first qbasic class in 6th. All this
              tinkering has led me here !
            </p>
            <p>Stick around to learn more about me :]</p>
          </div>
        </section>

        <section
          ref={(el) => (sectionsRef.current.jobs = el)}
          className="min-h-screen flex flex-col justify-center p-8 md:p-16 snap-start"
          id="experiences"
        >
          <h2 className="text-4xl font-bold mb-8">Experiences</h2>
          <div className="space-y-6">
            {[
              {
                title: "Software Developer Intern @ Lektik",
                description:
                  "Developed and published the beta version of a web and extension based system.",
              },
              {
                title: "Project Intern @ Techgentsia Software Technologies",
                description:
                  "I worked in a team of 3 of my friends to build a sentiment analyzer for e-commerce site reviews and learnt more about machine learning models.",
              },
              {
                title: "Full Stack Developer @ Pentadots",
                description:
                  "Developed and deployed full-stack applications across various projects, ensuring seamless integration between front-end and back-end systems.",
              },
            ].map((experience) => (
              <div
                key={experience.title}
                className="border border-gray-700 p-6 rounded-lg hover:bg-gray-900 transition"
              >
                <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
                <div className="text-gray-300 mb-4">
                  {experience.description}
                </div>
                <button className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          ref={(el) => (sectionsRef.current.projects = el)}
          className="min-h-screen flex flex-col justify-center p-8 md:p-16 snap-start"
          id="projects-section"
        >
          <h2 className="text-4xl font-bold mb-8">Projects</h2>
          <div className="space-y-8 flex flex-col gap-4">
            {projectsData.map((project) => (
              <a href={project.linkURL} key={project.id} target="_blank">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={200}
                    height={200}
                    className="h-48 w-full object-cover rounded-md mb-4"
                  />
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section
          ref={(el) => (sectionsRef.current.contact = el)}
          className="min-h-screen flex flex-col justify-center p-8 md:p-16 snap-start"
          id="contact"
        >
          <h2 className="text-4xl font-bold mb-8">Let's Connect!</h2>

          <div className="max-w-2xl">
            <p className="text-gray-300 mb-8 text-lg">
              I'm always excited to make interesting stuff or talk about tech.
              Feel free to reach out through any of these platforms!
            </p>

            <div className="flex flex-wrap gap-6 mb-12">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 text-white ${social.color} transition-colors duration-300`}
                >
                  <social.icon className="w-8 h-8" />
                  <span className="text-lg group-hover:underline">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-white transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-white transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    name="message"
                    required
                    className="w-full px-4 py-2 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-white transition-colors"
                    placeholder="What's on your mind?"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CurvedScrollableNavigation;

const TypingHeader = () => {
  const segments = [
    { text: "hi ", element: null },
    { text: "!", element: "em" },
    { text: " im ria", element: null },
  ];

  const [displayedSegments, setDisplayedSegments] = useState(
    segments.map(() => "")
  );
  const [currentSegment, setCurrentSegment] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentSegment >= segments.length) return;

    const currentText = segments[currentSegment].text;
    const timeout = setTimeout(() => {
      if (currentCharIndex < currentText.length) {
        setDisplayedSegments((prev) => {
          const updated = [...prev];
          updated[currentSegment] = currentText.slice(0, currentCharIndex + 1);
          return updated;
        });
        setCurrentCharIndex(currentCharIndex + 1);
      } else {
        setCurrentSegment(currentSegment + 1);
        setCurrentCharIndex(0);
      }
    }, 50); 

    return () => clearTimeout(timeout);
  }, [currentSegment, currentCharIndex, segments]);

  return (
    <h2 className="text-4xl font-bold mb-8 font-mono">
      {segments.map((seg, index) => {
        const content = displayedSegments[index];
        return seg.element === "em" ? (
          <em key={index}>{content}</em>
        ) : (
          <span key={index}>{content}</span>
        );
      })}
    </h2>
  );
};
