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
      video: "https://drive.google.com/file/d/1l3qD9yekkSzJal_jDLvfz_Npq9S6SMOy/preview",
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
      video: "https://drive.google.com/file/d/1xVYKZxROkR9L89JHhJJeHupmN21WkJnP/preview",
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
      video: "https://drive.google.com/file/d/1t5NMigKODYhLqt0pBUt6D6KlJ2TkMNhn/preview",
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
      video: "https://drive.google.com/file/d/1ssP0VgRiTC_dcXQpty1zavA_CNjbxzhN/preview",
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
      image: "https://dummyimage.com/800x600/000/fff.png&text=Video Streaming Website(stilldeveloping)",
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
    {
      id: 6,
      title: "Gemini-Chatbot",
      description: "This project uses the Gemini API to create a chatbot capable of answering questions and generating code.",
      image: "/img/geminiChatBot.png",
      tags: ["NoCode", "AI", "API"],
      video: "https://drive.google.com/file/d/1ah-sLF0pcv-FSqC7_hgLn_ktjURprJqj/preview",
      longDescription: "This project is an interactive chatbot built using the Gemini API. It allows users to chat naturally, ask for explanations, get help with coding, and more. Users are prompted to enter their own API key to enable access. The chatbot supports both voice-to-text and text-to-voice interactions, providing a more accessible experience. While the bot can generate code, the formatting may not always be easy to read. More features such as better formatting, customization, and advanced voice interactions are planned for the future.",
      demo: "https://gemini-chat-bot-six.vercel.app/",
      features: [
        "Chat with AI: Ask questions and get intelligent responses using the Gemini API.",
        "Voice to Text: Speak to the chatbot and convert your voice into text input.",
        "Text to Voice: Listen to the chatbot's responses through text-to-speech.",
        "Code Generation: Ask for code solutions (note: response formatting may need improvement).",
        "API Key Input: Users can enter their own Gemini API key for secure access.",
        "Planned Features: More enhancements like better formatting, UI improvements, and more interactions will be added."
      ],
    },
    {
      id: 7,
      title: "Japanese Learning (Hein JLPT Master)",
      description: "A Japanese learning web app based on JLPT levels with flashcards, mock tests, and reference tools.",
      image: "/img/heinjlptmaster.png",
      tags: ["NoCode", "AI"],
      video: "https://drive.google.com/file/d/1-1e0Ipk5JU_to0ExXEPQC9Qd9PVhNWuq/preview",
      longDescription: "Hein JLPT Master is a web-based Japanese learning platform focused on JLPT levels from N5 to N3, with plans to expand to N2 and N1 in the future. The app features interactive flashcards for kanji and vocabulary, mock tests (模擬試験) to simulate the real JLPT exam, and comprehensive references for kanji, vocabulary, and grammar. It includes a powerful search function that allows users to look up words and grammar points easily. This is a beta version, and more data and features will be added. Currently, the app uses JavaScript-based data handling without any backend.",
      demo: "https://jlpt-app.vercel.app/",
      features: [
        "JLPT-Based Learning: Learn Japanese by JLPT levels starting from N5 to N3 (with future support for N2 and N1).",
        "Kanji & Vocabulary Flashcards: Practice using flashcards designed for memorizing JLPT-related words and kanji.",
        "Mock Tests: Take 模擬試験 (mogi shiken) to test your JLPT readiness.",
        "Grammar & Vocabulary Reference: Look up grammar points and vocabulary with detailed explanations.",
        "Kanji Reference: Get stroke order, readings, and meanings of kanji by JLPT level.",
        "Smart Search Function: Search for kanji, vocabulary, and grammar easily from a single search bar.",
        "Beta Version: This is an early version; more data and features (like audio, tracking progress, and backend support) will be added.",
        "JavaScript-Only: All content and data are handled purely using JavaScript, no backend required (yet)."
      ]
    },

    {
      id: 8,
      title: "HR Management (Mini Project)",
      description: "A simple PHP & MySQL-based HR management system to manage employees, handle leave, overtime, and calculate salary with sorting and search features.",
      image: "img/hrmanagement.png",
      tags: ["PHP", "MySQL"],
      video: "https://drive.google.com/file/d/1QCpUA8ejsAdjy0glf4FDYFCoRxZMxEsG/preview",
      longDescription: "This HR Management Mini Project is a lightweight and functional system developed using only core PHP and MySQL, without any external frameworks. It allows small organizations to efficiently manage employee data, including adding, editing, deleting records, and calculating payroll. The system also includes features for leave management and overtime tracking. Salary is calculated based on base pay and additional overtime hours. The application provides sorting, filtering, and search capabilities to simplify employee tracking and HR processes.",
      features: [
        "Add, Edit, Delete Employees: Easily manage employee records in the database.",
        "Leave Management: Record and manage employee leave periods.",
        "Overtime Tracking: Track overtime hours for each employee.",
        "Salary Calculation: Automatically calculate total salary including overtime pay.",
        "Sorting and Filtering: Sort employees by name, position, salary, or overtime.",
        "Search Functionality: Quickly find employees by name or other criteria.",
        "Responsive Table: Paginated view of employee records with dropdown filters.",
        "Pure PHP & MySQL: Built without any external frameworks for easy customization and understanding.",
        "User Authentication: Basic login system to restrict unauthorized access.",
        "Minimal UI: Focuses on functionality with clean and simple interface."
      ]
    },
    {
      id: 9,
      title: "Hein Manga (Manga Reading WebApp)",
      description: "A simple JavaScript-based manga reading web app that loads PDF manga chapters and displays them in a manga-style interface.",
      image: "img/heinManga.png",
      tags: ["NoCode", "AI"],
      video: "https://drive.google.com/file/d/1vee82uMcOYVm7kIr7aDPochuPLIbqAQX/preview",
      longDescription: "Hein Manga is a lightweight manga reading web application developed using JavaScript for the backend and a minimal frontend design. Chapters are uploaded in PDF format and automatically converted into manga-style pages for the reader to enjoy. The system focuses on smooth reading and chapter navigation. In the future, I plan to purchase Google Cloud storage and connect it to this web app, since the current free domain cannot handle too many uploaded files. Because of this, an online demo is not available at the moment.",
      features: [
        "Upload manga chapters in PDF format",
        "Automatic conversion to manga page display",
        "Read manga in web browser with page navigation",
        "Built using JavaScript backend logic",
        "Lightweight frontend with focus on reading experience",
        "Designed to be connected to cloud storage (future update)",
        "Simple and clean user interface"
      ]
    },
    {
      id: 10,
      title: "School Management System  (WebApp)",
      description: "A React & Node.js-based school management system with separate dashboards for students, teachers, and headteachers",
      image: "img/schoolManagement.png",
      tags: ["NoCode", "AI"],
      video: "https://drive.google.com/file/d/1HGNh9n5PzLhe_5Go6bxY3m_meW_tOZem/preview",
      longDescription: "This web application simulates a school management system with three distinct dashboards: Student, Teacher, and Headteacher. Students can view subjects, assignments, teacher details, and upcoming exams. Teachers manage their classes, review assignments, grade students, and track performance. The Headteacher oversees all data, edits/deletes student/teacher records, and monitors performance analytics. The current version uses simulated data (no real database) but is built with React (frontend) and Node.js (backend) for future scalability. Future updates will include a complaint system and real database integration.",
      demo: "https://school-management-ten-lime.vercel.app/",
      features: [
        "Three role-based dashboards: Student, Teacher, Headteacher",
        "Student Dashboard: Displays subjects, assignments, teacher details, timetable, and upcoming exams",
        "Teacher Dashboard: Views class students, reviews/grades assignments, checks performance analytics (by subject/month)",
        "Headteacher Dashboard: Manages all students/teachers, edits/deletes records, monitors school-wide performance",
        "Simulated data operations (no real database in current version)",
        "Assignment upload & review system (simulated)",
        "Timetable management for students and teachers",
        "Performance analytics (by class, subject, and month)",
        "Built with React (frontend) and Node.js (backend)",
        "Developed using v0.dev for rapid prototyping",
        "Only Avaiable for web view only for now future i will make the mobile view too",
        "Future plans: Real database integration, complaint system"

      ]
    },
    {
      "id": 11,
      "title": "Sakura Food Court (WebApp)",
      "description": "A React & Node.js-based food ordering system with ingredient customization and a dynamic PDF receipt.",
      "image": "img/sakuracourt.png",
      "tags": ["React", "Node.js", "NoCode", "AI"],
      "video": "https://drive.google.com/file/d/1GJDMxL7_Q5_qZ0znyf4EPfYoO87zTNMB/preview",
      "longDescription": "This web application is a fun, Japanese-themed food ordering system for the 'Sakura Food Court.' Users can browse the menu, customize their orders by selecting or removing ingredients, and see the price update dynamically in real-time. All selected items are added to a live receipt (cart), which the user can edit (change quantities, update customizations) or delete items from. Once the order is finalized, the user can download the complete receipt as a PDF. The app was rapidly prototyped using v0.dev and is built with React (frontend) and Node.js (backend) using simulated data (no real backend database yet).",
      "demo": "https://japanese-food-ordering-app-xgkc.vercel.app/",
      "features": [
        "Fun, Japanese-themed interactive UI",
        "Food ordering system with menu browsing",
        "Customize orders by selecting/deselecting ingredients",
        "Dynamic pricing that changes based on customizations",
        "Live receipt/cart system",
        "Ability to edit items in the receipt",
        "Ability to delete items from the receipt",
        "Download the final order receipt as a PDF",
        "Simulated data operations (no real database in current version)",
        "Built with React (frontend) and Node.js (backend)",
        "Developed using v0.dev for rapid prototyping",
        "Web-based application",
        "Future plans: Real database integration and user accounts"
      ]
    },
    {
      "id": 12,
      "title": "Hein-DataStructure (WebApp)",
      "description": "An interactive web app for visualizing data structures and algorithms like linked lists, sorting, and searching in real-time.",
      "image": "img/heindatastructure.png",
      "tags": ["React", "Node.js", "NoCode", "AI"],
      "video": "https://drive.google.com/file/d/1IcLrkGowe0k3edavrdavRLnM5sOwx8Nw/preview",
      "longDescription": "This web application, 'hein-datastructure,' is a live, interactive tool for understanding complex computer science topics. It was created based on the idea that seeing data structures and algorithms in action is the best way to learn them, inspired by preparations for the ITPC exam. Users can interact with live visualizations for Linked Lists, various Sorting Algorithms, and Searching & Traversal algorithms. The app allows users to see a 'live trace' of how these algorithms operate step-by-step. The UI was rapidly developed using v0.dev and is built with React to create a hands-on, visual learning experience.",
      "demo": "https://hein-datastructure.vercel.app/",
      "features": [
        "Live, interactive visualization of Linked Lists",
        "Step-by-step tracing of various Sorting Algorithms",
        "Real-time visualization of Searching & Traversal Algorithms",
        "Covers general-purpose Data Structures & Algorithms",
        "Designed as a visual study aid for technical exams (ITPC)",
        "Built with React for a dynamic, interactive UI",
        "UI prototyped and developed using v0.dev",
        "Fully web-based and accessible",
      ]
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
// function showProjectDetails(projectId) {
//   // Find project data
//   const project = window.projects.find((p) => p.id === projectId)
//   if (!project) return

//   // Update modal title and description
//   document.getElementById("projectModalLabel").textContent = project.title
//   document.getElementById("modalDescription").textContent = project.longDescription

//   // Get modal media container
//   const modalMedia = document.getElementById("modalMedia")
//   modalMedia.innerHTML = "" // Clear previous content

//   if (project.video) {
//     // If video exists, show video
//     // const video = document.createElement("video");
//     // video.src = project.video;
//     // video.controls = true;
//     // video.className = "img-fluid rounded-3 mb-4";
//     // video.controlsList = "nodownload";
//     // video.style.maxHeight = "70vh";
//     //modalMedia.appendChild(video);


//     const iframe = document.createElement("iframe");
//     iframe.src = project.video;
//     iframe.className = "w-100 rounded-3 mb-4";
//     iframe.style.height = "400px";
//     iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
//     iframe.allowFullscreen = true;
//     modalMedia.appendChild(iframe);

//   } else if (project.image) {
//     // Otherwise, show image
//     const img = document.createElement("img")
//     img.src = project.image
//     img.alt = project.title
//     img.className = "img-fluid rounded-3 mb-4"
//     img.style.maxHeight = "70vh"
//     modalMedia.appendChild(img)
//   }

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
//     demoBtn.onclick = () => window.open(project.demo, "_blank")
//     demoBtn.style.display = "inline-block"
//   } else {
//     demoBtn.style.display = "none"
//   }

//   // Show modal
//   const projectModal = new bootstrap.Modal(document.getElementById("projectModal"))
//   projectModal.show()
// }
// function showProjectDetails(projectId) {
//   const project = window.projects.find((p) => p.id === projectId);
//   if (!project) return;

//   document.getElementById("projectModalLabel").textContent = project.title;
//   document.getElementById("modalDescription").textContent = project.longDescription;

//   const modalMedia = document.getElementById("modalMedia");
//   modalMedia.innerHTML = "";

//   if (project.video) {
//     // Use iframe for embedded video
//     const iframe = document.createElement("iframe");
//     iframe.src = project.video;
//     iframe.className = "w-100 rounded-3 mb-4";
//     iframe.style.height = "400px";
//     iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
//     iframe.allowFullscreen = true;
//     modalMedia.appendChild(iframe);
//   } else if (project.image) {
//     const img = document.createElement("img");
//     img.src = project.image;
//     img.alt = project.title;
//     img.className = "img-fluid rounded-3 mb-4";
//     img.style.maxHeight = "70vh";
//     modalMedia.appendChild(img);
//   }

//   const featuresList = document.getElementById("modalFeatures");
//   featuresList.innerHTML = "";
//   project.features.forEach((feature) => {
//     const li = document.createElement("li");
//     li.textContent = feature;
//     featuresList.appendChild(li);
//   });

//   const githubBtn = document.getElementById("modalGithub");
//   const demoBtn = document.getElementById("modalDemo");

//   if (project.github) {
//     githubBtn.href = project.github;
//     githubBtn.style.display = "inline-block";
//   } else {
//     githubBtn.style.display = "none";
//   }

//   if (project.demo) {
//     demoBtn.href = project.demo;
//     demoBtn.onclick = () => window.open(project.demo, "_blank");
//     demoBtn.style.display = "inline-block";
//   } else {
//     demoBtn.style.display = "none";
//   }

//   const projectModal = new bootstrap.Modal(document.getElementById("projectModal"));
//   projectModal.show();
// }


let currentVideoIframe = null; // Store the active video iframe

function showProjectDetails(projectId) {
  const project = window.projects.find((p) => p.id === projectId);
  if (!project) return;

  // Reset previous video if any
  stopVideo();

  // Update modal content (title, description, etc.)
  document.getElementById("projectModalLabel").textContent = project.title;
  document.getElementById("modalDescription").textContent = project.longDescription;

  const modalMedia = document.getElementById("modalMedia");
  modalMedia.innerHTML = "";

  if (project.video) {
    const iframe = document.createElement("iframe");
    iframe.src = project.video;
    iframe.className = "w-100 rounded-3 mb-4";
    iframe.style.height = "400px";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    modalMedia.appendChild(iframe);

    // Store reference to the iframe
    currentVideoIframe = iframe;
  } else if (project.image) {
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;
    img.className = "img-fluid rounded-3 mb-4";
    img.style.maxHeight = "70vh";
    modalMedia.appendChild(img);
  }

  // Update features list
  const featuresList = document.getElementById("modalFeatures");
  featuresList.innerHTML = "";
  project.features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    featuresList.appendChild(li);
  });

  // Update GitHub & Demo buttons
  const githubBtn = document.getElementById("modalGithub");
  const demoBtn = document.getElementById("modalDemo");

  githubBtn.style.display = project.github ? "inline-block" : "none";
  if (project.github) githubBtn.href = project.github;

  demoBtn.style.display = project.demo ? "inline-block" : "none";
  if (project.demo) {
    demoBtn.onclick = () => window.open(project.demo, "_blank");
  }

  // Initialize Bootstrap modal
  const projectModalEl = document.getElementById("projectModal");
  const projectModal = new bootstrap.Modal(projectModalEl);

  // Listen for modal close event
  projectModalEl.addEventListener("hidden.bs.modal", stopVideo);

  // Show the modal
  projectModal.show();
}

// New function to stop the video
function stopVideo() {
  if (currentVideoIframe) {
    // Pause video by removing `src` (resets iframe)
    currentVideoIframe.src = "";
    currentVideoIframe = null; // Clear reference
  }
}
