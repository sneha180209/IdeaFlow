window.onload = function(){
    Particles.init({
      selector: '.particle-bg',
      maxParticles: 120,
      connectParticles: 'true',
      speed:2,
      minDistance: 140,
      sizeVariations: 4,
      color: '#444444'
      
    });
  }
  


const cursor = document.querySelector(".cursor");
    let timeout;

    document.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
      cursor.style.display = "block";
    });

    document.addEventListener("mouseout", (e) => {
      cursor.style.display = "none";
    });

    // JavaScript code to trigger animations on scroll
    document.addEventListener('DOMContentLoaded', function () {
      const profiles = document.querySelectorAll('.profile');
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      };
    
      const observer = new IntersectionObserver(handleIntersect, observerOptions);
      profiles.forEach((profile) => {
        observer.observe(profile);
      });
    
      let lastScrollTop = 0;
    
      window.addEventListener('scroll', function () {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
          profiles.forEach((profile) => {
            if (isScrolledIntoView(profile)) {
              profile.style.opacity = 1;
            } else {
              profile.style.opacity = 0;
            }
          });
        } else {
          profiles.forEach((profile) => {
            if (isScrolledIntoView(profile)) {
              profile.style.opacity = 1;
            } else {
              profile.style.opacity = 0;
            }
          });
        }
        lastScrollTop = st <= 0 ? 0 : st;
      });
    
      function isScrolledIntoView(el) {
        const rect = el.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;
        const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        return isVisible;
      }
    
      function handleIntersect(entries, observer) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const profile = entry.target;
            profile.classList.add('in-view');
            const animation = profile.classList.contains('slide-left')
              ? 'slide-in-left'
              : profile.classList.contains('slide-bottom')
              ? 'slide-in-bottom'
              : 'slide-in-right';
            profile.style.animation = `${animation} 0.5s forwards`;
            observer.unobserve(profile);
          }
        });
      }
    });
    
    