document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
  })

  // Set current year in footer
  document.getElementById("currentYear").textContent = new Date().getFullYear()

  // Hero section parallax effect
  const hero = document.getElementById("hero")
  const heroBg = document.querySelector(".hero-bg")

  document.addEventListener("mousemove", (e) => {
    if (!hero) return

    const { clientX, clientY } = e
    const { width, height, left, top } = hero.getBoundingClientRect()

    const x = (clientX - left) / width - 0.5
    const y = (clientY - top) / height - 0.5

    heroBg.style.transform = `translate(${x * 20}px, ${y * 20}px)`
  })

  // Back to top button
  const backToTopBtn = document.getElementById("backToTop")
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })

  // Technical skills data
  const technicalSkills = [
    {
      name: "Frontend Development",
      level: 90,
      icon: "fa-globe",
      color: "from-blue-500 to-cyan-400",
      bgColor: "rgba(59, 130, 246, 0.2)",
      iconColor: "#3b82f6",
    },
    {
      name: "Backend Development",
      level: 85,
      icon: "fa-server",
      color: "from-green-500 to-emerald-400",
      bgColor: "rgba(16, 185, 129, 0.2)",
      iconColor: "#10b981",
    },
    {
      name: "Database Management",
      level: 80,
      icon: "fa-database",
      color: "from-orange-500 to-amber-400",
      bgColor: "rgba(249, 115, 22, 0.2)",
      iconColor: "#f97316",
    },
    {
      name: "UI/UX Design",
      level: 75,
      icon: "fa-pen-nib",
      color: "from-purple-500 to-violet-400",
      bgColor: "rgba(147, 51, 234, 0.2)",
      iconColor: "#9333ea",
    },
    {
      name: "DevOps",
      level: 70,
      icon: "fa-terminal",
      color: "from-red-500 to-rose-400",
      bgColor: "rgba(239, 68, 68, 0.2)",
      iconColor: "#ef4444",
    },
    {
      name: "Mobile Development",
      level: 65,
      icon: "fa-mobile-alt",
      color: "from-pink-500 to-fuchsia-400",
      bgColor: "rgba(236, 72, 153, 0.2)",
      iconColor: "#ec4899",
    },
    {
      name: "API Development",
      level: 85,
      icon: "fa-code",
      color: "from-indigo-500 to-blue-400",
      bgColor: "rgba(99, 102, 241, 0.2)",
      iconColor: "#6366f1",
    },
    {
      name: "Architecture",
      level: 80,
      icon: "fa-layer-group",
      color: "from-teal-500 to-cyan-400",
      bgColor: "rgba(20, 184, 166, 0.2)",
      iconColor: "#14b8a6",
    },
  ]

  // Language skills data
  const languageSkills = [
    { name: "JavaScript", level: 95, color: "#F7DF1E" },
    { name: "TypeScript", level: 90, color: "#3178C6" },
    { name: "Python", level: 85, color: "#3776AB" },
    { name: "HTML/CSS", level: 90, color: "#E34F26" },
    { name: "React", level: 95, color: "#61DAFB" },
    { name: "Node.js", level: 90, color: "#339933" },
    { name: "SQL", level: 80, color: "#4479A1" },
    { name: "GraphQL", level: 75, color: "#E10098" },
  ]

  // Projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with product management, cart, and checkout.",
      image: "https://via.placeholder.com/800x600",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
      longDescription:
        "A comprehensive e-commerce solution built with the MERN stack. Features include product catalog, user authentication, shopping cart, payment processing with Stripe, and order management.",
      features: [
        "User authentication and profiles",
        "Product search and filtering",
        "Shopping cart and wishlist",
        "Secure checkout with Stripe",
        "Order tracking and history",
        "Admin dashboard for inventory management",
      ],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A Kanban-style task management application for teams and individuals.",
      image: "https://via.placeholder.com/800x600",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com",
      longDescription:
        "A productivity tool that helps teams organize and prioritize their projects and tasks. Built with React and Firebase for real-time updates across all users.",
      features: [
        "Drag-and-drop task management",
        "Real-time collaboration",
        "Task assignments and due dates",
        "File attachments and comments",
        "Progress tracking and reporting",
        "Mobile-responsive design",
      ],
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media performance tracking.",
      image: "https://via.placeholder.com/800x600",
      tags: ["Next.js", "TypeScript", "Chart.js", "API"],
      github: "https://github.com",
      longDescription:
        "A comprehensive dashboard that aggregates data from multiple social media platforms to provide insights on engagement, reach, and audience growth.",
      features: [
        "Integration with multiple social platforms",
        "Real-time data visualization",
        "Custom date range reporting",
        "Engagement metrics analysis",
        "Audience demographics",
        "Export reports as PDF or CSV",
      ],
    },
    {
      id: 4,
      title: "Weather Application",
      description: "Real-time weather forecasting app with location detection.",
      image: "https://via.placeholder.com/800x600",
      tags: ["JavaScript", "API", "CSS"],
      demo: "https://example.com",
      longDescription:
        "A weather application that provides current conditions and forecasts for any location. Uses geolocation and weather APIs to deliver accurate, up-to-date information.",
      features: [
        "Current weather conditions",
        "5-day forecast",
        "Location detection",
        "Search for any city",
        "Weather maps and radar",
        "Severe weather alerts",
      ],
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Mobile-first application for tracking workouts and nutrition.",
      image: "https://via.placeholder.com/800x600",
      tags: ["React Native", "Node.js", "GraphQL"],
      github: "https://github.com",
      demo: "https://example.com",
      longDescription:
        "A comprehensive fitness application that allows users to track workouts, nutrition, and progress. Includes custom workout plans and nutritional guidance.",
      features: [
        "Workout tracking and planning",
        "Nutrition diary and calorie counting",
        "Progress photos and measurements",
        "Custom workout plans",
        "Exercise library with demonstrations",
        "Goal setting and achievement tracking",
      ],
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Personal portfolio website with dark theme and animations.",
      image: "https://via.placeholder.com/800x600",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com",
      demo: "https://example.com",
      longDescription:
        "A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features smooth animations, dark theme, and showcases projects and skills.",
      features: [
        "Responsive design for all devices",
        "Smooth page transitions and animations",
        "Dark theme with rich styling",
        "Project showcase with filtering",
        "Skills visualization",
        "Contact form with validation",
      ],
    },
  ]

  // Populate technical skills
  const technicalSkillsContainer = document.getElementById("technical-skills")
  technicalSkills.forEach((skill) => {
    const skillCard = document.createElement("div")
    skillCard.className = "col-md-6"
    skillCard.setAttribute("data-aos", "fade-up")

    skillCard.innerHTML = `
      <div class="skill-card">
        <div class="d-flex align-items-center mb-3">
          <div class="skill-icon" style="background-color: ${skill.bgColor}">
            <i class="fas ${skill.icon}" style="color: ${skill.iconColor}"></i>
          </div>
          <h4 class="fs-6 fw-medium text-white mb-0">${skill.name}</h4>
        </div>
        <div class="skill-progress">
          <div class="skill-progress-bar" style="background: linear-gradient(to right, ${skill.iconColor}, ${skill.iconColor}aa); width: 0%;" data-width="${skill.level}%"></div>
        </div>
        <div class="mt-2 text-end small text-muted">${skill.level}%</div>
      </div>
    `

    technicalSkillsContainer.appendChild(skillCard)
  })

  // Populate language skills
  const languageSkillsContainer = document.getElementById("language-skills")
  languageSkills.forEach((lang) => {
    const langSkill = document.createElement("div")
    langSkill.className = "language-skill"
    langSkill.setAttribute("data-aos", "fade-up")

    langSkill.innerHTML = `
      <div class="d-flex justify-content-between">
        <span class="fw-medium text-white">${lang.name}</span>
        <span class="text-muted">${lang.level}%</span>
      </div>
      <div class="language-progress">
        <div class="language-progress-bar" style="background-color: ${lang.color}; width: 0%;" data-width="${lang.level}%"></div>
      </div>
    `

    languageSkillsContainer.appendChild(langSkill)
  })

  // Populate projects
  const projectsContainer = document.getElementById("projects-container")
  projects.forEach((project) => {
    const projectCard = document.createElement("div")
    projectCard.className = "col-md-6 col-lg-4 project-item"
    projectCard.setAttribute("data-aos", "fade-up")
    project.tags.forEach((tag) => {
      projectCard.setAttribute(`data-${tag.toLowerCase()}`, true)
    })

    projectCard.innerHTML = `
      <div class="project-card h-100">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}" class="img-fluid">
          <div class="project-overlay">
            <div class="project-actions">
              ${
                project.github
                  ? `<button class="project-action-btn" data-bs-toggle="tooltip" title="View Code" onclick="window.open('${project.github}', '_blank')">
                <i class="fab fa-github"></i>
              </button>`
                  : ""
              }
              ${
                project.demo
                  ? `<button class="project-action-btn" data-bs-toggle="tooltip" title="Live Demo" onclick="window.open('${project.demo}', '_blank')">
                <i class="fas fa-external-link-alt"></i>
              </button>`
                  : ""
              }
              <button class="project-action-btn" data-bs-toggle="tooltip" title="Details" onclick="showProjectDetails(${project.id})">
                <i class="fas fa-expand"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="project-content">
          <h3 class="fs-5 fw-bold text-white mb-2">${project.title}</h3>
          <p class="text-light-gray mb-3">${project.description}</p>
          <div>
            ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
          </div>
        </div>
      </div>
    `

    projectsContainer.appendChild(projectCard)
  })

  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))

  // Project filtering
  const filterButtons = document.querySelectorAll(".btn-filter")
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterValue = button.getAttribute("data-filter")

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")

      // Filter projects
      const projectItems = document.querySelectorAll(".project-item")
      projectItems.forEach((item) => {
        if (filterValue === "all") {
          item.style.display = "block"
        } else {
          if (item.hasAttribute(`data-${filterValue.toLowerCase()}`)) {
            item.style.display = "block"
          } else {
            item.style.display = "none"
          }
        }
      })
    })
  })

  // Contact form submission
  const contactForm = document.getElementById("contactForm")
  const submitBtn = document.getElementById("submitBtn")
  const toast = new bootstrap.Toast(document.getElementById("toast"))

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Disable submit button and show loading state
    submitBtn.disabled = true
    submitBtn.innerHTML =
      '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending...'

    // Simulate form submission with timeout
    setTimeout(() => {
      // Reset form
      contactForm.reset()

      // Reset button
      submitBtn.disabled = false
      submitBtn.innerHTML = "Send Message"

      // Show success toast
      toast.show()
    }, 1500)
  })

  // Animate skill bars on scroll
  function animateSkillBars() {
    const skillBars = document.querySelectorAll(".skill-progress-bar, .language-progress-bar")

    skillBars.forEach((bar) => {
      const targetWidth = bar.getAttribute("data-width")
      bar.style.width = targetWidth
    })
  }

  // Intersection Observer for skill bars
  const skillSections = document.querySelectorAll("#skills")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(animateSkillBars, 300)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  skillSections.forEach((section) => {
    observer.observe(section)
  })
})

// Function to show project details in modal
function showProjectDetails(projectId) {
  // Find project data
  const project = window.projects.find((p) => p.id === projectId)
  if (!project) return

  // Update modal content
  document.getElementById("projectModalLabel").textContent = project.title
  document.getElementById("modalImage").src = project.image
  document.getElementById("modalDescription").textContent = project.longDescription

  // Update features list
  const featuresList = document.getElementById("modalFeatures")
  featuresList.innerHTML = ""
  project.features.forEach((feature) => {
    const li = document.createElement("li")
    li.textContent = feature
    featuresList.appendChild(li)
  })

  // Update buttons
  const githubBtn = document.getElementById("modalGithub")
  const demoBtn = document.getElementById("modalDemo")

  if (project.github) {
    githubBtn.href = project.github
    githubBtn.style.display = "inline-block"
  } else {
    githubBtn.style.display = "none"
  }

  if (project.demo) {
    demoBtn.href = project.demo
    demoBtn.style.display = "inline-block"
  } else {
    demoBtn.style.display = "none"
  }

  // Show modal
  const projectModal = new bootstrap.Modal(document.getElementById("projectModal"))
  projectModal.show()
}

// Make projects data available globally
window.projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with product management, cart, and checkout.",
    image: "https://via.placeholder.com/800x600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
    longDescription:
      "A comprehensive e-commerce solution built with the MERN stack. Features include product catalog, user authentication, shopping cart, payment processing with Stripe, and order management.",
    features: [
      "User authentication and profiles",
      "Product search and filtering",
      "Shopping cart and wishlist",
      "Secure checkout with Stripe",
      "Order tracking and history",
      "Admin dashboard for inventory management",
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A Kanban-style task management application for teams and individuals.",
    image: "https://via.placeholder.com/800x600",
    tags: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    longDescription:
      "A productivity tool that helps teams organize and prioritize their projects and tasks. Built with React and Firebase for real-time updates across all users.",
    features: [
      "Drag-and-drop task management",
      "Real-time collaboration",
      "Task assignments and due dates",
      "File attachments and comments",
      "Progress tracking and reporting",
      "Mobile-responsive design",
    ],
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media performance tracking.",
    image: "https://via.placeholder.com/800x600",
    tags: ["Next.js", "TypeScript", "Chart.js", "API"],
    github: "https://github.com",
    longDescription:
      "A comprehensive dashboard that aggregates data from multiple social media platforms to provide insights on engagement, reach, and audience growth.",
    features: [
      "Integration with multiple social platforms",
      "Real-time data visualization",
      "Custom date range reporting",
      "Engagement metrics analysis",
      "Audience demographics",
      "Export reports as PDF or CSV",
    ],
  },
  {
    id: 4,
    title: "Weather Application",
    description: "Real-time weather forecasting app with location detection.",
    image: "https://via.placeholder.com/800x600",
    tags: ["JavaScript", "API", "CSS"],
    demo: "https://example.com",
    longDescription:
      "A weather application that provides current conditions and forecasts for any location. Uses geolocation and weather APIs to deliver accurate, up-to-date information.",
    features: [
      "Current weather conditions",
      "5-day forecast",
      "Location detection",
      "Search for any city",
      "Weather maps and radar",
      "Severe weather alerts",
    ],
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "Mobile-first application for tracking workouts and nutrition.",
    image: "https://via.placeholder.com/800x600",
    tags: ["React Native", "Node.js", "GraphQL"],
    github: "https://github.com",
    demo: "https://example.com",
    longDescription:
      "A comprehensive fitness application that allows users to track workouts, nutrition, and progress. Includes custom workout plans and nutritional guidance.",
    features: [
      "Workout tracking and planning",
      "Nutrition diary and calorie counting",
      "Progress photos and measurements",
      "Custom workout plans",
      "Exercise library with demonstrations",
      "Goal setting and achievement tracking",
    ],
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Personal portfolio website with dark theme and animations.",
    image: "https://via.placeholder.com/800x600",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com",
    demo: "https://example.com",
    longDescription:
      "A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features smooth animations, dark theme, and showcases projects and skills.",
    features: [
      "Responsive design for all devices",
      "Smooth page transitions and animations",
      "Dark theme with rich styling",
      "Project showcase with filtering",
      "Skills visualization",
      "Contact form with validation",
    ],
  },
]
