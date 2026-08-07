// 1. MOBILE MENU TOGGLE
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Close menu when you click a link on mobile
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

// 2. SMOOTH SCROLL + ACTIVE NAV LINK
const sections = document.querySelectorAll('section[id]');
const navLi = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // accounts for sticky header
    if(pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach(li => {
    li.classList.remove('active');
    if(li.getAttribute('href') === '#' + current || li.getAttribute('href') === current + '.html') {
      li.classList.add('active');
    }
  });
});

// Smooth scroll for all # links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// 3. PUPPY INQUIRY FORM - SENDS TO EMAIL
const contactForm = document.querySelector('.contact-form');
const formMsg = document.getElementById('form-msg');

if(contactForm) {
  contactForm.addEventListener('submit', (e) => {
    // Let mailto handle it, but show success message
    setTimeout(() => {
      if(formMsg) {
        formMsg.innerText = "✅ Thanks! Your message was sent. I'll reply to you at paytonjames683@gmail.com within 24 hours.";
        formMsg.style.color = "green";
        formMsg.style.marginTop = "15px";
        formMsg.style.fontWeight = "bold";
      }
      contactForm.reset();
    }, 500);
  });
}

// 4. SCROLL TO TOP BUTTON - Shows after scrolling
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '⬆';
scrollBtn.id = 'scrollTopBtn';
scrollBtn.style.cssText = `
  position:fixed; bottom:20px; right:20px; z-index:99;
  background:var(--primary); color:white; border:none;
  padding:12px 16px; border-radius:50%; font-size:18px;
  cursor:pointer; display:none; box-shadow:0 4px 12px rgba(0,0,0,0.2);
`;
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  if(window.scrollY > 400) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 5. PUPPY CARD HOVER EFFECT - Makes site feel premium
document.querySelectorAll('.puppy-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px)';
    card.style.transition = '0.3s';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});
