        // Dynamic Content Loading
        const courses = [
            {
                title: "Full-Stack Masterclass",
                description: "Complete MERN Stack Development with TypeScript",
                duration: "12 Weeks",
                students: "1500+ Enrolled",
                icon: "fa-laptop-code"
            },
            {
                title: "Python & Django Pro",
                description: "Backend Development with REST APIs and PostgreSQL",
                duration: "8 Weeks",
                students: "900+ Enrolled",
                icon: "fa-server"
            },
            {
                title: "Modern Frontend Development",
                description: "React, Redux, and Advanced JavaScript Concepts",
                duration: "6 Weeks",
                students: "2000+ Enrolled",
                icon: "fa-code"
            }
        ];

       const projects = [
    {
        title: "E-Commerce Platform",
        description: "Full-featured shopping platform with real-time analytics",
        tech: ["React", "Node.js", "MongoDB"],
        image: "project1.jpg"
    },
    {
        title: "Learning Management System",
        description: "Custom LMS for online course delivery",
        tech: ["Django", "MySQL", "AWS"],
        image: "project2.jpg"
    },
    {
        title: "School Management System",
        description: "A complete school management solution to handle admissions, attendance, and results.",
        tech: ["Django", "PostgreSQL", "Bootstrap"],
        image: "project3.jpg"
    },
    {
        title: "Saraswati Shikshan Sadan Institute Website",
        description: "Official website for Saraswati Shikshan Sadan, managing student records, admissions, and events.",
        tech: ["Django", "HTML", "CSS", "JavaScript"],
        image: "project4.jpg",
        link: "https://www.sssadan.com"
    },
    {
        title: "Book Library Store",
        description: "An online book library store with user authentication, book catalog, and rental system.",
        tech: ["Django", "SQLite", "React"],
        image: "project5.jpg"
    }
];


        function loadCourses() {
            const container = document.getElementById('course-list');
            courses.forEach(course => {
                const card = document.createElement('div');
                card.className = 'col-md-4';
                card.innerHTML = `
                    <div class="course-card p-4 h-100">
                        <i class="fas ${course.icon} fs-1 mb-3 text-success"></i>
                        <h3 class="mb-3">${course.title}</h3>
                        <p class="text-secondary">${course.description}</p>
                        <div class="d-flex justify-content-between text-success">
                            <span>${course.duration}</span>
                            <span>${course.students}</span>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        function loadProjects() {
            const container = document.getElementById('project-list');
            projects.forEach(project => {
                const card = document.createElement('div');
                card.className = 'col-md-6';
                card.innerHTML = `
                    <div class="project-card p-4 h-100">
                        <img src="${project.image}" class="img-fluid mb-3" alt="${project.title}">
                        <h3>${project.title}</h3>
                        <p class="text-secondary">${project.description}</p>
                        <div class="d-flex gap-2">
                            ${project.tech.map(t => `<span class="badge skill-badge">${t}</span>`).join('')}
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        // Initialize on load
        document.addEventListener('DOMContentLoaded', () => {
            loadCourses();
            loadProjects();
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    (function() {
        emailjs.init("yLFLYyUyw_NuiMg-T"); 
    })();

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        // Send email via EmailJS
        emailjs.send("service_8ul4c1f", "template_vzp11pi", {
            from_name: name,
            from_email: email,
            message: message
        }).then(function(response) {
            alert("Message sent successfully!");
            document.getElementById('contactForm').reset();
        }, function(error) {
            alert("Failed to send message. Please try again.");
        });
    });
