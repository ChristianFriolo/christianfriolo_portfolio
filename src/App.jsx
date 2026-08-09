import { useEffect, useRef } from "react";
import profileImage from "../asset/Friolo_Cover.png";

function App() {
  useEffect(() => {
    // add staggered reveal delays so elements appear with a nice rhythm
    document.querySelectorAll(".reveal").forEach((el, i) => {
      el.style.setProperty("--reveal-delay", `${i * 80}ms`);
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const heroImageRef = useRef(null);

  // subtle mouse parallax for hero image
  const handleHeroMouseMove = (e) => {
    const el = e.currentTarget;
    const img = heroImageRef.current;
    if (!img) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    img.style.transform = `translate(${x * 18}px, ${y * -14}px) scale(1.03)`;
  };

  const handleHeroLeave = (e) => {
    const img = heroImageRef.current;
    if (!img) return;
    img.style.transform = '';
  };

  return (
    <main className="app-shell">
      <div className="bg-orbs" aria-hidden="true">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
        <div className="orb orb4" />
        <div className="orb orb5" />
      </div>
      {/* ================= HEADER ================= */}

      <header className="site-header reveal">
        <div className="brand-mark">CF</div>

        <nav className="site-nav">
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Portfolio</a>
          <a href="#contact" className="nav-cta">Contact Me</a>
        </nav>
      </header>

      {/* ================= HERO ================= */}

      <section className="hero-split reveal">
        {/* Left Side */}

        <div className="hero-copy reveal">
          <div>
            <p className="eyebrow">HI, I AM</p>

            <h1>
              Christian
              <br />
              Friolo
            </h1>

            <p className="hero-subtitle">
              De La Salle University–Dasmariñas | Intelligence Systems major
            </p>
            <p className="hero-description">
              I build intelligent applications and polished data-driven tools that help teams make better decisions.
            </p>

            <div className="hero-actions">
              <button>View Projects</button>
              <button>Contact Me</button>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="hero-visual reveal" onMouseMove={handleHeroMouseMove} onMouseLeave={handleHeroLeave}>
          <div className="hero-image-frame">
            <img
              src={profileImage}
              alt="Christian Friolo"
              className="hero-image"
              ref={heroImageRef}
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section-block section-about reveal">
        <div className="section-copy">
          <p className="section-eyebrow">Summary</p>
          <h2>About Me</h2>
          <p>
            I’m Christian Friolo, a Computer Science graduate with a specialization in Intelligence Systems.
            I focus on turning complex data into practical, easy-to-use solutions through AI, machine learning,
            and data engineering.
          </p>
          <p>
            I enjoy building tools that bring clarity to data, support smarter decisions, and improve
            how teams work with information every day.
          </p>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="section-block section-skills reveal">
        <p className="section-eyebrow">Technical Skills</p>
        <h2>What I Work With</h2>
        <div className="skill-grid">
          <div className="skill-card reveal">
            <h3>Practical AI</h3>
            <p>
              NLP, sentiment analysis, phishing detection, and automated classification
              for smarter decision-making.
            </p>
          </div>
          <div className="skill-card reveal">
            <h3>Data Analyst</h3>
            <p>
              PySpark, Databricks, data cleaning, validation, transformation, and
              scalable analytics workflows.
            </p>
          </div>
          <div className="skill-card reveal">
            <h3>Collaborative Delivery</h3>
            <p>
              Cross-functional teamwork, product-ready system design, and reliable
              reporting and analytics support.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section-block section-portfolio reveal">
        <p className="section-eyebrow">Academic Projects</p>
        <h2>Project Highlights</h2>
        <div className="project-grid">
          <article className="project-card reveal">
            <h3>ImFriSi-Mail</h3>
            <p>
              Adaptive email management application with machine learning-based phishing detection,
              sentiment-based categorization, and automated email classification.
            </p>
          </article>
          <article className="project-card reveal">
            <h3>Road Sign Recognition</h3>
            <p>
              Computer vision model that detects and classifies road signs using image processing
              and deep learning techniques for improved prediction accuracy.
            </p>
          </article>
          <article className="project-card reveal">
            <h3>Internship Data Engineering</h3>
            <p>
              Cleaned, validated, and transformed large customer datasets with PySpark and Databricks,
              and helped build scalable data workflows for reporting and analytics.
            </p>
          </article>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="section-block section-contact reveal">
        <div className="contact-card reveal">
          <p className="section-eyebrow">Contact Me</p>
          <h2>Let’s build something together.</h2>
          <p>
            I’m open to new projects, collaborations, or freelance work. Send me
            a message and I’ll get back to you soon.
          </p>
          <a href="mailto:christianfriolo2003@gmail.com" className="contact-button">
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;