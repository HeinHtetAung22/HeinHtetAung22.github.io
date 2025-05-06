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

    const projects = [
        {
            id: 1,
            title: "ミニシネマ",
            description: "APIを使ったミニオンライン映画予約システム",
            image: "/img/minicinema.png",
            video: "/vd/minicinema.mp4",
            tags: ["Laravel", "MYSQL", "PHP", "Bootstrap", "CSS", "Node.js", "API", "JavaScript"],
            longDescription:
                "この映画予約システムでは、ユーザーは映画を閲覧・予約する前にログインする必要があります。3つの会員ランク（通常、VIP、VVIP）があり、それぞれに異なる割引特典があります。ホームページでは映画が「本日」「明日」「3日後」に分類されて表示されますが、予約は「明日」以降のみ可能で、スケジュール管理が簡単になります。ユーザーは映画を選択した後、座席を選択できます（A-1は20席、A-2は30席）。複数の座席選択が可能で、赤い色で既に埋まっている席が表示されます。チェックアウト時には選択された座席が表示され、該当する場合は割引価格が計算されます。支払い方法を選択後、PDFまたはQRコード付きのチケットが生成され、ユーザーはそれを使って入場できます。すべての取引は購入履歴に記録されます。",
            features: [
                "割引付きのランク会員制度",
                "将来の予約のみ可能",
                "簡単な座席選択インターフェース",
                "視覚的な座席の空き状況（赤 = 使用不可）",
                "QRコードによるチケット認証",
                "取引履歴の追跡",
                "PDFまたはスクリーンショットでのモバイルチケット対応",
            ],
        },
        {
            id: 2,
            title: "読書愛好家向けウェブサイト",
            description: "読書クラブ、図書館、本を共有したい人に最適なプラットフォーム！",
            image: "/img/booklover.png",
            video: "/vd/booklover.mp4",
            tags: ["Laravel", "MYSQL", "PHP", "Bootstrap", "CSS", "Node.js", "JavaScript"],
            longDescription:
                "このプラットフォームには2つの主要な役割があります。",
            features: [
                "🔹読者（一般ユーザー）向け",
                " 本を閲覧 – カテゴリ別やタイトル検索で本を探せます。",
                " お気に入り登録 – 後で読むために本を保存可能。",
                " レビュー投稿 – 読んだ本の感想を共有可能。",
                " 多言語対応 – 英語とミャンマー語の切り替えが可能。",
                " プロフィール編集 – 名前、メール、住所の更新。",
                "🔹管理者（図書館員）向け",
                " 本の管理 – 本の追加、編集、削除が可能（表紙画像や説明も含む）。",
                " カテゴリ管理 – 「SF」や「歴史」などのジャンル作成。",
                " 管理者用ダッシュボード – すべての本、ユーザーコメントの閲覧、自身のプロフィール編集。",
            ],
        },
        {
            id: 3,
            title: "オンラインストアシステム",
            description: "小規模ビジネス向けの基本的な在庫管理機能付きオンライン販売システム！",
            image: "/img/onlineshopping.png",
            tags: ["Laravel", "MYSQL", "PHP", "Bootstrap", "CSS", "Node.js", "JavaScript"],
            video: "/vd/onlineshopping.mp4",
            longDescription: "このウェブサイトは、在庫管理と多言語サポートを備えた**eコマースプラットフォーム**です。**顧客**向けには、商品をカテゴリごとに閲覧したり、特定の商品を検索したり、英語またはミャンマー語で詳細を確認したり、カートに追加して購入できます。コメント・レビューの投稿、プロフィールの編集も可能です。**管理者**向けには、商品の追加・編集（写真や価格含む）、カテゴリの管理、在庫数の自動更新、注文履歴の閲覧、ユーザー管理ができます。言語は英語とミャンマー語に対応し、通常商品とセール商品を分けて表示します。リアルタイムで在庫数を管理し、売り切れを防ぎます。",
            features: [
                " 顧客は商品を閲覧、注文、レビュー投稿可能",
                " 管理者は商品、カテゴリ、ユーザー管理が可能",
                " 英語とミャンマー語の両方に対応",
                ' 通常商品と「セール商品」を分けて表示',
                " 商品の在庫数を追跡（売り切れ防止）",
                " 顧客の注文履歴の表示",
                ' 顧客が「リュック」を検索',
                " リュックの詳細（価格、説明、写真）を確認",
                " カートに2つのリュックを住所と共に追加",
                " システムが在庫数を2減少させる",
                " 顧客が過去の注文履歴を確認可能",
            ],
        },
        {
            id: 4,
            title: "壁紙サイト管理システム",
            description: "壁紙共有サイト、デジタルアートギャラリー、テーマ型壁紙サイトに最適なプロジェクトです。",
            image: "/img/wallpaperwebsite.png",
            tags: ["Laravel", "MYSQL", "PHP", "Bootstrap", "CSS", "Node.js", "JavaScript"],
            video: "/vd/wallpaperwebsite.mp4",
            longDescription: "このプロジェクトは、ユーザーが高品質な壁紙を閲覧・ダウンロードでき、管理者がコンテンツを管理できるLaravelベースの壁紙ギャラリー＆管理システムです。一般ユーザーは、カテゴリ別に壁紙を閲覧、名前で検索、タイプ別にフィルタリング、詳細ページで複数の解像度（480p、720p、1080p）からダウンロード可能です。関連壁紙の提案機能も搭載されています。",
            features: [
                " 壁紙の閲覧：カテゴリ別に壁紙を表示",
                " 検索機能：名前で壁紙を検索",
                " カテゴリ別フィルター：例「自然」「抽象」など",
                " 壁紙の詳細：高画質プレビューと複数解像度のダウンロード対応",
                " 関連壁紙の提案：似た壁紙を自動表示",
                " ユーザーアカウント：登録/ログインでパーソナライズ機能（今後拡張予定）",
                " 壁紙のアップロード：異なる解像度で新しい壁紙を追加",
                ' カテゴリ管理：「動物」「風景」などのタイプを作成・整理',
                " 壁紙の編集/削除：古い壁紙の情報更新や削除",
                " データベース内の検索＆フィルター：管理作業を効率化",
            ],
        },
        {
            id: 5,
            title: "映画ストリーミングサイト",
            description: "このプロジェクトは、ウェブサイトで映画をストリーミングするのに最適です。",

            image: "https://dummyimage.com/800x600/000/fff.png&text=動画ストリーミングサイト（開発中）",
            tags: ["Laravel", "MYSQL", "PHP", "Bootstrap", "CSS", "Node.js", "JavaScript"],
        },
    ];


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
        const video = document.createElement("video")
        video.src = project.video
        video.controls = true
        video.className = "img-fluid rounded-3 mb-4"
        video.controlsList = "nodownload"
        video.style.maxHeight = "70vh"
        modalMedia.appendChild(video)
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
