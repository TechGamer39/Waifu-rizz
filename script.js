document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.waifu-section');

  const reveal = () => {
    const scrollY = window.scrollY + window.innerHeight;

    sections.forEach(section => {
      const offset = section.offsetTop;
      if (scrollY > offset - 100) {
        section.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', reveal);
  reveal();
});
