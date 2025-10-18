document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const mobileSidebar = document.getElementById('mobile-sidebar');
  const closeBtn = document.getElementById('close-btn');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile sidebar
  menuBtn.addEventListener('click', () => {
    mobileSidebar.classList.toggle('active');
  });

  closeBtn.addEventListener('click', () => {
    mobileSidebar.classList.remove('active');
  });

  // Smooth scrolling for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70; // adjust for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }

      mobileSidebar.classList.remove('active');
    });
  });

  // Highlight active nav link on scroll
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 80; // account for navbar

    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      if (!section) return;
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
});
