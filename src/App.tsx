import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { personalInfo } from "@/data/portfolioData";
import ShootingStars from "@/components/ShootingStars";
import TwinklingStars from "@/components/TwinklingStars";
import WeatherCanvas from "@/components/WeatherCanvas";
import HomePage from "@/pages/HomePage";
import ProjectsPage from "@/pages/ProjectsPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import InterestsPage from "@/pages/InterestsPage";
import InterestPage from "@/pages/InterestPage";
import ContactPage from "@/pages/ContactPage";

const LAST_UPDATED = "February 25, 2026";

function App() {
  const [theme, setTheme] = useState<"dark" | "rain" | "snow" | "light">(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "rain" || stored === "snow" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeOrder: typeof theme[] = ["dark", "rain", "snow", "light"];
  const themeIcons: Record<typeof theme, React.ReactNode> = {
    dark: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
    ),
    rain: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="M491-200q12-1 20.5-9.5T520-230q0-14-9-22.5t-23-7.5q-41 3-87-22.5T343-375q-2-11-10.5-18t-19.5-7q-14 0-23 10.5t-6 24.5q17 91 80 130t127 35Zm-239.5 26Q160-268 160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80q-137 0-228.5-94ZM652-230.5Q720-301 720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160q104 0 172-70.5ZM480-480Z"/></svg>
    ),
    snow: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="M440-80v-166L310-118l-56-56 186-186v-80h-80L174-254l-56-56 128-130H80v-80h166L118-650l56-56 186 186h80v-80L254-786l56-56 130 128v-166h80v166l130-128 56 56-186 186v80h80l186-186 56 56-128 130h166v80H714l128 130-56 56-186-186h-80v80l186 186-56 56-130-128v166h-80Z"/></svg>
    ),
    light: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm98 382q-70-70-70-170t70-170q70-70 170-70t170 70q70 70 70 170t-70 170q-70 70-170 70t-170-70Zm283.5-56.5Q640-413 640-480t-46.5-113.5Q547-640 480-640t-113.5 46.5Q320-547 320-480t46.5 113.5Q413-320 480-320t113.5-46.5ZM480-480Z"/></svg>
    ),
  };

  const toggleTheme = () =>
    setTheme((t) => themeOrder[(themeOrder.indexOf(t) + 1) % themeOrder.length]);

  const navItems = [
    { to: "/", label: "home" },
    { to: "/projects", label: "projects" },
    { to: "/interests", label: "interests" },
    { to: "/blog", label: "blog" },
    { to: "/contact", label: "contact me" },
  ];

  return (
    <>
      <ShootingStars theme={theme} />
      <TwinklingStars theme={theme} />
      <WeatherCanvas theme={theme} />
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {themeIcons[theme]}
      </button>

      <div className="container">
        <header className="site-header">
          <h1 className="site-name">{personalInfo.name}</h1>
          <div className="social-links">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedIn
            </a>
          </div>
        </header>

        <nav>
          <div className="nav-links">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {label}
              </NavLink>
            ))}
          </div>
          <hr className="nav-divider" />
        </nav>

        <div className="content-area">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/interests" element={<InterestsPage />} />
            <Route path="/interests/:id" element={<InterestPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <div className="last-updated">Last updated {LAST_UPDATED}</div>
        </div>
      </div>
    </>
  );
}

export default App;
