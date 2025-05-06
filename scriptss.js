// Fix the animateSkillBars function and Intersection Observer setup

// Animate skill bars on scroll
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress-bar, .language-progress-bar")

  skillBars.forEach((bar) => {
    const targetWidth = bar.getAttribute("data-width")
    bar.style.width = targetWidth
  })
}

// Intersection Observer for skill bars
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(animateSkillBars, 300)
      }
    })
  },
  { threshold: 0.1 },
)

// Wait for DOM to be fully loaded before setting up observers
document.addEventListener("DOMContentLoaded", () => {

  // Navbar scroll effect
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Close mobile menu when clicking a nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });

  // Highlight active section in navbar
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= (sectionTop - 300)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });


  //to close the vd when the modal got close
  const projectModalElement = document.getElementById("projectModal")
  projectModalElement.addEventListener("hidden.bs.modal", () => {
    const video = document.querySelector("#modalMedia video")
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  })


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
      level: 60,
      icon: "fa-globe",
      bgColor: "rgba(59, 130, 246, 0.2)",
      iconColor: "#3b82f6",
    },
    {
      name: "Backend Development",
      level: 90,
      icon: "fa-server",
      bgColor: "rgba(16, 185, 129, 0.2)",
      iconColor: "#10b981",
    },
    {
      name: "Database Management",
      level: 80,
      icon: "fa-database",
      bgColor: "rgba(249, 115, 22, 0.2)",
      iconColor: "#f97316",
    },
    {
      name: "UI/UX Design",
      level: 75,
      icon: "fa-pen-nib",
      bgColor: "rgba(147, 51, 234, 0.2)",
      iconColor: "#9333ea",
    },
    {
      name: "Frameworks",
      level: 90,
      icon: "fas fa-cubes", // Represents modular framework components
      bgColor: "rgba(59, 130, 246, 0.2)",
      iconColor: "#3b82f6",
    },
  ]

  // Language skills data
  const languageSkills = [
    // PHP Ecosystem
    { name: "PHP", level: 95, color: "#777BB4" }, // Official PHP blue-purple
    { name: "Laravel", level: 90, color: "#FF2D20" }, // Laravel red
    { name: "SQL", level: 80, color: "#336791" }, // Database blue
    // Markup/Styling
    { name: "HTML/CSS", level: 90, color: "#E34F26" },
    // Java Ecosystem
    { name: "Java/J2SE/J2EE", level: 85, color: "#007396" }, // Java blue
    // Web Development
    { name: "JavaScript", level: 75, color: "#F7DF1E" },

    { name: "Node.js", level: 72, color: "#8CC84B" }, // Green color for Node
  ]

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Mini Cinema",
      description: "A Mini Cinema Online Booking With API",
      image: "/img/minicinema.png",
      video: "/vd/minicinema.mp4",
      tags: ["Laravel", "MYSQL", "PHP", "Bootstrap", "CSS", "Node.js", "API", "JavaScript"],
      longDescription:
        "The movie booking system requires users to first login before they can browse and book films, with three user tiers offering different benefits - Normal (no discounts), VIP (30+ tickets for 10% off), and VVIP (50+ tickets for 30% off). The homepage displays movies in three categories (Today, Tomorrow, In 3 Days), but bookings are only available for future showings (Tomorrow onward) to simplify scheduling. After selecting a movie, users choose seats from limited auditoriums (A-1 with 20 seats or A-2 with 30 seats), with a toggle system for multiple seat selection and red indicators showing unavailable seats. The checkout process displays selected seats, calculates the discounted price (if applicable), and offers payment scanning options before generating a confirmation with a downloadable PDF/QR ticket for cinema entry - all transactions are recorded in the user's purchase history for easy reference.",
      features: [
        "Tiered membership system with discounts",
        "Future-only booking window",
        "Simplified seat selection interface",
        "Visual seat availability (red = taken)",
        "QR-based ticket verification",
        "Transaction history tracking",
        "Mobile-friendly ticket options (PDF/SS)",
      ],
    },
    {
      id: 2,
      title: " Book Lovers’ Website",
      description: "Ideal for: Book clubs, libraries, or anyone who wants to catalog and share books online!",
      image: "/img/booklover.png",
      video: "/vd/booklover.mp4",
      tags: ["Laravel", "MYSQL", "PHP", "Bootstrap", "CSS", "Node.js", "JavaScript"],
      //github: "https://github.com",
      //demo: "https://example.com",
      longDescription:
        "This is a book discovery and management platform with two key roles",
      features: [
        "🔹For Readers (Regular Users)",
        " Browse Books – Explore books by category or search by title.",
        " Save Favorites – Bookmark books to read later.",
        " Leave Reviews – Share comments on books you’ve read.",
        " Multilingual Support – Switch between English and Myanmar descriptions.",
        " Edit Profile–Update your personal info (name, email, address).",
        "🔹For Librarians/Admins",
        "Manage Books – Add, edit, or remove books (with cover images and descriptions).",
        'Organize Categories – Create genres like "Sci-Fi" or "History."',
        " Admin Dashboard – View all books, user comments, and update your admin profile.",
      ],
    },
    {
      id: 3,
      title: "Online store system",
      description: "This system is perfect for small businesses wanting to sell products online with basic inventory tracking and multilingual support!",
      image: "/img/onlineshopping.png",
      tags: ["Laravel", "MYSQL", "PHP", "Bootstrap", "CSS", "Node.js", "JavaScript"],
      video: "/vd/onlineshopping.mp4",
      longDescription: "This website is an **e-commerce platform** that allows businesses to sell products online with inventory management and multilingual support. For **customers**, it functions like a digital storefront where they can browse items by category, search for specific products, view detailed descriptions in English or Myanmar, add items to their cart, and complete purchases. Customers can also leave comments/reviews and manage their profile information. For **store administrators**, the system provides tools to add/edit products (including photos and pricing), organize items into categories, track inventory levels (which automatically update when purchases are made), view all customer orders, and manage user accounts. The platform supports both English and Myanmar languages, separates regular and sale items, maintains order histories, and prevents overselling by tracking product quantities in real-time. It's designed as a complete solution for small to medium businesses looking to establish an online sales presence with basic inventory control.",
      features: [
        " Customers can browse products, place orders, and leave reviews",
        "Admins can manage products, categories, and user accounts",
        "Works in both English and Myanmar languages",
        'Shows regular and "on sale" items separately',
        "Tracks product quantities (prevents overselling",
        "Order history for customers",
        'Customer searches for "backpack"',
        "Views backpack details (price, description, photos)",
        "Adds 2 backpacks to cart with their address",
        "System reduces available quantity by 2",
        "Customer can see all past orders",
      ],
    },

    {
      id: 4,
      title: " Wallpaper website management system ",
      description: " This project is ideal for wallpaper-sharing websites, digital art galleries, or theme-based wallpaper hubs.",
      image: "/img/wallpaperwebsite.png",
      tags: ["Laravel", "MYSQL", "PHP", "Bootstrap", "CSS", "Node.js", "JavaScript"],
      video: "/vd/wallpaperwebsite.mp4",
      longDescription: 'This project is a wallpaper gallery and management system built with Laravel, designed to provide users with a seamless way to browse and download high-quality wallpapers while giving administrators full control over content management. For regular users, the platform offers an intuitive interface where they can explore wallpapers organized by categories, search for specific designs, filter by wallpaper type, and view detailed pages with multiple resolution options (480p, 720p, and 1080p) for downloads. The system also suggests related wallpapers to enhance discovery.',
      features: [
        " Browse Wallpapers: View a collection of wallpapers sorted by categories.",
        "Search Functionality: Find wallpapers by name.",
        " Filter by Category: Explore wallpapers under specific types (e.g., Nature, Abstract, etc.).",
        "Wallpaper Details: See high-quality previews and download options in multiple resolutions (480p, 720p, 1080p).",
        "Related Suggestions: Get recommendations for similar wallpapers.",
        " User Accounts: Register/login to access personalized features (if expanded in the future).",
        " Upload Wallpapers: Add new wallpapers with different resolutions.",
        'Manage Categories: Create and organize wallpaper types (e.g., "Animals," "Landscapes").',
        "Edit/Delete Wallpapers: Update details or remove outdated wallpapers.",
        "Search & Filter: Quickly find and manage wallpapers in the database."
      ],
    },
    {
      id: 5,
      title: "Movie Streaming Website",
      description: " This project is ideal for streaming Movie On Website",
      image:"https://dummyimage.com/800x600/000/fff.png&text=Video Streaming Website(stilldeveloping)",
      tags: ["Laravel", "MYSQL", "PHP", "Bootstrap", "CSS", "Node.js", "JavaScript"],
      //video: "/vd/wallpaperwebsite.mp4",
      //longDescription: 'This project is a wallpaper gallery and management system built with Laravel, designed to provide users with a seamless way to browse and download high-quality wallpapers while giving administrators full control over content management. For regular users, the platform offers an intuitive interface where they can explore wallpapers organized by categories, search for specific designs, filter by wallpaper type, and view detailed pages with multiple resolution options (480p, 720p, and 1080p) for downloads. The system also suggests related wallpapers to enhance discovery.',
      // features: [
      //   " Browse Wallpapers: View a collection of wallpapers sorted by categories.",
      //   "Search Functionality: Find wallpapers by name.",
      //   " Filter by Category: Explore wallpapers under specific types (e.g., Nature, Abstract, etc.).",
      //   "Wallpaper Details: See high-quality previews and download options in multiple resolutions (480p, 720p, 1080p).",
      //   "Related Suggestions: Get recommendations for similar wallpapers.",
      //   " User Accounts: Register/login to access personalized features (if expanded in the future).",
      //   " Upload Wallpapers: Add new wallpapers with different resolutions.",
      //   'Manage Categories: Create and organize wallpaper types (e.g., "Animals," "Landscapes").',
      //   "Edit/Delete Wallpapers: Update details or remove outdated wallpapers.",
      //   "Search & Filter: Quickly find and manage wallpapers in the database."
      // ],
      
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
            <div class="mt-2 text-end small text-white">${skill.level}%</div>
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
            <span class="text-white">${lang.level}%</span>
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
                  ${project.github
        ? `<button class="project-action-btn" data-bs-toggle="tooltip" title="View Code" onclick="window.open('${project.github}', '_blank')">
                    <i class="fab fa-github"></i>
                  </button>`
        : ""
      }
                  ${project.demo
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
  if (contactForm) {
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
  }

  // Observe the skills section to trigger animation
  const skillsSection = document.getElementById("skills")
  if (skillsSection) {
    observer.observe(skillsSection)
  }

  // Make projects data available globally
  window.projects = projects
})

// Function to show project details in modal
// function showProjectDetails(projectId) {
//   // Find project data
//   const project = window.projects.find((p) => p.id === projectId)
//   if (!project) return

//   // Update modal content
//   document.getElementById("projectModalLabel").textContent = project.title
//   document.getElementById("modalImage").src = project.image
//   document.getElementById("modalDescription").textContent = project.longDescription

//   // Update features list
//   const featuresList = document.getElementById("modalFeatures")
//   featuresList.innerHTML = ""
//   project.features.forEach((feature) => {
//     const li = document.createElement("li")
//     li.textContent = feature
//     featuresList.appendChild(li)
//   })

//   // Update buttons
//   const githubBtn = document.getElementById("modalGithub")
//   const demoBtn = document.getElementById("modalDemo")

//   if (project.github) {
//     githubBtn.href = project.github
//     githubBtn.style.display = "inline-block"
//   } else {
//     githubBtn.style.display = "none"
//   }

//   if (project.demo) {
//     demoBtn.href = project.demo
//     demoBtn.style.display = "inline-block"
//   } else {
//     demoBtn.style.display = "none"
//   }

//   // Show modal
//   const projectModal = new bootstrap.Modal(document.getElementById("projectModal"))
//   projectModal.show()
// }
function showProjectDetails(projectId) {
  // Find project data
  const project = window.projects.find((p) => p.id === projectId)
  if (!project) return

  // Update modal title and description
  document.getElementById("projectModalLabel").textContent = project.title
  document.getElementById("modalDescription").textContent = project.longDescription

  // Get modal media container
  const modalMedia = document.getElementById("modalMedia")
  modalMedia.innerHTML = "" // Clear previous content

  if (project.video) {
    // If video exists, show video
    const video = document.createElement("video");
    video.src = project.video;
    video.controls = true;
    video.className = "img-fluid rounded-3 mb-4";
    video.controlsList = "nodownload";
    video.style.maxHeight = "70vh";

    modalMedia.appendChild(video);
  } else if (project.image) {
    // Otherwise, show image
    const img = document.createElement("img")
    img.src = project.image
    img.alt = project.title
    img.className = "img-fluid rounded-3 mb-4"
    img.style.maxHeight = "70vh"
    modalMedia.appendChild(img)
  }

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
