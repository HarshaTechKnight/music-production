document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Initialize Bootstrap scrollspy
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar'
    });
    
    // Add active class to nav items on click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  // Filter functionality
  const filterButtons = document.querySelectorAll('[data-filter]');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Filter items
      const filterValue = this.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Video Lightbox
  const playButtons = document.querySelectorAll('.play-btn');
  playButtons.forEach(button => {
    button.addEventListener('click', function() {
      const videoUrl = this.getAttribute('data-video');
      // Implement lightbox here (e.g., using Bootstrap modal)
      console.log('Open video:', videoUrl);
    });
  });

  // Custom Audio Player
  const audioPlayers = document.querySelectorAll('.custom-player');
  audioPlayers.forEach(player => {
    const audio = player.querySelector('audio');
    const playPause = player.querySelector('.play-pause');
    const progress = player.querySelector('.progress');

    playPause.addEventListener('click', function() {
      if (audio.paused) {
        audio.play();
        playPause.innerHTML = '<i class="fas fa-pause"></i>';
      } else {
        audio.pause();
        playPause.innerHTML = '<i class="fas fa-play"></i>';
      }
    });

    audio.addEventListener('timeupdate', function() {
      const percentage = (audio.currentTime / audio.duration) * 100;
      progress.style.width = percentage + '%';
    });
  });
});