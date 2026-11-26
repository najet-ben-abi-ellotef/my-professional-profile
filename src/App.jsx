
import "./App.css";

const skills = {
  "Programming Languages": [
    "Python", "R", "Java", "JavaScript", "PHP", "Dart", "SQL"
  ],

  "AI & Data Science": [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "NLP",
    "Generative AI",
    "LLMs",
    "Prompt Engineering",
    "Pandas",
    "NumPy",
    "Scikit-learn"
  ],

  "Frameworks & Development": [
    "React.js",
    "Angular",
    "Flutter",
    "FastAPI",
    "Flask",
    "Django",
    "Spring Boot",
    "Symfony"
  ],

  "Databases & DevOps": [
    "PostgreSQL",
    "MySQL",
    "Firebase",
    "Supabase",
    "Docker",
    "Git",
    "GitHub"
  ],

  "Big Data & Distributed Systems": [
    "Hadoop",
    "Apache Spark",
    "Kafka",
    "HDFS",
    "gRPC",
    "REST APIs",
    "Microservices"
  ]
};

const projects = [
  {
    title: "JobMatch AI",
    category: "Artificial Intelligence · Web Development",
    description:
      "An AI-powered recruitment platform designed to analyze CVs and match candidate profiles with job offers.",
    technologies: ["React", "FastAPI", "PostgreSQL", "LLMs", "Docker"]
  },
  {
    title: "Learning Disorders Detection",
    category: "Machine Learning · Explainable AI",
    description:
      "A machine learning project focused on the early prediction of learning disorders using behavioral and educational data.",
    technologies: ["Python", "Machine Learning", "Angular", "Flask"]
  },
  {
    title: "Smart CV Management Application",
    category: "Mobile Development · AI",
    description:
      "A mobile application for managing CVs and exploring intelligent recruitment features.",
    technologies: ["Flutter", "Firebase", "Supabase"]
  },
  {
    title: "Distributed Big Data Project",
    category: "Big Data · Distributed Systems",
    description:
      "A distributed data processing project using Hadoop and Spark across virtual machines.",
    technologies: ["Hadoop", "Spark", "HDFS"]
  },
  {
    title: "SOA & Microservices",
    category: "Software Architecture",
    description:
      "A project exploring service-oriented architecture and communication between distributed services.",
    technologies: ["Kafka", "gRPC", "REST"]
  },
  {
    title: "Medical Appointment Management",
    category: "Web Development",
    description:
      "A web application for managing medical appointments.",
    technologies: ["Django"]
  }
];

function SectionTitle({ number, title, subtitle }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="brand">
          NB<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>

        {/* HOME */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <span className="eyebrow">WELCOME TO MY PORTFOLIO</span>

            <h1>
              Hi, I'm <span>Najet Ben Abi Ellotef</span>
            </h1>

            <h2>Data Science & Artificial Intelligence</h2>

            <p>
              Computer Science Engineering student specializing in Data Science
and Artificial Intelligence, passionate about Machine Learning,
Deep Learning, Natural Language Processing (NLP), and Generative AI.
Driven by innovation, I enjoy transforming data into intelligent
solutions and developing AI-powered applications.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Explore My Projects
              </a>

              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/najet-ben-abi-ellotef-565372385/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/najet-ben-abi-ellotef"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="hero-decoration">
            <div className="profile-image-container">
              <img
                src="/images/profil.png"
                alt="Najet Ben Abi Ellotef"
                className="profile-image"
              />
            </div>

            <span className="floating-tag tag-one">
              Machine Learning
            </span>

            <span className="floating-tag tag-two">
              Data Science
            </span>

            <span className="floating-tag tag-three">
              Innovation
            </span>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about-section">
          <SectionTitle
            number="01"
            title="About Me"
            subtitle="Get to know me"
          />

          <div className="about-content">
            <div className="about-card">
              <span className="about-symbol">✦</span>
              <h3>Who am I?</h3>

              <p>
                  I am a Computer Science Engineering student at the
    Polytechnic School of Sousse, specializing in Data Science
    and Artificial Intelligence. I am passionate about
    Machine Learning, Deep Learning, Natural Language
    Processing (NLP), and Generative AI.
              </p>

              <p>
                Through my academic projects and practical experience,
    I have developed skills in data analysis, predictive
    modeling, intelligent application development, and
    software engineering. I enjoy exploring innovative
    technologies and building AI-driven solutions to solve
    real-world problems.
              </p>
            </div>

            <div className="about-details">
              <div>
                <span>Education</span>
                <strong>Computer Science Engineering</strong>
              </div>

              <div>
                <span>Specialization</span>
                <strong>Data Science & AI</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>Sousse, Tunisia</strong>
              </div>

              <div>
                <span>Interests</span>
                <strong>   Artificial Intelligence · Machine Learning · Deep Learning ·
    NLP · Generative AI · LLMs · Computer Vision · Data Analytics ·
    Predictive Modeling · Big Data · Distributed Systems ·
    Web & Mobile Development</strong>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills-section">
          <SectionTitle
            number="02"
            title="Technical Skills"
            subtitle="Technologies and tools I work with"
          />

          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <article className="skill-card" key={category}>
                <h3>{category}</h3>

                <div className="skill-tags">
                  {items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects-section">
          <SectionTitle
            number="03"
            title="Featured Projects"
            subtitle="Some of my academic and personal work"
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span>PROJECT 0{index + 1}</span>
                  <span className="project-star">✦</span>
                </div>

                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="skill-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

       
        
       
{/* EXPERIENCE & EDUCATION */}
<section id="experience" className="section experience-section">
  <SectionTitle
    number="04"
    title="Experience & Education"
    subtitle="My academic and professional journey"
  />

  <div className="timeline">

    {/* 2026 - itgate */}
    <article className="timeline-item">
      <span className="timeline-date">July – August 2026</span>
      <h3>Summer Internship · itgate</h3>
      <p>
        Development of JobMatch AI, an AI-powered recruitment
        platform for CV analysis and candidate-job matching.
      </p>
      <div className="skill-tags">
        {["React", "FastAPI", "PostgreSQL", "AI", "Docker"].map(item => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>

    {/* 2024 - Present - Engineering Degree */}
    <article className="timeline-item">
      <span className="timeline-date">2024 – Present</span>
      <h3>Polytechnic School of Sousse</h3>
      <p>
        Engineering Degree in Computer Science,
        specializing in Data Science and Artificial Intelligence.
      </p>
      <div className="skill-tags">
        {["Data Science", "Machine Learning", "Deep Learning", "NLP", "Generative AI"].map(item => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>

    {/* 2016 - Present - Private Tutor */}
    <article className="timeline-item">
      <span className="timeline-date">2016 – Present</span>
      <h3>Private Tutor · Mathematics, Science & Physics</h3>
      <p>
        Tutoring secondary school students. Developing teaching
        and communication skills while adapting teaching methods
        to students' individual needs.
      </p>
      <div className="skill-tags">
        {["Teaching", "Communication", "Mathematics", "Science", "Physics"].map(item => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>

    {/* 2016 - Easy-Constat */}
    <article className="timeline-item">
      <span className="timeline-date">2016</span>
      <h3>Final-Year Internship · Easy-Constat</h3>
      <p>
        Development of a digital accident reporting application
        using web and mobile technologies.
      </p>
      <div className="skill-tags">
        {["Java JEE", "Spring Boot", "AngularJS", "Ionic", "MySQL"].map(item => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>

    {/* 2015 - 2024 - New Age Travel */}
    <article className="timeline-item">
      <span className="timeline-date">2015 – 2024</span>
      <h3>Travel Agency Assistant · New Age Travel</h3>
      <p>
        Customer reservation management, travel arrangements,
        administrative organization, and customer relations.
        Development of organizational and communication skills.
      </p>
      <div className="skill-tags">
        {["Customer Service", "Reservation Management", "Travel Coordination", "Administration", "Communication"].map(item => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>

  </div>
</section>



        {/* CERTIFICATIONS */}
        <section
          id="certifications"
          className="section certifications-section"
        >
          <SectionTitle
            number="05"
            title="Certifications & Activities"
            subtitle="Learning, participation and social engagement"
          />

          <div className="certification-grid">

            {/* AI NIGHT 2026 - NEW */}
            <article className="cert-card">
              <span>2026</span>
              <h3>AI Night 2026</h3>
              <p>
                Certificate of Participation · AI Night 2026.
              </p>
            </article>

            <article className="cert-card">
              <span>2025 – 2026</span>
              <h3>University Social Project · PSC</h3>
              <p>
                Solidarity initiative supporting dialysis patients through
                fundraising and social activities.
              </p>
            </article>

            <article className="cert-card">
              <span>2023 – 2024</span>
              <h3>First Aid Certificate</h3>
              <p>First aid training and certification.</p>
            </article>

            <article className="cert-card">
              <span>2019 – 2020</span>
              <h3>Angular & React Training</h3>
              <p>Training in modern frontend development.</p>
            </article>

            <article className="cert-card">
              <span>2015</span>
              <h3>Computer Night</h3>
              <p>
                Certificate of Participation · Coding Moon / Microsoft.
              </p>
            </article>

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <SectionTitle
            number="06"
            title="Let's Connect"
            subtitle="Thank you for visiting my portfolio"
          />

          <div className="contact-card">
            <h3>Interested in my profile?</h3>

            <p>
              Feel free to explore my CVs or connect with me through
              my professional platforms.
            </p>

            <div className="cv-buttons">
              <a
                href="/cv/CV_Najet_FR.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Télécharger CV Français ↓
              </a>

              <a
                href="/cv/CV_Najet_EN.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                Download English CV ↓
              </a>
            </div>

            <a href="mailto:najet.benabiellotef@polytechnicien.tn">
              najet.benabiellotef@polytechnicien.tn
            </a>

            <div className="contact-socials">
              <a
                href="https://www.linkedin.com/in/najet-ben-abi-ellotef-565372385/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/najet-ben-abi-ellotef"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="main-footer">
        <a href="#home" className="brand">
          NB<span>.</span>
        </a>

        <p>
          Designed & developed by Najet Ben Abi Ellotef · 2026
        </p>
      </footer>

    </div>
  );
}

export default App;
