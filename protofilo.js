// Text animation
const roles = [
    "Frontend Developer",
    "Networking Expert",
    "Python Developer",
    "Digital Marketer",
    "Freelancer",
    "Excel Analyst",
    "MS Office Expert"
];

let roleIndex = 0;
const roleElement = document.querySelector('.auto-type');

function updateRole() {
    roleElement.textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
}

// Initial role
updateRole();

// Update role every 2 seconds
setInterval(updateRole, 2000);

// Add cursor element
const cursor = document.createElement('span');
cursor.className = 'cursor';
roleElement.parentNode.appendChild(cursor);

// Scroll reveal functionality
function reveal() {
    const reveals = document.querySelectorAll('.home, .education, .skills, .testimonials, .contact, .heading, .skill-box, .testimonial-item, .timeline-item, .contact form');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('reveal');
        }
    });
}

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

// Add reveal class to home section immediately
document.querySelector('.home').classList.add('reveal');

// Listen for scroll events
window.addEventListener('scroll', reveal);

// Initial check for elements in view
reveal(); 