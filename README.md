<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hein Htet Aung</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <!-- Your custom CSS (if any) -->
    <style>
        /* Add your custom styles here */
        body {
            padding-top: 56px;
            /* Adjust based on your navbar height */
        }
        .skill {
            margin-bottom: 20px;
        }.skill img {
            max-width: 50px; /* Adjust the max-width to control the image size */
            height: auto;
            margin-bottom: 10px;
        }
    </style>
</head>

<body>
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="#">Hein Htet Aung</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#projects">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#skills">Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- About Section -->
    <section id="about" class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <h2>About Me</h2>
                <p>I am a solo web developer.I'm 18 years old.I live in myanmar.I have no business experience.But I develop projects on my own.</p>
                <p>I'm interest in backend.And I'm not good at frontend so my ui looks bad.That's why i use bootstrap for ui.</p>
                <p>My english skill is basic but I thinks i can communicate.</p>
                <p>My japanese skill is JLPT N1 level.</p>
                <p>Here are  some project that i developed.</p>
            </div>
            <div class="col-md-6">
                <!-- Add an image of yourself here -->
                <img src="wallpapersden.com_one-piece-hd-luffy-cool-art_1600x900.jpg" alt="Your Name"
                    class="img-fluid rounded-circle">
            </div>
        </div>
    </section>
    <!-- Projects Section -->
<section id="projects" class="bg-light container mt-5">
    <h2 class="text-center">Projects</h2>
    <!-- Add your project cards here -->
    <div class="row">
        <div class="col-md-4 mb-4">
            <div class="card">
                <!-- Add your image here -->
                <img src="Screenshot 2024-01-31 150427.png" alt="Project 1" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">Project 1</h5>
                    <p class="card-text">This is the description of your project.</p>
                    <a href="#" class="btn btn-primary">View Project</a>
                </div>
            </div>
            <div class="card">
                <!-- Add your image here -->
                <img src="Screenshot 2024-01-31 150427.png" alt="Project 1" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">Project 1</h5>
                    <p class="card-text">This is the description of your project.</p>
                    <a href="#" class="btn btn-primary">View Project</a>
                </div>
            </div>
            <div class="card">
                <!-- Add your image here -->
                <img src="Screenshot 2024-01-31 150827.png" alt="Project 1" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">Project 1</h5>
                    <p class="card-text">This is the description of your project.</p>
                    <a href="#" class="btn btn-primary">View Project</a>
                </div>
            </div>
        </div>
        <!-- Add more project cards as needed -->
    </div>
</section>

    <!-- Skills Section -->
    <section id="skills" class="container mt-5">
        <h2 class="text-center">Skills</h2>
        <!-- Add your programming languages and skills here -->
        <div class="row justify-content-center">
            <div class="col-md-3 text-center skill">
                <img src="https://www.php.net/images/logos/new-php-logo.png" alt="PHP" class="img-fluid">
                <p>PHP</p>
            </div>
            <div class="col-md-3 text-center skill">
                <img src="4373217_java_logo_logos_icon.png" alt="Java" class="img-fluid">
                <p>Java</p>
            </div>
            <div class="col-md-3 text-center skill">
                <img src="317755_badge_html_html5_achievement_award_icon.png" alt="HTML" class="img-fluid">
                <p>HTML</p>
            </div>
            <div class="col-md-3 text-center skill">
                <img src="317756_badge_css_css3_achievement_award_icon.png" alt="CSS" class="img-fluid">
                <p>CSS</p>
            </div>
            <div class="col-md-3 text-center skill">
                <img src="9035061_logo_javascript_icon.png" alt="JavaScript" class="img-fluid">
                <p>JavaScript</p>
            </div>
            <div class="col-md-3 text-center skill">
                <img src="8666409_laravel_icon.png" alt="Laravel" class="img-fluid">
                <p>Laravel</p>
            </div>
            <div class="col-md-3 text-center skill">
                <img src="8546808_bootstrap_icon.png" alt="Bootstrap" class="img-fluid">
                <p>Bootstrap</p>
            </div>
            <div class="col-md-3 text-center skill">
                <img src="4691303_mysql_icon.png" alt="MySQL" class="img-fluid">
                <p>MySQL</p>
            </div>
            <!-- Add more skills as needed -->
        </div>
    </section>
    <!-- Contact Section -->
    <section id="contact" class="container mt-5">
        <h2 class="text-center">Contact Me</h2>
        <p class="text-center">Feel free to reach out to me for collaboration, questions, or just to say hi!</p>
        <!-- Add a contact form or your contact information here -->
        <div class="text-center">
            <p>Email: heinhtetaungfr@gmail.com</p>
            <p>GitHub: <a href="https://github.com/HeinHtetAung22" target="_blank">My GitHub Profile</a></p>
        </div>
    </section>

    <!-- Bootstrap JavaScript and dependencies -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

</body>

</html>
