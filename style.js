// Mobile Sidebar Toggle
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileSidebar = document.getElementById('mobile-sidebar');

if (menuBtn && mobileSidebar) {
  menuBtn.addEventListener('click', () => {
    mobileSidebar.classList.add('active');
  });
}

if (closeBtn && mobileSidebar) {
  closeBtn.addEventListener('click', () => {
    mobileSidebar.classList.remove('active');
  });
}

// Close sidebar when clicking a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileSidebar.classList.remove('active');
  });
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
  if (mobileSidebar && mobileSidebar.classList.contains('active')) {
    if (!mobileSidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      mobileSidebar.classList.remove('active');
    }
  }
});

// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add active state to sidebar links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.sidebar-nav a, .mobile-nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
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
