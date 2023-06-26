
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slider img');

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');
    }

    function previousSlide() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
      showSlide(slideIndex);
    }

    function nextSlide() {
      slideIndex++;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      showSlide(slideIndex);
    }
    function playSong() {
      // Add your own logic to play the song here
      // For example, you can use an <audio> element or a JavaScript audio library
      alert("Song is playing!");
    }

    function navigateTo(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }


