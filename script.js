document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Hero button scroll to About section
  const heroBtn = document.querySelector('.hero-btn');
  if (heroBtn) {
      heroBtn.addEventListener('click', function() {
          document.querySelector('#about').scrollIntoView({
              behavior: 'smooth'
          });
      });
  }

  // Active navigation link highlighting
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - sectionHeight / 3) {
              current = section.getAttribute('id');
          }
      });

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === current) {
              link.classList.add('active');
          }
      });
  });

  // Form submission
  const form = document.querySelector('.contact-form');
  if (form) {
      form.addEventListener('submit', function(e) {
          e.preventDefault();
          // Here you would typically send the form data to a server
          // For demonstration, we'll just log it to the console
          const formData = new FormData(form);
          const formValues = Object.fromEntries(formData.entries());
          console.log('Form submitted with values:', formValues);
          
          // Clear form fields
          form.reset();
          
          // Show a success message (you can replace this with a more sophisticated notification)
          alert('Thank you for your message! I will get back to you soon.');
      });
  }

  // Optional: Add animation to skills list
  const skillsList = document.querySelector('.skills-list');
  if (skillsList) {
      const skills = skillsList.querySelectorAll('li');
      skills.forEach((skill, index) => {
          skill.style.animationDelay = `${index * 0.1}s`;
          skill.classList.add('animate-skill');
      });
  }
});